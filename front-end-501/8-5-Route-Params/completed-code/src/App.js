import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

const About = () => <h1>You are on the about page</h1>;
const Contact = () => <h1>Please feel free to email us</h1>;
const Home = () => <h1>Welcome to the home page</h1>;
const NoMatch = () => <h1>404 Not Found</h1>;
const UserNew = () => <h1>Unable to create a new user</h1>;
function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
       <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
       <Link to="/user/new">New User</Link>
       
        {Array(10)
          .fill()
          .map((_, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                User{id}
              </Link>
            </div>
          ))}
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/new" element={<UserNew />} />
            <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
    //

  );
}

export default App;
