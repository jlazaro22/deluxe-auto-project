import { useRef, useState } from 'react';
import Button from '../../features/UI/Button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {
	let form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isPolicyChecked, setIsPolicyChecked] = useState(false);
	const buttonToggle =
		!name.trim() || !email.trim() || !message.trim() || !isPolicyChecked;

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
				`${import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID}`,
				form.current,
				`${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
			)
			.then((result) => {
				console.log(result.text);
				toast.success('Enviado! Obrigado.');
			})
			.catch((error) => {
				console.log(error.text);
				toast.error('Erro! Tente novamente por favor.');
			});

		setName('');
		setEmail('');
		setMessage('');
		setIsPolicyChecked(false);
	};

	return (
		<article className='contacts'>
			<header>
				<h1 className='underline'>Contactos</h1>
				<h5>
					Estamos ao seu dispor para qualquer questão ou informação que
					necessite.
				</h5>
			</header>
			<form ref={form} className='contact-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name' className='uppercase-text'>
						Nome:
					</label>
					<input
						type='text'
						id='name'
						name='from_name'
						placeholder='Nome e Apelido'
						required
						value={name}
						onChange={({ target: { value } }) => setName(value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='email' className='uppercase-text'>
						E-mail:
					</label>
					<input
						type='email'
						id='email'
						name='user_email'
						placeholder='E-mail para contacto'
						required
						value={email}
						onChange={({ target: { value } }) => setEmail(value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='message' className='uppercase-text'>
						Mensagem:
					</label>
					<textarea
						id='message'
						name='message'
						rows={10}
						placeholder='As suas questões...'
						required
						value={message}
						onChange={({ target: { value } }) => setMessage(value)}
					></textarea>
				</div>
				<div className='form-control'>
					<input
						type='checkbox'
						className='rgpd-chk'
						id='rgpd-chk'
						value={isPolicyChecked}
						onChange={() => setIsPolicyChecked((checked) => !checked)}
					/>
					<label htmlFor='rgpd-chk'>
						Ao selecionar esta opção, declara que conhece a nossa{' '}
						<a href='#'>Política de Privacidade</a> e que consente que sejam
						utilizados os seus dados pessoais de acordo com a mesma.
					</label>
				</div>
				<Button type='submit' disabled={buttonToggle}>
					Submeter
				</Button>
			</form>
		</article>
	);
}
