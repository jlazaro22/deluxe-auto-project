import { configureStore } from '@reduxjs/toolkit';
import mainNavbarItemsSlice from '../features/main-navbar/mainNavbarItemsSlice';
import carsGallerySlice from '../features/cars-gallery/carsGallerySlice';

export default configureStore({
  reducer: {
    mainNavBarItems: mainNavbarItemsSlice,
    cars: carsGallerySlice,
  }
});