import React from 'react';
import { Page } from '../components/Page';
import { Bio } from '../components/Bio';

export const About = () => {
    return (
        <Page title="About">
            <div>
                <Bio />
            </div>            
        </Page>
    )
}
