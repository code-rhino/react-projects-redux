import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CardList from "./home/CardList";
import User from "./user/User";
import PostList from './user/PostList';
import Post from './user/Post';
import NoPostSelectedMessage from "./user/NoPostSelectedMessage";
import UserProfile from './user/UserProfile';
import NotFound from "./common/NotFound";

function RootRoutes() {
  return (
    <Routes>
        <Route path="/" element={<CardList />}/>
        <Route path="/users/:userId" element={<User />}>
            <Route path="" element={<UserProfile />} />
            <Route path="posts" element={<PostList />}>
                <Route path="" element={<NoPostSelectedMessage />} />
                <Route path=":postId" element={<Post />} />
            </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RootRoutes
