import { configureStore } from '@reduxjs/toolkit';
import mainNavbarItemsSlice from '../features/main-navbar/mainNavbarItemsSlice';

export default configureStore({
  reducer: {
    mainNavBarItems: mainNavbarItemsSlice,
  }
});