import React from "react";
import users from "./data.json";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  return (
    <div>
      <div>
        <div>
          <label>User Name</label>
        </div>
        <div>{user.username}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>EMail</label>
        </div>
        <div>{user.email}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Phone</label>
        </div>
        <div>{user.phone}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Company</label>
        </div>
        <div>{(user.company || {}).name}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Website</label>
        </div>
        <div>{user.website}</div>
      </div>
      <hr />
    </div>
  );
};

export default UserProfile;
