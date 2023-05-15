import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import { getUniqueBrands } from '../carsGallerySlice';

export default function SearchTool() {
	let dispatch = useDispatch();
	const { filteredCars, uniqueBrands } = useSelector((state) => state.cars);

	const [selectedBrand, setSelectedBrand] = useState('');
	const [price, setPrice] = useState('');
	let minPrice = '40000';
	let maxPrice = '900000';

	useEffect(() => {
		dispatch(getUniqueBrands(filteredCars));
	}, [dispatch, filteredCars]);

	return (
		<article className='search-tool'>
			<h1>Pesquisa</h1>
			<form className='search-tool-form'>
				<div className='filters'>
					<div className='form-control'>
						<label htmlFor='brand' className='uppercase-text'>
							Marca
						</label>
						<select
							id='brand'
							onChange={({ target: { value } }) => setSelectedBrand(value)}
						>
							<option value=''>-- Marca --</option>
							{uniqueBrands.map(({ brand }, idx) => (
								<option key={idx} value={brand}>
									{brand}
								</option>
							))}
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='model' className='uppercase-text'>
							Modelo
						</label>
						<select id='model'>
							<option value=''>-- Modelo --</option>
							{filteredCars.map(({ id, model }) => (
								<option key={id} value={model}>
									{model}
								</option>
							))}
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='class' className='uppercase-text'>
							Segmento
						</label>
						<select id='class'>
							<option value=''>-- Segmento --</option>
							{filteredCars.map(({ id, chassis }) => (
								<option key={id} value={chassis.class}>
									{chassis.class}
								</option>
							))}
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='year' className='uppercase-text'>
							Ano
						</label>
						<select id='year'>
							<option value=''>-- Ano --</option>
							{filteredCars.map(({ id, year }) => (
								<option key={id} value={year}>
									{year}
								</option>
							))}
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
						// defaultValue={maxPrice}
						onChange={({ target: { value } }) => setPrice(value)}
					/>
				</div>
				<Button>Pesquisar Veículos</Button>
			</form>
		</article>
	);
}
