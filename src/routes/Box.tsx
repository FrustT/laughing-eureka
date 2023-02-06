import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';

export default function Box() {
	const windows = [`login`, `signup`];
	const [activeWindow, setActiveWindow] = useState(0);
	return (
		<div className="box">
			<div>
				<Link to={'login'}>Log in</Link>
				<Link to={'signup'}>Sign up</Link>
			</div>
			<Outlet />
		</div>
	);
}
