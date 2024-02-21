import React from "react";

import "./customNavbar.style.scss";

const CustomNavbar = ({ navList, logo, cartVariant }) => {
  return (
    <div className="navbar">
      <img
        className={`navbar__logo navbar__logo_${logo}`}
        src={logo}
        alt="Chicago Bakes"
        //   title="Chicago Bakes"
      />
      <div className="navbar__nav">
        <ul className="navbar__nav__ul">
          {navList.map((el, index) => (
            <li className="navbar__nav__ul__li" key={index}>
              {el}
            </li>
          ))}
        </ul>
        <button
          className={`navbar__nav__button navbar__nav__button_${cartVariant}`}
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default CustomNavbar;
