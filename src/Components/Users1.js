import React from "react";
import Useritem1 from "./UserItem1";

const Users1 = (props) => {
  // Check if props.users is defined before using map
  if (!props.users) {
    return <div>No users available</div>;
  }

  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <div key={user.id}>
          <Useritem1 user={user} />
        </div>
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users1;
