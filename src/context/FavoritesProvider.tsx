'use client'
import { Bicycle, Laptop, Mobile } from "@/service/types"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type Props = {
  children:React.ReactNode
}
type ContextType= {
  favorites:(Laptop | Mobile | Bicycle)[],
  setFavorites:Dispatch<SetStateAction<(Laptop | Mobile | Bicycle)[]>>
}
const Context = createContext<ContextType>({
 favorites:[],
 setFavorites:()=>{}
})
export default function FavoritesProvider({children}:Props) {
  const [favorites,setFavorites] = useState<(Laptop | Mobile | Bicycle)[]>([])
  const ContextValue:ContextType = {
   favorites,
   setFavorites
  }
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>
}

export const useFavoritesProvider = () =>{
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
}
