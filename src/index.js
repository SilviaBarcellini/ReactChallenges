import React from "react";
import ReactDOM from "react-dom";

//react rendering JSX
//it only takes 1HTML element at time -> solution: wrap them in a div element

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
//vanillaJS strict (BABEL)
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
