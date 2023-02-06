import Loginform from './boxcontents/Loginform';
import Submitform from './boxcontents/Signupform';
import { useState } from 'react';
import './index.css';

export default function Box() {
	const windows = [<Loginform />, <Submitform />];
	const [activeWindow, setActiveWindow] = useState(0);
	return (
		<div className="box">
			<div>
				<button onClick={() => setActiveWindow(0)}>
					Login
				</button>
				<button onClick={() => setActiveWindow(1)}>
					Sign Up
				</button>
			</div>
			{windows[activeWindow]}
		</div>
	);
}
