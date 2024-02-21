import React from "react";

import "./customNavbar.style.scss";
import { IconButton } from "@mui/material";
import { ShoppingCartOutlined, ShoppingCartRounded } from "@mui/icons-material";

/*TODO:Make it mobile friendly, research some good websites to know what you can do extra*/

const CustomNavbar = ({ navList, logoUrl, cart, logoType }) => {
  return (
    <div className="navbar">
      <img
        className={`navbar__logo navbar__logo_${logoType}`}
        src={logoUrl}
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
        <IconButton className="navbar__nav__button">
          {cart !== "rounded" ? (
            <ShoppingCartOutlined />
          ) : (
            <ShoppingCartRounded />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default CustomNavbar;
