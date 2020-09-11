import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { recordsSlice } from '../redux/slices';
import { Record } from '../types/records';
import { RootState } from '../redux/rootReducer';

const useResource = (resource: string): Record[] => {
    const dispatch = useDispatch();
    const records: Record[] = useSelector(
        (state: RootState) => state.recordsState.records
    );

    const fetchData = useCallback(
        async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );
            dispatch(
                recordsSlice.actions.fetched({
                    data: response.data,
                })
            );
        },
        [dispatch]
    );

    useEffect(() => {
        fetchData(resource);
    }, [resource, fetchData]);

    return records;
};

export default useResource;
