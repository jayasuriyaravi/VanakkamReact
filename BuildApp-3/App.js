import React from "react";
import ReactDom from "react-dom/client";

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
      <h1>iam from the new application</h1>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
   