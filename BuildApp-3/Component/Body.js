import { useEffect, useState } from "react";
import Card from "./Cardsapi.js";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [rest, setRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, SetFilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const APIdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await APIdata.json();

    setRest(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    SetFilteredRest(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (rest.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="feature">
        <button
          className="rating"
          onClick={() => {
            let filteredList = rest.filter((r) => r.info.avgRating > 4.4);
            // console.log(filteredList)
            SetFilteredRest(filteredList);
          }}
        >
          Filter By Rating
        </button>

        <input
          type="text"
          className="search"
          onChange={(e) => {
            setSearchText(e.target.value);
            let text = e.target.value;
            let filteredList = rest.filter((r) =>
              r.info.name.toLowerCase().includes(text.toLowerCase())
            );
            SetFilteredRest(filteredList);
          }}
          value={searchText}
        ></input>
      </div>
      <div className="rest">
        {/*props are normal argument to the function here we are padding the four argument to the funtion as hard coding*/}

        {/* <Card name="megana" cus="biryani" rating="4.3" time="36" />
        <Card name="kfcc" cus="burger" rating="4.3" time="36" />
        <Card name="suriya" cus="poratta" rating="4.3" time="36" />
        <Card name="chinese" cus="noodles" rating="4.3" time="36" /> */}

        {/* these card are using the realtime json data from the api */}
        {console.log(filteredRest)}
        {filteredRest.map((rest, index) => (
          <Link key={index} to={"/rest/"+filteredRest.info.id}>
            <Card rest={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
