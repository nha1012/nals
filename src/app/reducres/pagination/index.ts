import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { PaginationState } from '../../models/pagination';


const initialState: PaginationState = {
  currentPage: 1,
  loading: false,
  disabledNext: false,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    next: (state) => {
      state.currentPage += 1;
    },
    pre: (state) => {
      state.currentPage -= 1;
    },
    addPage:(state, action: PayloadAction<number>)=>{
      state.currentPage = action.payload;
    },
    startLoading:(state)=>{
      state.loading = true;
    },
    endLoading:(state)=>{
      state.loading = false;
    },
    disabledNext:(state, action: PayloadAction<boolean>)=>{
      state.disabledNext = action.payload;
    },
    
  }
});

export const { next, pre, addPage, startLoading, endLoading, disabledNext } = paginationSlice.actions;
export const getCurrentPage = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
