import React from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const location = useLocation();
  const url = location.pathname;

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`/users/${user.id}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>

        </div>

        <Routes>
          <Route path={`posts/*`} element={<UserPosts posts={user.posts} />} />
          <Route path={`/`} element={<UserProfile user={user} />} />
        </Routes>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
