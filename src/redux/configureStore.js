import { configureStore } from '@reduxjs/toolkit';
import nobelPrizeReducer from './nobel-prize';

const store = configureStore({
  reducer: {
    nobel: nobelPrizeReducer,
  },
});

export default store;
