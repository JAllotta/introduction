import React from 'react';
import { Page } from '../components/Page';
import { AboutMe } from '../components/AboutMe';
import { AboutMyCat } from '../components/AboutMyCat';
import { AboutMyDog } from '../components/AboutMyDog';
import { useRoutes, A } from 'hookrouter';

const routes = {
    '/me': () => <AboutMe />,
    '/cat': () => <AboutMyCat />,
    '/dog': () => <AboutMyDog />
}

export const About = () => {

    const match = useRoutes(routes);

    return (
        <Page title="About">
            <div>
                <span><A href="/about/me">About Me</A></span>
                <span><A href="/about/cat">About Cat</A></span>
                <span><A href="/about/dog">About Dog</A></span>
            </div>
            {match || <div>Basic About Page</div>}
        </Page>
    )
}
