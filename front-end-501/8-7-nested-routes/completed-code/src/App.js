import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import users from "./data.json";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Users users={users} />} />
        <Route path="/users/:userId/*" element={<User users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
