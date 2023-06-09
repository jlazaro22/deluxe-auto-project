import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import pageLogo from '/images/pictures/page-logo/page-logo.svg';
import claims from '/images/pictures/livro-reclamacoes/livro-reclamacoes.png';
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoTwitter,
	IoCallOutline,
	IoLocationOutline,
} from 'react-icons/io5';
import { BsEnvelopeAt, BsDoorOpen } from 'react-icons/bs';
import Button from '../UI/Button';
import { toast } from 'react-toastify';

export default function Footer() {
	let form = useRef();
	const [newsEmail, setNewsEmail] = useState('');
	const [isPolicyChecked, setIsPolicyChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
				`${import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID}`,
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

		setNewsEmail('');
		setIsPolicyChecked(false);
	};

	return (
		<footer className='container'>
			<section className='footer-util-info'>
				<article className='footer-social-links'>
					<Link to={'/'}>
						<img src={pageLogo} alt='deluxe auto logo' />
					</Link>
					<ul className='footer-social-links'>
						<li>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noreferrer'
							>
								<IoLogoFacebook />
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noreferrer'
							>
								<IoLogoInstagram />
							</a>
						</li>
						<li>
							<a href='https://twitter.com' target='_blank' rel='noreferrer'>
								<IoLogoTwitter />
							</a>
						</li>
					</ul>
				</article>

				<ul className='footer-contacts'>
					<li>
						<IoCallOutline />
						<a href='tel:+351200000000'>+351 200 000 000</a>
					</li>
					<li>
						<IoCallOutline />
						<a href='tel:+351900000000'>+351 900 000 000</a>
					</li>
					<li>
						<BsEnvelopeAt />
						<a href='mailto:clientes@deluxeauto.blabla'>
							clientes@deluxeauto.blabla
						</a>
					</li>
				</ul>

				<ul className='footer-address'>
					<li>
						<IoLocationOutline />
						<span>Rua Deluxe, 999 - Lisboa, Portugal</span>
					</li>
					<li>
						<BsDoorOpen />
						<span className='schedule-wrapper'>
							<span>Segunda - Sexta: 9h:00 - 18h:00</span>
							<span>Sábado: 9h:00 - 13h:00</span>
							<span>Domingo: Fechado</span>
						</span>
					</li>
				</ul>
			</section>

			<section className='footer-quickaccess'>
				<article className='footer-sitemap'>
					<ul className='usefull'>
						<h4>Links Úteis</h4>
						<li>
							<Link to={'/'}>Início</Link>
						</li>
						<li>
							<Link to={'/pages/cars-gallery'}>Veículos</Link>
						</li>
						<li>
							<Link to={'/pages/about-us'}>Sobre Nós</Link>
						</li>
						<li>
							<Link to={'/pages/contact-us'}>Contactos</Link>
						</li>
					</ul>
					<ul className='services'>
						<h4>Serviços</h4>
						<li>
							<Link to={'/pages/services/credit-sim'}>
								Soluções de Financiamento
							</Link>
						</li>
						<li>
							<Link to={'/pages/services/market-value'}>
								Avalie o seu veículo
							</Link>
						</li>
						<li>
							<Link to={'/pages/services/warranty'}>Garantia PósVenda</Link>
						</li>
					</ul>
				</article>

				<article className='footer-policys'>
					<ul className='policys'>
						<h4>Privacidade</h4>
						<li>
							<a href='#'>Política de Privacidade</a>
						</li>
						<li>
							<a href='#'>Política de Cookies</a>
						</li>
					</ul>
					<a
						href='https://www.livroreclamacoes.pt/INICIO/'
						target='_blank'
						rel='noreferrer'
						className='claims'
					>
						<img src={claims} alt='livro de reclamações logo' />
					</a>
				</article>
			</section>

			<section className='footer-newsletter'>
				<header>
					<h4>Subscreva a Newsletter</h4>
					<p>Fique a par das nossas novidades.</p>
				</header>
				<form ref={form} onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='news-email' className='uppercase-text'>
							E-Mail
						</label>
						<input
							type='email'
							id='news-email'
							name='user_email'
							placeholder='E-mail'
							required
							value={newsEmail}
							onChange={({ target: { value } }) => setNewsEmail(value)}
						/>
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
					<Button
						type='submit'
						disabled={!newsEmail.trim() || !isPolicyChecked}
					>
						Subscrever
					</Button>
				</form>
			</section>
			<section className='copyright'>
				<p>
					&copy; Copyright 2023 DeluxeAuto by joaolazaro.dev - Fins Académicos
				</p>
			</section>
		</footer>
	);
}
