import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { SearchState } from '../../models/search';


const initialState: SearchState = {
  searchValue: '',
  statusSearch: false
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  }
});

export const { search } = searchSlice.actions;
export const getSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
