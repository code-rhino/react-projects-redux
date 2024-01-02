import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { userId } = useParams();
  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`/users/${userId}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Routes>
          <Route path={`:postId`} element={<UserPost posts={posts} />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserPosts;
