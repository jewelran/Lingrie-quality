import React from "react";
import "./Navigation.css";
import {FcBusiness } from "react-icons/fc";

function Navigation({ Icon, title, FcBusiness }) {
  
  return (
    <div className="header__options">
      <span style={{ fontSize: "25px" }}>
        {
            Icon && <Icon></Icon>
        }
        {
            FcBusiness && <FcBusiness name = {FcBusiness} />
        }
      </span>
      <span>{title}</span>
       
    </div>
  );
}

export default Navigation;
