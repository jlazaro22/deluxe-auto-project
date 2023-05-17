import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button';

export default function SearchTool() {
	const { filteredCars } = useSelector((state) => state.cars);

	const [selectedBrand, setSelectedBrand] = useState('');
	const [selectedPrice, setSelectedPrice] = useState('');
	// const [minPrice, setMinPrice] = useState('');
	// const [maxPrice, setMaxPrice] = useState('');

	let uniqueBrands = [...new Set(filteredCars.map((car) => car.brand))];
	let uniqueModels = [...new Set(filteredCars.map((car) => car.model))];
	let uniqueClasses = [
		...new Set(filteredCars.map((car) => car.chassis.class)),
	];
	let uniqueYears = [...new Set(filteredCars.map((car) => car.year))];

	let currentCarsPrices = filteredCars.map((car) => car.price);
	let minPrice = Math.min(...currentCarsPrices);
	let maxPrice = Math.max(...currentCarsPrices);

	useEffect(() => {
		setSelectedPrice(maxPrice);
	}, [maxPrice]);

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
							{uniqueBrands.map((brand, idx) => (
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
							{uniqueModels.map((model, idx) => (
								<option key={idx} value={model}>
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
							{uniqueClasses.map((chassisClass, idx) => (
								<option key={idx} value={chassisClass}>
									{chassisClass}
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
							{uniqueYears.map((year, idx) => (
								<option key={idx} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='form-control price'>
					<label htmlFor='price' className='uppercase-text'>
						Preço ({`${minPrice}€ - ${selectedPrice}€`})
					</label>
					<input
						type='range'
						id='price'
						step={'5000'}
						value={`${selectedPrice}`}
						min={`${minPrice}`}
						max={`${maxPrice}`}
						onChange={({ target: { value } }) => setSelectedPrice(value)}
					/>
				</div>
				<Button>Pesquisar Veículos</Button>
			</form>
		</article>
	);
}
