import React from 'react'
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import UserProfile from "./UserProfile";
import UserPost from "./UserPost";
import UserPosts from "./UserPosts";

function RootRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/users/:userId" element={<User />}>
      <Route path="" element={<UserProfile />} />
      <Route path="posts" element={<UserPosts />}>
        <Route path="" element={<p>No post selected</p>} />
        <Route path=":postId" element={<UserPost />}/>
      </Route>

    </Route>
    </Routes>
  )
}

export default RootRoutes
