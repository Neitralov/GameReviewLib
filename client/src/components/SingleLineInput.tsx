import {FC} from "react";

interface SingleLineInputProps {
  placeholder: string;
  fontSize: FontSizes
}

export enum FontSizes {
  xs = "text-xs",
  sm = "text-sm",
  base = "text-base",
  lg = "text-lg",
  xl = "text-xl",
}

export const SingleLineInput: FC<SingleLineInputProps> = ({fontSize, placeholder}) => {
  return (
    <input className={`${fontSize} w-full bg-background px-3 py-1.5 rounded shadow-sm outline-primary`} type="text" placeholder={placeholder} />
  )
}