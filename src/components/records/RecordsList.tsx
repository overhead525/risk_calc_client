import React from 'react';
import useResource from '../../hooks/useResource';
import { Record, RecordsListProps } from '../../types/records';

const RecordsList = ({ resource }: RecordsListProps) => {
    const records: Record[] = useResource(resource);

    return (
        <ul>
            {records.map((record) => (
                <li key={record.id}>{record.name}</li>
            ))}
        </ul>
    );
};

export default RecordsList;
