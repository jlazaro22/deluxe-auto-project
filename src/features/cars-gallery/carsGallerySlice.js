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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
        state.highlights = state.cars.filter(car => car.highlighted === true);
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        console.error('Error getting cars stock:', action.error.message);
      });
  }
});

export default carsGallerySlice.reducer;