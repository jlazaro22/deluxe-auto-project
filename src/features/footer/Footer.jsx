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
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className='container'>
			<section className='footer-util-info'>
				<article className='footer-social-links'>
					<Link to={'/'}>
						<img src={pageLogo} alt='deluxe auto logo' />
					</Link>
					<div className='footer-social-links-wrapper'>
						<IoLogoFacebook />
						<IoLogoInstagram />
						<IoLogoTwitter />
					</div>
				</article>

				<article className='footer-contacts'>
					<p>
						<IoCallOutline />
						<a href='tel:+351200000000'>+351 200 000 000</a>
					</p>
					<p>
						<IoCallOutline />
						<a href='tel:+351900000000'>+351 900 000 000</a>
					</p>
					<p>
						<BsEnvelopeAt />
						<a href='mailto:clientes@deluxeauto.blabla'>
							clientes@deluxeauto.blabla
						</a>
					</p>
				</article>

				<article className='footer-address'>
					<p>
						<IoLocationOutline />
						<span>Rua Deluxe, 999 - Lisboa, Portugal</span>
					</p>
					<p>
						<BsDoorOpen />
						<span className='schedule-wrapper'>
							<span>Segunda - Sexta: 9h:00 - 18h:00</span>
							<span>Sábado: 9h:00 - 13h:00</span>
							<span>Domingo: Fechado</span>
						</span>
					</p>
				</article>
			</section>

			<section className='footer-quickaccess'>
				<article className='footer-sitemap'>
					<div className='usefull'>
						<h4>Links Úteis</h4>
						<Link to={'/'}>Início</Link>
						<Link to={'/cars-gallery'}>Veículos</Link>
						<Link to={'/about-us'}>Sobre Nós</Link>
						<Link to={'/contact-us'}>Contactos</Link>
					</div>
					<div className='services'>
						<h4>Serviços</h4>
						<Link to={'/services/credit-sim'}>Soluções de Financiamento</Link>
						<Link to={'/services/market-value'}>Avalie o seu veículo</Link>
						<Link to={'/services/warranty'}>Garantia PósVenda</Link>
					</div>
				</article>

				<article className='footer-policys'>
					<div className='policys'>
						<h4>Privacidade</h4>
						<a href='#'>Política de Privacidade</a>
						<a href='#'>Política de Cookies</a>
					</div>
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
				<form>
					<div className='form-control'>
						<label htmlFor='news-email' className='uppercase-text'>
							E-Mail
						</label>
						<input type='email' id='news-email' placeholder='E-mail' />
					</div>
					<div className='form-control'>
						<input type='checkbox' className='rgpd-chk' id='rgpd-chk' />
						<label htmlFor='rgpd-chk'>
							Ao selecionar esta opção, declara que conhece a nossa{' '}
							<a href='#'>Política de Privacidade</a> e que consente que sejam
							utilizados os seus dados pessoais de acordo com a mesma.
						</label>
					</div>
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
