import { useContext } from "react";
import CartContext from "../context/CartContext";

function RestMenuCard({ item }) {
  const { info } = item.card;
  // console.log(items.card.info)
  const { name, defaultPrice, price, ratings } = info;
  const { rating, ratingCountV2 } = ratings.aggregatedRating;


  const {cartItem,setCartItem}=useContext(CartContext);

  console.log(cartItem)
  return (
    <div className="menu-card">
      <h3 className="menu-name">{name}</h3>
      <p className="menu-price">₹{defaultPrice / 100 || price / 100}</p>
      <p className="menu-rating">{rating + " (" + ratingCountV2 + ") "}</p>
      <button onClick={()=>{
        setCartItem(prev => [...prev,item])
      }}>Add</button>
    </div>
  );
}

export default RestMenuCard;
