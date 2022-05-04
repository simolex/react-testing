import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get("http://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
