import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[140px] focus:outline-none">
        {/* <SelectValue placeholder="Select a fruit" /> */}
         <SelectValue className="font-bold" placeholder='ქართული' defaultValue='georgian'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem  value="georgian">ქართული</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="russian">Русский</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
