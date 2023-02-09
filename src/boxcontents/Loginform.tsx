export default function Loginform() {
  return (
    <div className="form">
      <span>
        <h3>User Name:</h3>
        <input type="text" name="username" placeholder="User Name" id="" />
      </span>
      <span>
        <h3>Password:</h3>
        <input type="password" name="password" placeholder="Password" />
      </span>

      <button type="submit">Log in</button>
    </div>
  );
}
