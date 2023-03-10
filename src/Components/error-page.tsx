import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error: any = useRouteError(); //since its already unknown type in doc ':any' seemed right enough
	console.error(error);
	return (
		<div className="error-page">
			<p>
				<h1> Sorry, </h1>an unexpected error has occured.
			</p>
			<h2>{error.status}</h2>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<p>{error.data.message}</p>
		</div>
	);
}
