import React from "react";
import ReactDom from "react-dom/client";

//this is the core react element creation
//this create an object which will be rendered
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "iam back to the react"
);

//JSX is html like syntax  not an html inside the JS
const jsxheading = <h1>this is the react app from the jsxheading</h1>;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(jsxheading);
