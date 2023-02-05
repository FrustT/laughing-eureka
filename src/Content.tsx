import './index.css';
import BoxContent from './BoxContent';

function Content() {
	return (
		<div className="content">
			<Box />
		</div>
	);
}
function Box() {
	return (
		<div className="box">
			<BoxContent />
		</div>
	);
}

export default Content;
