import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestMenuCard from "./RestMenuCard";

function RestMenu() {
  const [restMenu, setRestMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestMenu();
  }, []);

  const getRestMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0448827&lng=80.124266&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    let json = await data.json();

    // console.log(json)
    setRestMenu(json);
  };
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

  console.log(itemCards);

  return (
    <div className="menu-con">
      <div className="rest-details">
        <h1 className="restName">{name}</h1>
        <p className="rating">
          {" "}
          {avgRatingString + " ( " + totalRatingsString + " ) "}
        </p>
        <p className="rest-price">{costForTwoMessage}</p>
        <p className="cusines">{cuisines.join(", ")}</p>
        <p className="area">Outlet - {+" " + areaName}</p>
        <p className="time">
          {sla.minDeliveryTime + " - " + sla.maxDeliveryTime + " mins"}
        </p>
      </div>
      <h1>Menu</h1>
      {itemCards.length>0?itemCards.map((menu) => (
        <RestMenuCard key={menu.card.info.id} items={menu} />
      )):<>no menu</>}
    </div>
  );
}

// A2B - Adyar Ananda Bhavan
// 4.5 (101K+ ratings)
// •
// ₹300 for two
// South Indian,

// Sweets

// Outlet
// Porur
// ▾
// 40-50 mins

// Mus Fried Rice -Manchurian Gravy Combo
// 249
// 149
// 4.1
// (7)
export default RestMenu;
