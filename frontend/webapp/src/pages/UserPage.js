import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";
import Spinner from "react-bootstrap/Spinner";
import Body from "../components/Body";
import User from "../components/User";
import { default as Posts } from "../components/UserPosts";

export default function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState(undefined);
  let client = useApi();

  useEffect(() => {
    let fetcher = async () => {
      let response = await client.get(`/users/${username}`);
      //we have data.
      setUser(response.ok ? response.body : null);
    };
    fetcher();
  }, [client, username]);

  return (
    <Body>
      {user === undefined ? (
        <Spinner animation="border" />
      ) : user === null ? (
        <b>User not found</b>
      ) : (
        <>
          <User user={user} />
          <Posts userID={user.id} />
        </>
      )}
    </Body>
  );
}
