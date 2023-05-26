import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = `${import.meta.env.VITE_API_URL}/testimonials`;

const initialState = {
  testimonials: [],
  loading: false,
};

export const getTestimonials = createAsyncThunk('testiminials/getTestimonials', async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error getting testimonials:', error);
  }
});

const testimonialsSlice = createSlice({
  name: ' testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(getTestimonials.rejected, (state, action) => {
        state.loading = false;
        console.error('Error getting testimonials:', action.error.message);
      });
  }
});

export default testimonialsSlice.reducer;