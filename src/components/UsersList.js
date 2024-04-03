import React from "react";
import { Link } from "react-router-dom";

function UsersList(props) {
  return (
    <tbody>
      {console.log(props.users)}
      {props.users.map((user) => (
        <tr key={user.id}>
          <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          
        </tr>
      ))}
    </tbody>
  );
}

export default UsersList;