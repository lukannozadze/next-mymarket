
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function GenderRadio() {
  return (
    <div>
    <span>სქესი</span>
    <RadioGroup className="flex pt-5">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="male" id="r1" />
        <span >მამრობითი</span>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="female" id="r2" />
        <span >მდედრობითი</span>
      </div>
    </RadioGroup>
    </div>
  )
}
