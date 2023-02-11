import { useState } from 'react';

export default function Signupform() {
  const [passwords, setPasswords] = useState({
    password1: '',
    password2: '',
  });
  const [user, setUser] = useState({
    username: 'FrustT',
    fullName: 'Burak Erinç',
    password: 'buraburakburak',
    email: 'oawefkopawfoai@aflmfaewmaewfi',
    birthDate: '',
  });
  function changeUsername(_username: string) {
    setUser({ ...user, username: _username });
  }
  function changeFullName(_fullName: string) {
    setUser({ ...user, fullName: _fullName });
  }
  function changeEmail(_email: string) {
    setUser({ ...user, email: _email });
  }
  function changebirthDate(_birthDate: string) {
    setUser({ ...user, birthDate: _birthDate });
  }
  function changePassword(_password: string) {
    setUser({ ...user, password: _password });
  }
  function changePassword1(_password1: string) {
    setPasswords({ ...passwords, password1: _password1 });
  }

  function changePassword2(_password2: string) {
    setPasswords({ ...passwords, password2: _password2 });
  }
  function submit() {
    fetch('http://localhost:3000/api/v1/users/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error(`Request rejected with status ${res.status}`);
      })
      .catch(console.error);
  }

  function debugSubmit() {
    const body = JSON.stringify(user);
    console.log(body);
  }
  return (
    <div className="form">
      <span>
        <label>User Name: </label>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={user.username}
          onChange={(e) => changeUsername(e.target.value)}
        />
      </span>
      <span>
        <label>Full Name: </label>
        <input
          type="text"
          name="Name"
          placeholder="Full Name"
          value={user.fullName}
          onChange={(e) => changeFullName(e.target.value)}
        />
      </span>
      <span>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => changeEmail(e.target.value)}
        />
      </span>
      <span>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={passwords.password1}
          onChange={(e) => changePassword1(e.target.value)}
        />
      </span>
      <span>
        <label>Password Again: </label>
        <input
          type="password"
          value={passwords.password2}
          placeholder="Password Again"
          onChange={(e) => {
            changePassword2(e.target.value);
            if (passwords.password1 === e.target.value) {
              changePassword(e.target.value);
            }
          }}
        />
      </span>
      <span>
        <label>Birth Date:</label>
        <input
          type="date"
          value={user.birthDate}
          onChange={(e) => changebirthDate(e.target.value)}
        />
      </span>
      <button type="submit" onClick={() => submit()}>
        Sign up
      </button>
    </div>
  );
}
