import React from 'react';
import {A} from 'hookrouter';

export const Navbar = () => {
    return(
        <div>
            <h1>My Site</h1>
            <div>
                <A href="/">Home</A>
                <A href="/about">About</A>
                <A href="/contact/1234">Contact</A>
            </div>
        </div>
    )
}