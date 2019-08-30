import React from "react";
// import do css
import "./ComponenteMenuContent.css";
// import do ComponenteButtonMenuContent
import ComponenteButtonMenuContent from "../ComponenteButtonMenuContent/ComponenteButtonMenuContent.js";

const ComponenteMenuContent = () => {
  return (
    <div className="menu-content">
      <ComponenteButtonMenuContent buttonName="Categoria"/>
      <ComponenteButtonMenuContent buttonName="Adicionar Filme"/>
    </div>
  );
};

export default ComponenteMenuContent;
