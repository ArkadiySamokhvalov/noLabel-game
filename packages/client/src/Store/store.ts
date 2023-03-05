import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../components/Theme/slice';
import gameReducer from '../components/Game/slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    game: gameReducer,
  },
});
