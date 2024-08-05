import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { LuPen, LuSettings2 } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";

function NavigationBar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">V</span>
                <span className="logo-name">Vsevidno</span>
            </div>
            <div className="navbar-icons">
                <div className="navbar-search">
                    <CiSearch className="search-icon" />
                    <input type="text" placeholder="Search for anything" />
                </div>
                <LuPen className="navbar-icon pen-icon" />
                <LuSettings2 className="navbar-icon" />
                <HiDotsHorizontal className="navbar-icon" />
                <div className="navbar-profile">
                    <FaUserCircle className="profile-icon" />
                    <span className="notification-badge">3</span>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
