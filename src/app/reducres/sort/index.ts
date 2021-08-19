import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { SortState } from '../../models/sort';


const initialState: SortState = {
  sortValue: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    },
  }
});

export const { sort } = sortSlice.actions;
export const getSort = (state: RootState) => state.sort;

export default sortSlice.reducer;
