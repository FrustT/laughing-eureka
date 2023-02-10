import { Link, Outlet } from 'react-router-dom';

export default function Box() {
  return (
    <div className="box">
      <div className="nav">
        <button>
          <Link to="login">Log in</Link>
        </button>
        <button>
          <Link to="signup">Sign up</Link>
        </button>
        <button>
          <Link to="users">Users</Link>
        </button>
        <button>
          <Link to="state">State Playground</Link>
        </button>
      </div>
      <div className="border" />
      <Outlet />
    </div>
  );
}
