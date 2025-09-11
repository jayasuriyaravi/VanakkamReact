import Header from "./Component/Header";
import Body from "./Component/Body";
import "./index.css";
import About from "./Component/About";
import { BrowserRouter ,Routes,Route} from "react-router-dom"; 

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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/rest/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
