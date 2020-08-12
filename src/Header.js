import React from 'react';
import './header.css';
import accountPic from './Assets/accountPic.png'
import analyticsPic from './Assets/analyticsPic.png'

function Header() {
    return (
        <div className="headerBar">
            <img className="img1" src={analyticsPic} alt=""/>
            <img className="img2" src={accountPic}alt=""/>
        </div>
    )
}

export default Header;
