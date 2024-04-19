'use client'
import { Bicycle, Mobile,Laptop } from "@/service/types"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { useDebouncedCallback } from "use-debounce";
import data from '../../public/data/data.json'
type Props = {
  children:React.ReactNode
}
type ContextType= {
  hamburgerIsShown:boolean,
  categoryData:any,
  setCategoryData:Dispatch<any>,
  setHamburgerIsShown:Dispatch<SetStateAction<boolean>>,
  search:(value:string,category:string)=>void
}
const Context = createContext<ContextType>({
  hamburgerIsShown:false,
  categoryData:null,
  setCategoryData:()=>{},
  setHamburgerIsShown:()=>{},
  search:(value:string,category:string)=>{}
})
export default function GeneralStateProvider({children}:Props) {
  const [hamburgerIsShown,setHamburgerIsShown] = useState(false);
  const [categoryData,setCategoryData] = useState<any>(null);
  
  const search = useDebouncedCallback((value: string,category:string) => {
    const [dataByCategory] = data.filter((data)=>data.id === category);
    if(value === ''){
      setCategoryData(dataByCategory)
    }
    const filtered = dataByCategory.items.filter((item)=>item.title.includes(value));
    setCategoryData(filtered);
  }, 500);
  const ContextValue:ContextType = {
  hamburgerIsShown,
  categoryData,
  setCategoryData,
  setHamburgerIsShown,
  search
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
