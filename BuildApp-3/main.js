import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/App"
import { StrictMode } from "react";

const root = ReactDom.createRoot(document.getElementById("root"));

{/* <StrictMode> */}
    root.render(<App />);
{/* </StrictMode> */}
