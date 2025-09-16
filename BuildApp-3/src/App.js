import Header from "./Component/Header";
import Body from "./Component/Body";
import "../index.css";
import About from "./Component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestMenu from "./Component/RestMenu";
import CartContext from "./context/CartContext";
import { useState } from "react";
import UserContext from "./context/UserContext";

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
  const [cartItem, setCartItem] = useState([]);

  const [userName, setUserName] = useState("suriya");

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <UserContext.Provider value={{userName,setUserName}}>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/rest/:id" element={<RestMenu />} />
          </Routes>
        </UserContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
