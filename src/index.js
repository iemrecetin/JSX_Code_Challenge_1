//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

//var React = require("react");
import React from "react";
//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// ReactDOM.render (WHAT TO SHOW, WHERE TO SHOW IT)
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(
  <div>
    <h1> Hello World </h1>
    <p> My Paragraph </p>
    <ol> My List </ol>
    <li> My list item-1 </li>
    <li> My list item-2 </li>
    <li> My list item-3 </li>
  </div>,
  document.getElementById("root")
);
/* this line of code is compiled to the below javascript code by Babel
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World !";
document.getElementById("root").appendChild(h1);*/

// ReactDOM.render() method takes only one html element.
// <div> element is used for the purpose
