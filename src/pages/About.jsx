import React from 'react';
import { Page } from '../components/Page';
import { Bio } from '../components/Bio';
import { AboutMyCat } from '../components/AboutMyCat';
import { AboutMyDog } from '../components/AboutMyDog';
import { useRoutes, A } from 'hookrouter';

// const routes = {
//     '/Bio': () => <Bio />,
//     // '/cat': () => <AboutMyCat />,
//     // '/dog': () => <AboutMyDog />
// }

export const About = () => {

    // const match = useRoutes(routes);

    return (
        <Page title="About">
            <div>
                <Bio></Bio>
                {/* <span><A href="/about/me">About Me</A></span> */}
                {/* <span><A href="/about/cat">About Cat</A></span>
                <span><A href="/about/dog">About Dog</A></span> */}
            </div>
            {/* {match || <div>Basic About Page</div>} */}
        </Page>
    )
}
