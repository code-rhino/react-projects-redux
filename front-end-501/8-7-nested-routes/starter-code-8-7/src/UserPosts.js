import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
    const location = useLocation();
    const url = location.pathname;

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        {/* TODO: Display <UserPost /> if there is a :postId in the url, otherwise display "No post selected..." */}
      </div>
    </div>
  );
};

export default UserPosts;
