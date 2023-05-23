import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button';

export default function SearchTool() {
	const { cars } = useSelector((state) => state.cars);
	// console.log(cars);
	// console.log(filteredCars);

	const [uniqueBrands, setUniqueBrands] = useState([]);
	const [uniqueModels, setUniqueModels] = useState([]);
	const [uniqueClasses, setUniqueClasses] = useState([]);
	const [uniqueYears, setUniqueYears] = useState([]);

	const [carSelection, setCarSelection] = useState([]);
	const [selectedBrand, setSelectedBrand] = useState('');
	const [selectedModel, setSelectedModel] = useState('');
	const [selectedClass, setSelectedClass] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [selectedPrice, setSelectedPrice] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');

	useEffect(() => {
		setUniqueBrands([...new Set(cars.map((car) => car.brand))]);
		setUniqueModels([...new Set(cars.map((car) => car.model))]);
		setUniqueClasses([...new Set(cars.map((car) => car.chassis.class))]);
		setUniqueYears([...new Set(cars.map((car) => car.year))]);
		setSelectedPrice(maxPrice);
		setMinPrice(Math.min(...cars.map((car) => car.price)));
		setMaxPrice(Math.max(...cars.map((car) => car.price)));
	}, [cars, maxPrice]);

	const handleSelectedBrand = (brand) => {
		if (brand.trim().length !== 0) {
			console.log('has value');
			setCarSelection(cars.filter((car) => car.brand === brand));
			console.log(carSelection);
			setUniqueModels([...new Set(carSelection.map((car) => car.model))]);
		} else {
			console.log('empty value');
		}
	};

	return (
		<article className='search-tool'>
			<h1 className='underline'>Pesquisa</h1>
			<form className='search-tool-form'>
				<div className='filters'>
					<div className='form-control'>
						<label htmlFor='brand' className='uppercase-text'>
							Marca
						</label>
						<input
							type='search'
							list='brands'
							id='brand'
							placeholder='Escolha a marca'
							onChange={({ target: { value } }) => handleSelectedBrand(value)}
						/>
						<datalist id='brands'>
							{uniqueBrands.map((brand, idx) => (
								<option key={idx} value={brand}>
									{brand}
								</option>
							))}
						</datalist>
					</div>

					<div className='form-control'>
						<label htmlFor='model' className='uppercase-text'>
							Modelo
						</label>
						<input
							type='search'
							list='models'
							id='model'
							placeholder='Escolha o modelo'
							// disabled
							onChange={({ target: { value } }) => setSelectedModel(value)}
						/>
						<datalist id='models'>
							{uniqueModels.map((model, idx) => (
								<option key={idx} value={model}>
									{model}
								</option>
							))}
						</datalist>
					</div>

					<div className='form-control'>
						<label htmlFor='class' className='uppercase-text'>
							Segmento
						</label>
						<input
							type='search'
							list='classes'
							id='class'
							placeholder='Escolha a classe'
							onChange={({ target: { value } }) => setSelectedClass(value)}
						/>
						<datalist id='classes'>
							{uniqueClasses.map((chassisClass, idx) => (
								<option key={idx} value={chassisClass}>
									{chassisClass}
								</option>
							))}
						</datalist>
					</div>

					<div className='form-control'>
						<label htmlFor='year' className='uppercase-text'>
							Ano
						</label>
						<input
							type='search'
							list='years'
							id='year'
							placeholder='Escolha o ano'
							onChange={({ target: { value } }) => setSelectedYear(value)}
						/>
						<datalist id='years'>
							{uniqueYears.map((year, idx) => (
								<option key={idx} value={year}>
									{year}
								</option>
							))}
						</datalist>
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
