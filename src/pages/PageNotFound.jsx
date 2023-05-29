import MainHeader from '../features/main-header/MainHeader';
import Footer from '../features/footer/Footer';
import ferrariSunset from '/images/UI/gifs/ferrari-sunset.gif';
import Button from '../features/UI/Button';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
	let navigate = useNavigate();

	return (
		<section className='page-not-found'>
			<MainHeader />
			<article className='page-info container'>
				<header>
					<h1 className='underline'>Página não encontrada</h1>
				</header>
				<div className='content'>
					<img src={ferrariSunset} alt='Ferrari testarrossa at sunset' />
					<p>
						Não foi possível mostrar a página que seleccionou. Pode tentar fazer
						um &quot;refresh&quot; no &quot;browser&quot; ou voltar à página
						anterior por favor.
					</p>
					<Button onClick={() => navigate(-1)}>Voltar Atrás</Button>
				</div>
			</article>
			<Footer />
		</section>
	);
}
