import { useState } from 'react';

export default function StatePlayground() {
  const [user, setUser] = useState({
    name: 'Burak',
    age: 24,
    appleCount: 0,
  });
  function changeName(_name: string) {
    setUser({ ...user, name: _name });
  }
  function changeAge(_age: string) {
    setUser({ ...user, age: _age !== '' ? parseInt(_age, 10) : 0 });
  }
  function changeAppleCount(_count: string) {
    setUser({
      ...user,
      appleCount: _count !== '' ? parseInt(_count, 10) : 0,
    });
  }

  return (
    <div>
      <p>My state learning page.</p>
      <p>My name is {user.name}</p>
      <p>I am {user.age} years old.</p>
      <p>I have {user.appleCount} apples.</p>
      <div
        className="form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>
          <label>Name</label>
          <input type="text" value={user.name} onChange={(e) => changeName(e.target.value)} />
        </span>
        <span>
          <label>Age </label>
          <input type="text" value={user.age} onChange={(e) => changeAge(e.target.value)} />
        </span>
        <span>
          <label>Apple Count </label>
          <input
            type="text"
            value={user.appleCount}
            onChange={(e) => changeAppleCount(e.target.value)}
          />
        </span>
      </div>
    </div>
  );
}
