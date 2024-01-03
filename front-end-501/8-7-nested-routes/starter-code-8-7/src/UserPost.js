import React from "react";
import { useParams } from "react-router-dom";
import users from "./data.json";

export const UserPost = ({ posts = [] }) => {
  const { postId } = useParams();
  const { userId } = useParams();
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }
  if (!postId) {
    throw new Error("No URL parameter for postId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  
  if (!postId) {
    throw new Error("No URL parameter for postId");
  }

  const post = user.posts.find((post) => `${post.id}` === postId);

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};

export default UserPost;
