import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../carsGallerySlice';
import Button from '../../UI/Button';

export default function SearchTool() {
	let dispatch = useDispatch();
	const [price, setPrice] = useState('');
	let minPrice = '40000';
	let maxPrice = '900000';

	useEffect(() => {
		dispatch(getCars());
		// setPrice(maxPrice);
	}, []);

	return (
		<article className='search-tool'>
			<h1>Pesquisa</h1>
			<form className='search-tool-form'>
				<div className='filters'>
					<div className='form-control'>
						<label htmlFor='brand' className='uppercase-text'>
							Marca
						</label>
						<select id='brand'>
							<option value=''>-- Marca --</option>
							<option value='Ferrari'>Ferrari</option>
							<option value='Lamborghini'>Lamborghini</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='model' className='uppercase-text'>
							Modelo
						</label>
						<select id='model'>
							<option value=''>-- Modelo --</option>
							<option value='488 GTB'>488 GTB</option>
							<option value='Huracán'>Huracán</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='class' className='uppercase-text'>
							Segmento
						</label>
						<select id='class'>
							<option value=''>-- Segmento --</option>
							<option value='Sports car (S)'>Sports car (S)</option>
							<option value='Crossover SUV'>Crossover SUV</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='year' className='uppercase-text'>
							Ano
						</label>
						<select id='year'>
							<option value=''>-- Ano --</option>
							<option value='2023'>2023</option>
							<option value='2022'>2022</option>
						</select>
					</div>
				</div>
				<div className='form-control price'>
					<label htmlFor='price' className='uppercase-text'>
						Preço ({`${minPrice}€ - ${price}€`})
					</label>
					<input
						type='range'
						id='price'
						step={'5000'}
						min={`${minPrice}`}
						max={`${maxPrice}`}
						defaultValue={maxPrice}
						onChange={({ target: { value } }) => setPrice(value)}
					/>
				</div>
				<Button type='submit'>Pesquisar Veículos</Button>
			</form>
		</article>
	);
}
