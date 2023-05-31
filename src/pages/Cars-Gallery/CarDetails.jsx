import { useParams } from 'react-router-dom';

export default function CarDetails() {
	let params = useParams();
	console.log(params.id);

	return <div>CarDetails</div>;
}
