import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';

export const Page = ({ title, children }) => {
    return (
        <div>
            <div className="grid-container">
                <div className="left-panel">
                    <img src={ProfileImage} className="profile-img" alt="Julian Allotta"></img>
                    <div className="profile-caption">
                        <h3>
                            <p>Hi, my name is</p> 
                            <p>Julian Allotta</p> 
                            <p>Welcome!</p>
                        </h3>
                    </div>
                </div>
                <div className="right-panel">
                    <h1 className="content-title">{title}</h1>
                    <hr style={{borderTop: '6px solid rgba(0,0,0,.1)'}}/>
                    <div className="content-panel">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}