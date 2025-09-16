import { useContext, useState } from "react";
import RestMenuCard from "./RestMenuCard";
import MenuContext from "../context/MenuContext";

function RestCat({restCato,showItems,setindex}){
      // const [showItems, setShowItems] = useState(show);
      // const {setShowIndex}= useContext(MenuContext)
        return (
          <div  className="cat">
            <h4  className="title" onClick={()=>{
              // if(showItems===false){
              //   setShowItems(true)
              // }
              // else{
              //   setShowItems(false)  
              // }
              // setShowIndex()
              setindex()
            }}>
              {restCato.card.card.title}
            </h4>
           { showItems && restCato.card.card.itemCards.map((i)=>{
              return <RestMenuCard key={i.card.info.id} item={i} />
            })}
          </div>
        );
        
}
export default RestCat