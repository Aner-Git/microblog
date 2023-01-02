import React from "react";

const LocaleDate = ({ date }) => {
  if (!date) {
    return <>unknown</>;
  }
  return <>{new Date(Date.parse(date)).toLocaleDateString()}</>;
};

export default LocaleDate;
