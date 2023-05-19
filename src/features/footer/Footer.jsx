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
					<img src={pageLogo} alt='deluxe auto logo' />
					<div className='footer-social-links-wrapper'>
						<IoLogoFacebook />
						<IoLogoInstagram />
						<IoLogoTwitter />
					</div>
				</article>

				<article className='footer-contacts'>
					<p>
						<IoCallOutline />
						<span>+351 200 000 000</span>
					</p>
					<p>
						<IoCallOutline />
						<span>+351 900 000 000</span>
					</p>
					<p>
						<BsEnvelopeAt />
						<span>clientes@deluxeauto.blabla</span>
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
						<h2>Links Úteis</h2>
						<Link to={'/'}>Início</Link>
						<Link to={'/cars-gallery'}>Veículos</Link>
						<Link to={'/about-us'}>Sobre Nós</Link>
						<Link to={'/contact-us'}>Contactos</Link>
					</div>
					<div className='services'>
						<h2>Serviços</h2>
						<Link to={'/services/credit-sim'}>Soluções de Financiamento</Link>
						<Link to={'/services/market-value'}>Avalie o seu veículo</Link>
						<Link to={'/services/warranty'}>Garantia PósVenda</Link>
					</div>
				</article>

				<article className='footer-policy'>
					<div className='policys'>
						<h2>Privacidade</h2>
						<a href='#'>Política de Privacidade</a>
						<a href='#'>Política de Cookies</a>
					</div>
					<div className='claims'>
						<img src={claims} alt='livro de reclamações logo' />
					</div>
				</article>
			</section>

			<section className='footer-newsletter'>
				<h2>Subscreva a Newsletter</h2>
				<p>Fique a par das nossas novidades.</p>
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
							Ao selecionar esta opção, declara que conhece a nossa Política de
							Privacidade e que consente que sejam utilizados os seus dados
							pessoais de acordo com a mesma.
						</label>
					</div>
				</form>
			</section>
		</footer>
	);
}
