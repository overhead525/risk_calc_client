import { createSlice } from '@reduxjs/toolkit';
import { Record } from '../types/records';

type RecordsState = {
    records: Record[];
    isLoading: boolean;
};

let initialState: RecordsState = {
    records: [],
    isLoading: true,
};

const recordsSlice = createSlice({
    name: 'recordsState',
    initialState,
    reducers: {
        fetched: ({ records, isLoading }, action) => {
            records = action.payload.data;
            isLoading = false;
            return { records, isLoading };
        },
    },
});

export { recordsSlice };
