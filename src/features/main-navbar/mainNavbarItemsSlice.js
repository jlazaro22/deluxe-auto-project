import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = `${import.meta.env.VITE_API_URL}/mainNavBarItems`;

const initialState = {
  mainNavBarItems: [],
  loading: false,
};

export const getMainNavBarItems = createAsyncThunk('mainNavBarItems/getMainNavBarItems', async () => {
  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('Error getting items:', error);
  }
});

const mainNavbarSlice = createSlice({
  name: 'mainNavBarItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMainNavBarItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMainNavBarItems.fulfilled, (state, action) => {
        state.loading = false;
        state.mainNavBarItems = action.payload;
      });
  }
});

export default mainNavbarSlice.reducer;