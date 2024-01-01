import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const About = () => <h1>You are on the about page</h1>;
const Contact = () => <h1>Please feel free to email us</h1>;
const Home = () => <h1>Welcome to the home page</h1>;
const NoMatch = () => <h1>404 Not Found</h1>;

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
