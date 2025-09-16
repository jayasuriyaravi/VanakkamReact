import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestMenuCard from "./RestMenuCard";
import useRest from "./useRest";
import RestCat from "./RestCat";
import MenuContext from "../context/MenuContext";
import UserContext from "../context/UserContext";

function RestMenu() {
  // const [restMenu, setRestMenu] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();

  const restMenu = useRest({ id });

  if (!restMenu) {
    return <h2>Loading restaurant details...</h2>;
  }

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = restMenu.data.cards[2].card.card.info;

  const { itemCards } =
    restMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const restCat =
    restMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(restCat);
  const{userName} = useContext(UserContext);

  return (
    <div className="menu-con">
      <div className="rest-details">
        <p>username:{userName}</p>
        <h1 className="restName">{name}</h1>
        <p className="rating">
          {avgRatingString + " ( " + totalRatingsString + " ) "}
        </p>
        <p className="rest-price">{costForTwoMessage}</p>
        <p className="cusines">{cuisines.join(", ")}</p>
        <p className="area">Outlet - {+" " + areaName}</p>
        <p className="time">
          {sla.minDeliveryTime + " - " + sla.maxDeliveryTime + " mins"}
        </p>
      </div>
      {/* <h1>Menu</h1>
      {itemCards.length > 0 ? (
        itemCards.map((menu) => (
          <RestMenuCard key={menu.card.info.id} items={menu} />
        ))
      ) : (
        <>no menu</>
      )} */}
      {restCat.map((c, i) => {
        return (
          // <MenuContext.Provider value={{setShowIndex}}>
          <RestCat
            key={i}
            restCato={c}
            showItems={i === showIndex ? true : false}
            setindex={()=>{
              setShowIndex(i)
            }}
          />
          // </MenuContext.Provider>
        );
      })}
    </div>
  );
}

// A2B - Adyar Ananda Bhavan
// 4.5 (101K+ ratings)
// ₹300 for two
// South Indian,Sweets
// Outlet-Porur
// 40-50 mins

// Mus Fried Rice -Manchurian Gravy Combo
// 249-149
// 4.1(7)

export default RestMenu;
