import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useApi } from "../contexts/ApiProvider";
import Post from "./Post";
import More from "./More";

export default function Posts({ url = "/feed" }) {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(undefined);
  let client = useApi();

  useEffect(() => {
    let fetcher = async () => {
      let response = await client.get(url, { offset: 0, limit: 5 });
      if (response.ok) {
        //we have data.
        setPosts(response.body.data);
        setPagination(response.body.pagination);
      } else {
        setPosts(null);
      }
    };
    fetcher();
  }, [url, client]);

  const handleNextPage = async () => {
    const response = await client.get(url, {
      after: posts[posts.length - 1].timestamp,
      limit: 5,
    });
    if (response.ok && response.body.data.length !== 0) {
      setPosts([...posts, ...response.body.data]);
      setPagination(response.body.pagination);
    }
  };

  return (
    <>
      {posts === undefined ? (
        <Spinner animation="border" />
      ) : posts === null ? (
        <b> Error fetching posts </b>
      ) : (
        <>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          <div className="More">
            <More pagination={pagination} handleNextPage={handleNextPage} />
          </div>
        </>
      )}
    </>
  );
}
