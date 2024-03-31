'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type Props = {
  children:React.ReactNode
}
type ContextType= {
  hamburgerIsShown:boolean
  setHamburgerIsShown:Dispatch<SetStateAction<boolean>>
}
const Context = createContext<ContextType>({
  hamburgerIsShown:false,
  setHamburgerIsShown:()=>{}
})
export default function GeneralStateProvider({children}:Props) {
  const [hamburgerIsShown,setHamburgerIsShown] = useState(false);
  const ContextValue:ContextType = {
  hamburgerIsShown,
  setHamburgerIsShown
  }
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>
}

export const useGeneralStateProvider = () =>{
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
}
