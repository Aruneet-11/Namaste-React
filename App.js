import React from "react";
import ReactDOM from "react-dom/client";

//using JSX.
//HTML like structure.
//Babel converts this jsx into ReactElement and then into JS object after that It will render as an HTML DOM element onto the root DOM.
//React Element
const title= <h1 id="new">Namaste React using JSX!</h1>

//React Functional Component.
//Functional component is the normal JS function that returns a JSX Element or React Element.
const HeadingComponent=()=>{
  return ( <div>{title}
  <h1>Namaste React from Functional Component!</h1>
  </div>)
}

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Render Functional Component
root.render(<HeadingComponent/>);