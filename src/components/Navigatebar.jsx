import React, { useState, useEffect } from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import $ from "jquery";

export const Navigatebar = () => {
    // var [aboutIsCurrent] = useState("");

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     aboutIsCurrent = `You clicked ${aboutIsCurrent} times`;
    // });

    // const path = usePath();
    var homeIsCurrent = "";
    var aboutIsCurrent = "active";
    var careerIsCurrent = "";
    var hobbiesIsCurrent = "";
    var contactIsCurrent = "";

    var currentPage = "active";

    var linkClicked = (highlight) => {
        console.log(highlight);
        // console.log(this.aboutIsCurrent);        
        console.log(aboutIsCurrent);
        aboutIsCurrent = "";
        careerIsCurrent = "";
        hobbiesIsCurrent = "";
        contactIsCurrent = "";

        $("#aboutLink").removeClass(currentPage);
        $("#careerLink").removeClass(currentPage);
        $("#hobbiesLink").removeClass(currentPage);
        $("#contactLink").removeClass(currentPage);
        switch (highlight) {
            case 1:
                $("#aboutLink").addClass(currentPage);
                break;
            case 2:
                $("#careerLink").addClass(currentPage);
                break;
            case 3:
                $("#hobbiesLink").addClass(currentPage);
                break;
            case 4:
                $("#contactLink").addClass(currentPage);
                break;
        }
    }

    return (
        <div>
            {/* <div className="grid-container">
                <div className="left-panel"> */}
            <div className="profile-caption">
                <h3>
                    <p>Julian Allotta</p>
                </h3>
            </div>
            <div>
                <img src={ProfileImage} className="profile-img" alt="Julian Allotta"></img>
            </div>
            <div style={{ display: "inline-grid" }}>
                <a id="aboutLink" onClick={() => linkClicked(1)} className={"nav-link " + aboutIsCurrent} href="#about"><strong>About</strong></a>
                <a id="careerLink" onClick={() => linkClicked(2)} className={"nav-link " + careerIsCurrent} href="#career"><strong>Career</strong></a>
                <a id="hobbiesLink" onClick={() => linkClicked(3)} className={"nav-link " + hobbiesIsCurrent} href="#hobbies"><strong>Hobbies</strong></a>
                <a id="contactLink" onClick={() => linkClicked(4)} className={"nav-link " + contactIsCurrent} href="#contact"><strong>Contact</strong></a>
            </div>
        </div>
        //     </div>
        // </div>
    )
}