import React from "react";
// import do css
import "./ComponentFixedMenu.css";
// import do ComponenteLogo
import ComponenteLogo from "./ComponenteLogo/ComponenteLogo.js";
// import do ComponenteMenuContent
import ComponenteMenuContent from "./ComponenteMenuContent/ComponenteMenuContent.js";


const ComponentFixedMenu = () => {
  return (
    <div className="fixed-menu">
      <ComponenteLogo />
      <ComponenteMenuContent />
    </div>
  );
};
export default ComponentFixedMenu;
