import { useState } from 'react';
export default function Signupform() {
	return (
		<form action="users/add" method="post">
			<input
				type="text"
				name="username"
				placeholder="User Name"
				id=""
			/>
			<input
				type="text"
				name="name"
				placeholder="Full Name"
				id=""
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				id=""
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				id=""
			/>
			<input
				type="password"
				name="passwordAgain"
				placeholder="Password Again"
				id=""
			/>

			<button type="submit">Sign up</button>
		</form>
	);
}
