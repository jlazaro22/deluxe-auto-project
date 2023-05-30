import ContactForm from './ContactForm';
import MapAddress from './MapAddress';

export default function Contacts() {
	return (
		<section className='contacts-page container'>
			<ContactForm />
			<MapAddress />
		</section>
	);
}
