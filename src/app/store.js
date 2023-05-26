import { configureStore } from '@reduxjs/toolkit';
import mainNavbarItemsSlice from '../features/main-navbar/mainNavbarItemsSlice';
import carsGallerySlice from '../features/cars-gallery/carsGallerySlice';
import testimonialsSlice from '../features/Testimonials/testimonialsSlice';

export default configureStore({
  reducer: {
    mainNavBarItems: mainNavbarItemsSlice,
    cars: carsGallerySlice,
    testimonials: testimonialsSlice,
  }
});