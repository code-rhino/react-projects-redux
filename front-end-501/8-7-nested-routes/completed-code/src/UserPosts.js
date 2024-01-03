import React from "react";
import users from "./data.json";
import { Link, Outlet, useParams } from "react-router-dom";

export const UserPosts = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }
  const user = users.find((user) => `${user.id}` === userId);
  const postLinks = user.posts.map((post) => (
    <li key={post.id}>
      <Link to={`/users/${userId}/posts/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (

    <div>
      <ul>{postLinks}</ul>
      <Outlet />

    </div>
  );
};

export default UserPosts;
