import React, {useState} from "react";
import "./ComponenteButtonMenuContent.css";

// const ComponenteButtonMenuContent = (props) => {
//   const [link, setLink] = useState("window.location.href = ../../../../index.html")
//   // console.log(link)
//   // console.log(props.target)
//   return (
//     <>
      
//       <button onClick={() => {
//               setLink("window.location.href =" + props.link); return link;}} 
//               target={props.target}
//       >
//         {props.buttonName}
//       </button>
//     </>
//   );
// };

// export default ComponenteButtonMenuContent;

// <button onClick={() => setCount(count + 1)}>Mais um</button>


// const Button = ({children, ...props}) => (
//   <button type="button" {...props}>
//     {children}
//   </button>
// );

//spread operator
const Button = (props) => (
  <button type="button" onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;