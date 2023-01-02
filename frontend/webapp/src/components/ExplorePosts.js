import React from "react";
import Posts from "./Posts";

export default function ExplorePosts() {
  let url = "/posts";
  return <Posts {...url} />;
}
