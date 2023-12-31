import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home Page</p>;
}

// Updated App component for React Router v6
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      {Array(10)
        .fill(1)
        .map((one, index) => index + one)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </div>
        ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
