import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RestMenu(){
    const {id} = useParams();

    useEffect(()=>{
        
    },[])

    return(
        <h1>this is rest menu</h1>
    )
}
export default RestMenu;