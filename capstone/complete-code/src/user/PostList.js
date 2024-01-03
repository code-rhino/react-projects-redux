import React , {useState, useEffect} from "react";
import {
  useParams,
  Outlet,
} from "react-router-dom";
import { fetchUserWithPosts } from "../api";
import PostLink from "./PostLink";

export const PostList = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);


  const postLinks = user?.posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
};

export default PostList;
