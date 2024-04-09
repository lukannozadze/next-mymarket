import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function GenderRadio({
  gender,
  male,
  female,
}: {
  gender: string;
  male: string;
  female: string;
}) {
  return (
    <div>
      <span>{gender}</span>
      <RadioGroup className="flex pt-5">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="r1" />
          <span>{male}</span>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="r2" />
          <span>{female}</span>
        </div>
      </RadioGroup>
    </div>
  );
}
