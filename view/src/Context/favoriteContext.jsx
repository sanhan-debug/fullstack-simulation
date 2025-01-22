
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let favoriteContext = createContext()


 // eslint-disable-next-line react/prop-types
 function FavoriteProvider({children}){
    let localFavorite=JSON.parse(localStorage.getItem("favorite"))

    let [favorite,setFavorite]=useState(localFavorite ? localFavorite :[])

    useEffect(()=>{

        localStorage.setItem("favorite",JSON.stringify(favorite))
        
    },[favorite])


    let value={
        favorite,
        setFavorite
    }
     return  <favoriteContext.Provider value={value}>{children}</favoriteContext.Provider>

 }


 export default FavoriteProvider