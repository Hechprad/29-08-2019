import React, {useState} from "react";
import "./ComponenteButtonMenuContent.css";

export default function ComponenteButtonMenuContent(props) {
  const [link, setLink] = useState("window.location.href = ../../../../index.html")
  // console.log(link)
  // console.log(props.target)
  return (
    <>
      
      <button onClick={() => {
              setLink("window.location.href =" + props.link); return link;}} 
              target={props.target}>{props.buttonName}
      </button>
    </>
  );
};

// <button onClick={() => setCount(count + 1)}>Mais um</button>