import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Box() {
	const windows = [`login`, `signup`];
	const [activeWindow, setActiveWindow] = useState(0);
	return (
		<div className="box">
			<div className="nav">
				<button><Link to={'login'}>Log in</Link></button>
				<button><Link to={'signup'}>Sign up</Link></button>
				
			</div>
			<Outlet />
		</div>
	);
}
