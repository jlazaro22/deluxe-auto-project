import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const apiUrl = `${import.meta.env.VITE_API_URL}/cars`;

const initialState = {
  cars: [],
  highlights: [],
  filteredCars: [],
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

const carsGallerySlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    filterByBrand: (state, action) => {
      state.filteredCars = state.cars.filter(car => car.brand === action.payload);
    },
    filterByModel: (state, action) => {
      state.filteredCars = state.cars.filter(car => car.model === action.payload);
    },
    filterByClass: (state, action) => {
      state.filteredCars = state.cars.filter(car => car.chassis.class === action.payload);
    },
    filterByYear: (state, action) => {
      state.filteredCars = state.cars.filter(car => car.year === action.payload);
    },
    filterByPrice: (state, action) => {
      state.filteredCars = state.cars.filter(car => +car.price <= +action.payload);
    },
    clearAllFilters: (state) => {
      state.filteredCars = state.cars;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
        state.filteredCars = action.payload;
        state.highlights = action.payload.filter(car => car.highlighted === true);
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        console.error('Error getting cars stock:', action.error.message);
      });
  }
});

export const { filterByBrand, filterByModel, filterByClass, filterByYear, filterByPrice, clearAllFilters } = carsGallerySlice.actions;
export default carsGallerySlice.reducer;