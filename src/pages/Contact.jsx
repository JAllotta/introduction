import React from 'react';
import { Page } from '../components/Page';

export const Contact = ({ name }) => {
    return (
        <Page title="Contact">
            <p>Contact Page</p>
            <p>{name}</p>
        </Page>
    )
}
