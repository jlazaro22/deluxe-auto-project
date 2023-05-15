import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const apiUrl = `${import.meta.env.VITE_API_URL}/cars`;

const initialState = {
  cars: [],
  highlights: [],
  filteredCars: [],
  uniqueBrands: [],
  // maxPrice: 0,
  loading: false,
};

export const getCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error getting cars stock:', error);
  }
});

export const getUniqueBrands = createAsyncThunk('cars/getUniqueBrands', async (carsArr) => {
  try {
    return [...new Set(carsArr.map(car => car.brand))];
  } catch (error) {
    console.error('Error getting unique car brands:', error);
  }
});

const carsGallerySlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    // getUniqueBrands: (state) => {
    //   const brandsSet = new Set(state.filteredCars.map(car => car.brand));
    //   state.uniqueBrands = [...brandsSet];
    // },
    // getMaxPrice: (state) => {
    //   state.maxPrice = state.filteredCars.reduce((accPrice, { price }) => {
    //     return (+price > accPrice) ? +price : accPrice;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
        state.highlights = state.cars.filter(car => car.highlighted === true);
        state.filteredCars = state.cars;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        console.error('Error getting cars stock:', action.error.message);
      })
      .addCase(getUniqueBrands.fulfilled, (state, action) => {
        state.uniqueBrands = action.payload;
        console.log(state.uniqueBrands);
      });
  }
});

export default carsGallerySlice.reducer;