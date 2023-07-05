import { useState, useEffect } from "react";

const secondsIn = [
  ["year", 60 * 60 * 24 * 365],
  ["month", 60 * 60 * 24 * 30],
  ["week", 60 * 60 * 24 * 7],
  ["day", 60 * 60 * 24],
  ["minute", 60],
];

const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

function getTimeAgo(date) {
  let getSecondsPassed = function (date) {
    let seconds = Math.round((date.getTime() - new Date().getTime()) / 1000);
    return Math.abs(seconds);
  };

  const seconds = getSecondsPassed(date);
  let bestUnit, bestTime, bestInterval;

  for (let [unit, unitSeconds] of secondsIn) {
    if (seconds >= unitSeconds) {
      bestUnit = unit;
      bestTime = Math.round(seconds / unitSeconds);
      bestInterval = unitSeconds / 2;
      break;
    }
  }

  if (!bestUnit) {
    bestUnit = "second";
    bestTime = Math.trunc(seconds / 10) * 10;
    bestInterval = 10;
  }

  return [bestTime, bestUnit, bestInterval];
}

export default function TimeAgo({ isoDate }) {
  const date = new Date(Date.parse(isoDate));
  let [, setUpdate] = useState(0);
  const [bestTime, bestUnit, interval] = getTimeAgo(date);

  useEffect(() => {
    let intID = setInterval(() => {
      setUpdate((update) => update + 1);
    }, interval * 1000);
    return () => {
      clearInterval(intID);
    };
  }, [interval]);

  return <span title={date.toString()}>{rtf.format(bestTime, bestUnit)}</span>;
}
