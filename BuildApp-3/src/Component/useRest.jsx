import { useState,useEffect } from "react";

function useRest(props) {
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    getRestMenu();
  }, []);

  const getRestMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0448827&lng=80.124266&restaurantId=${props.id}&catalog_qa=undefined&submitAction=ENTER`
    );

    let json = await data.json();
    // console.log(json)
    setRestMenu(json);

  };

  // console.log(restMenu);
  return restMenu;
}
export default useRest;
