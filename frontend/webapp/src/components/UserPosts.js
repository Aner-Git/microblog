import React from "react";
import Posts from "./Posts";

export default function UserPosts({ userID }) {
  let url = `/users/${userID}/posts`;
  return <Posts {...url} />;
}
