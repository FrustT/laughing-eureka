import '../index.css';

export default function Loginform() {
	return (
		<form action="/login" method="get">
			<h2>Log in</h2>
			<input
				type="text"
				name="username"
				placeholder="User Name"
				id=""
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				id=""
			/>
			<div>
				<button type="submit" value="Log in">
					Log in
				</button>
			</div>
		</form>
	);
}
