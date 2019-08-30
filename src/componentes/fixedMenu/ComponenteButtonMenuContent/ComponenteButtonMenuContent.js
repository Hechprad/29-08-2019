import React, {useState} from "react";
import "./ComponenteButtonMenuContent.css";

// const [buttonName, setButtonName] = useState(props.buttonName);


export default function ComponenteButtonMenuContent(props) {
  const botao = {
    nome: props.buttonName
  }
  return (
    <>
      <button>{botao.nome}</button>
    </>
  );
};


// -----------------------------------------------------
// import React, { useState, useEffect } from "react"

// export default () => {
//     // o count é o nome do state e setCount é o setState
//     const [ count, setCount ] = useState(10)
//     const [ texto, setTexto ] = useState("Eu uso Hooks")
//     const [ objeto, setObjeto ] = useState({nome:"Pará"})

//     // useEffect é o DidUpdate, o WillMount e a porra toda
//     // é um observador que só é chamado quando quem ele observa é alterado
//     useEffect(() => {
//         console.log("Rolou o Mount")

//         // return () => {
//         //     console.log("Isso é o unmount");
//         // }
//     }, []);
    
//     useEffect(() => {
//         console.log("Rolou o Update")
//         document.title = `Você clicou ${count} vezes`;
//     }, [count], texto);

//     return (
//         <div>
//             {objeto.nome}
//             <h3>{texto}</h3>
//             <p>Você clicou {count} vezes</p>
//             <button onClick={() => setCount(count + 1)}>Mais um</button>
//         </div>
//     )
// }



// // class ContadorClasse extends React.Component {
// //     constructor(props){
// //         super(props)

// //         this.state = { count: 0};
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 <p>Você clicou {count} vezes</p>
// //                 <button onClick={() => this.setState(count + 1)}>Mais um</button>
// //             </div>
// //         )
// //     }
// // }