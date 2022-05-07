import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UsersForTests = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = async () => {
    const resp = await axios.get("http://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      loadUsers();
      setIsLoading(false);
    }, 1000);
  }, []);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      {isLoading && <h1 id="is-loading">Идет загрузка...</h1>}
      {users.length && (
        <div id="users-list">
          {users.map((user) => (
            <User onDelete={onDelete} user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersForTests;
