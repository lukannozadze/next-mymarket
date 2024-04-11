'use client'
import { Bicycle, Laptop, Mobile } from "@/service/types"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type Props = {
  children:React.ReactNode
}
type ContextType= {
  cartItems:(Laptop | Mobile | Bicycle)[],
  setCartItems:Dispatch<SetStateAction<(Laptop | Mobile | Bicycle)[]>>
}
const Context = createContext<ContextType>({
  cartItems:[],
  setCartItems:()=>{}
})
export default function CartProvider({children}:Props) {
  const [cartItems,setCartItems] = useState<(Laptop | Mobile | Bicycle)[]>([])
  const ContextValue:ContextType = {
    cartItems,
    setCartItems
  }
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>
}

export const useCartProvider = () =>{
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
}
