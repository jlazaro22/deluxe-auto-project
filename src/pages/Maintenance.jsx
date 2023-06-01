/* eslint-disable react/prop-types */
export default function Maintenance({ title }) {
	return (
		<section className='maintenance container'>
			<header>
				<h1 className='underline'>{title}</h1>
			</header>
			<article>
				<p>
					Estimado cliente, a presente funcionalidade não se encontra
					disponível. Prometemos ser breves. Obrigado.
				</p>
			</article>
		</section>
	);
}
