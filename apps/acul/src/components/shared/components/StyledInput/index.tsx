import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
export interface Props {
  placeholder?: string;
  height: string;
  br: string;
  val?: string;
  setVal?: Dispatch<SetStateAction<string>>;
}
export default function StyledInput(props: Props) {
  const { placeholder, height, br, val, setVal } = props;
  
  return (
    <div
      className={`shadow-button rounded-[${br}] focus-within:shadow-input focus-within:border`}
    >
      <Input
        className={`h-[${height}] !text-[1rem] rounded-[${br}] py-[0px] px-[12px] !shadow-button focus:outline-offset-0 border-none text-[white]`}
        placeholder={`${placeholder}`}
        value={val}
        onChange={(e) => setVal!(e.target.value)}
      />
    </div>
  );
}
