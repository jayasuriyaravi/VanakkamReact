import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import css from './index.css'

/* 
Header
  - logo
  - navItems
body
  -search
  -Restaurantcards
  -Restaruntscontainers
Footer
  -copyright
  -Links
  -Address
  -Contact
*/

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
   