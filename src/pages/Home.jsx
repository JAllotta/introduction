import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';

export const Home = () => {
    return (
        <div className="home-grid-container">
            <a className="item1 item" href="/About">
                <p className="home-p">ABOUT</p>
            </a>
            <div className="itemImg">
                <div className="home-title">
                    <p>Julian Allotta</p>
                    <img src={ProfileImage} className="profile-img" alt="Julian Allotta"></img>
                </div>
            </div>
            <a className="item2 item" href="/Career">
                <p className="home-p">CAREER</p>
            </a>
            <a className="item4 item" href="/Hobbies">
                <p className="home-p">HOBBIES</p>
            </a>
            <a className="item" href="/Projects">
                <p className="home-p">PROJECTS</p>
            </a>
            <a className="item5 item" href="/Contact">
                <p className="home-p">CONTACT</p>
            </a>
        </div>
    )
}
