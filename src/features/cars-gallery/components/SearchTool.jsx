import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import {
	filterByPrice,
	filterByBrand,
	filterByClass,
	filterByModel,
	filterByYear,
	clearAllFilters,
} from '../carsGallerySlice';
import { useNavigate } from 'react-router-dom';

export default function SearchTool() {
	const { cars } = useSelector((state) => state.cars);
	let dispatch = useDispatch();
	let navigate = useNavigate();

	const [uniqueBrands, setUniqueBrands] = useState([]);
	const [uniqueModels, setUniqueModels] = useState([]);
	const [uniqueClasses, setUniqueClasses] = useState([]);
	const [uniqueYears, setUniqueYears] = useState([]);

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
		setMinPrice(Math.min(...cars.map((car) => car.price)));
		setMaxPrice(Math.max(...cars.map((car) => car.price)));
		setSelectedPrice(maxPrice);
	}, [cars, maxPrice]);

	const handleSelectedBrand = (brand) => {
		if (brand.trim().length !== 0 && cars.find((car) => car.brand === brand)) {
			setSelectedBrand(brand);
			setUniqueModels([
				...new Set(
					cars.filter((car) => car.brand === brand).map((car) => car.model)
				),
			]);
			setUniqueClasses([
				...new Set(
					cars
						.filter((car) => car.brand === brand)
						.map((car) => car.chassis.class)
				),
			]);
			setUniqueYears([
				...new Set(
					cars.filter((car) => car.brand === brand).map((car) => car.year)
				),
			]);
			// setMinPrice(
			// 	Math.min(
			// 		...cars.filter((car) => car.brand === brand).map((car) => car.price)
			// 	)
			// );
			// setMaxPrice(
			// 	Math.max(
			// 		...cars.filter((car) => car.brand === brand).map((car) => car.price)
			// 	)
			// );
			console.log(minPrice, maxPrice);
			// setSelectedPrice(maxPrice);
		} else {
			setSelectedBrand('');
			setUniqueModels([...new Set(cars.map((car) => car.model))]);
			setUniqueClasses([...new Set(cars.map((car) => car.chassis.class))]);
			setUniqueYears([...new Set(cars.map((car) => car.year))]);
			// setMinPrice(Math.min(...cars.map((car) => +car.price)));
			// setMaxPrice(Math.max(...cars.map((car) => +car.price)));
			// setSelectedPrice(maxPrice);
		}
	};

	const handleSelectedModel = (model) => {
		if (model.trim().length !== 0 && cars.find((car) => car.model === model)) {
			setSelectedModel(model);
			setUniqueBrands([
				...new Set(
					cars.filter((car) => car.model === model).map((car) => car.brand)
				),
			]);
			setUniqueClasses([
				...new Set(
					cars
						.filter((car) => car.model === model)
						.map((car) => car.chassis.class)
				),
			]);
			setUniqueYears([
				...new Set(
					cars.filter((car) => car.model === model).map((car) => car.year)
				),
			]);
		} else {
			setSelectedModel('');
			setUniqueBrands([...new Set(cars.map((car) => car.brand))]);
			setUniqueClasses([...new Set(cars.map((car) => car.chassis.class))]);
			setUniqueYears([...new Set(cars.map((car) => car.year))]);
		}
	};

	const handleSelectedClass = (chassisClass) => {
		if (
			chassisClass.trim().length !== 0 &&
			cars.find((car) => car.chassis.class === chassisClass)
		) {
			setSelectedClass(chassisClass);
			setUniqueBrands([
				...new Set(
					cars
						.filter((car) => car.chassis.class === chassisClass)
						.map((car) => car.brand)
				),
			]);
			setUniqueModels([
				...new Set(
					cars
						.filter((car) => car.chassis.class === chassisClass)
						.map((car) => car.model)
				),
			]);
			setUniqueYears([
				...new Set(
					cars
						.filter((car) => car.chassis.class === chassisClass)
						.map((car) => car.year)
				),
			]);
		} else {
			setSelectedClass('');
			setUniqueBrands([...new Set(cars.map((car) => car.brand))]);
			setUniqueModels([...new Set(cars.map((car) => car.model))]);
			setUniqueYears([...new Set(cars.map((car) => car.year))]);
		}
	};

	const handleSelectedYear = (year) => {
		if (year.trim().length !== 0 && cars.find((car) => car.year === year)) {
			setSelectedYear(year);
			setUniqueBrands([
				...new Set(
					cars.filter((car) => car.year === year).map((car) => car.brand)
				),
			]);
			setUniqueModels([
				...new Set(
					cars.filter((car) => car.year === year).map((car) => car.model)
				),
			]);
			setUniqueClasses([
				...new Set(
					cars
						.filter((car) => car.year === year)
						.map((car) => car.chassis.class)
				),
			]);
		} else {
			setSelectedYear('');
			setUniqueBrands([...new Set(cars.map((car) => car.brand))]);
			setUniqueModels([...new Set(cars.map((car) => car.model))]);
			setUniqueClasses([...new Set(cars.map((car) => car.chassis.class))]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		selectedBrand && dispatch(filterByBrand(selectedBrand));
		selectedModel && dispatch(filterByModel(selectedModel));
		selectedClass && dispatch(filterByClass(selectedClass));
		selectedYear && dispatch(filterByYear(selectedYear));
		// console.log(selectedPrice, minPrice, maxPrice);
		// selectedPrice && dispatch(filterByPrice(selectedPrice));
		if (!selectedBrand && !selectedModel && !selectedClass && !selectedYear) {
			dispatch(clearAllFilters());
		}
		setSelectedBrand('');
		setSelectedModel('');
		setSelectedClass('');
		setSelectedYear('');
		navigate('/cars-gallery');
	};

	return (
		<article className='search-tool'>
			<h1 className='underline'>Pesquisa</h1>
			<form className='search-tool-form' onSubmit={handleSubmit}>
				<div className='filters'>
					<div className='form-control'>
						<label htmlFor='brand' className='uppercase-text'>
							Marca
						</label>
						<input
							type='search'
							list='brands'
							id='brand'
							autoComplete='off'
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
							autoComplete='off'
							placeholder='Escolha o modelo'
							// disabled
							onChange={({ target: { value } }) => handleSelectedModel(value)}
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
							autoComplete='off'
							placeholder='Escolha a classe'
							onChange={({ target: { value } }) => handleSelectedClass(value)}
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
							autoComplete='off'
							placeholder='Escolha o ano'
							onChange={({ target: { value } }) => handleSelectedYear(value)}
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
				<Button type='submit'>Pesquisar Veículos</Button>
			</form>
		</article>
	);
}
