import React from "react";
import { Link, useParams } from "react-router-dom";


export const PostLink = ({ post }) => {
  const { userId } = useParams();

  return (
    <li className="list-group-item text-truncate">
      <Link to={`/users/${userId}/posts/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
