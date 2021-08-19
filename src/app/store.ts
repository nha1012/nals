import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import paginationReducer from './reducres/pagination';
import searchReducer from './reducres/search';
import sortReducer from './reducres/sort';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    sort: sortReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
