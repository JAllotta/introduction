import React from 'react';
import { Page } from '../components/Page';

export const Contact = () => {
    return (
        <Page title="Contact">   
            <p>
                <strong>E-Mail:</strong>
                <span className="indent-it">jallotta64@gmail.com</span>
            </p>
            <p>
                <strong>LinkedIn:</strong> 
                <a  className="indent-it" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/julianallotta/"}>https://www.linkedin.com/in/julianallotta/</a>
            </p>
        </Page>
    )
}
