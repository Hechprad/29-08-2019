import React from "react";
// import do css
import "./ComponenteMenuContent.css";
// import do ComponenteButtonMenuContent
import ComponenteButtonMenuContent from "../ComponenteButtonMenuContent/ComponenteButtonMenuContent.js";

// array de objeto botão com o nome e o link
const propriedadesDoBotao = [{
  idDoBotao: 0,
  nomeParaBotao: "Categoria",
  linkParaBotao: "/categorias.html",
  target: "_self"
},
{
  idDoBotao: 1,
  nomeParaBotao: "AdicionarFilme",
  linkParaBotao: "/filme",
  target: "_blank"
}];

const ComponenteMenuContent = () => {
  return (
    <div className="menu-content">
      {propriedadesDoBotao.map(element => {
        return (
        <ComponenteButtonMenuContent 
          key={element.idDoBotao}
          buttonName={element.nomeParaBotao}
          link={element.linkParaBotao}
          target={element.target}
        />
        )
      })}
    </div>
  );
};

export default ComponenteMenuContent;
