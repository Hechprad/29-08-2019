import React from "react";
import "./ComponenteLogo.css";
import Logo from "../../../assets/imgs/logo-sciensa-pb2.png";

const ComponenteLogo = () => {
  return (
    <div className="logo-content">
      <img src={Logo} alt="Logo Sciensa uma empresa legal" />
    </div>
  );
};

export default ComponenteLogo;
