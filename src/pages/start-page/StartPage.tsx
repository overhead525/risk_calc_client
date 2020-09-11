import React, { ReactElement } from 'react';
import RecordsList from '../../components/records/RecordsList';

interface Props {}

export default function StartPage(_: Props): ReactElement {
    return <RecordsList resource="users" />;
}
