'use client';
import { useState, useEffect } from "react";
import { getUsers } from "../_actions/users";
import { User } from "../types";    

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>
    <h1>Users</h1>
    <ul>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  </div>;
}