import { combineReducers } from '@reduxjs/toolkit';
import { recordsSlice } from './slices';

const rootReducer = combineReducers({
    recordsState: recordsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
