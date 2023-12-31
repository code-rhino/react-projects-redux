import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
       <nav>
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
       {/* Setup routes with route paramaters as needed */}
    </div>
    //

  );
}

export default App;
