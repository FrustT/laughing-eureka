export default function Loginform() {
	return (
		<div className="form">
			<span>
				<label>User Name:</label>
				<input
					type="text"
					name="username"
					placeholder="User Name"
					id=""
				/>
			</span>
			<span>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					id=""
				/>
			</span>

			<button type="submit">Log in</button>
		</div>
	);
}
