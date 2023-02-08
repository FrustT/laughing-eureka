export default function Loginform() {
	return (
		<form>
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
				<button type="submit">Log in</button>
			</div>
		</form>
	);
}
