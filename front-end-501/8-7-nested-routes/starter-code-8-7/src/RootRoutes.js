import React from 'react'
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";

function RootRoutes() {
  return (
    <Routes>
    <Route path="/*" element={<Users />} />
    <Route path="/users/:userId/*" element={<User />} />
    </Routes>
  )
}

export default RootRoutes
