import React from "react";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the `useRouteMatch()` hook from "react-router-dom" to get the current URL path
*/

export const PostLink = ({ post }) => {
  return (
    <li className="list-group-item text-truncate">
      <a>{post.title}</a>
    </li>
  );
};

export default PostLink;
