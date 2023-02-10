import { useState, useEffect } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users/')
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user) =>
        Object.keys(user).map((key, i) => (
          <p key={i}>
            <span>
              {key} : {user[key]}
            </span>
          </p>
        ))
      )}
      <div clasName="border" />
    </div>
  );
}
