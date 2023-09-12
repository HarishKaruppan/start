import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
const Header = () => {
  return (
    <div className="max-width header">
      <img src={Logo} alt="Weebly Logo" className="header-logo" />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <BiCurrentLocation className="absolute-center location-icon" />
              <div>Bangalore</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>
          <div className="location-separator"></div>
          <div className="header-search-bar">
            <AiOutlineSearch className="absolute-center search=icon" />
            <input
              type="text"
              placeholder="Search for Restaurants, cuisine or dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="" alt="Profile" className="header-profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
