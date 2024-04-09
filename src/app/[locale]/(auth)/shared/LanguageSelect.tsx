'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const activePlaceholder = localActive==='ka'?'ქართული':localActive==='en'?'English':'Русский'
  return (
    <Select onValueChange={(val)=>{
     router.push(pathname.replace(localActive,`${val}`));
    }}>
      <SelectTrigger className="w-[140px] focus:outline-none">
        
         <SelectValue className="font-bold" placeholder={activePlaceholder} defaultValue={localActive}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem  value="ka">ქართული</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
