import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../../../typings/app.typings';

const gameSlice = createSlice({
  name: 'game',
  initialState: <GameState>{
    points: 0,
  },
  reducers: {
    setPoints(state, { payload }) {
      state.points = payload;
    },
  },
});

const { actions, reducer } = gameSlice;
export const { setPoints } = actions;
export default reducer;
