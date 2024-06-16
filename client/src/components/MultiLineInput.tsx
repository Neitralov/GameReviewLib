import {FC} from "react";

interface MultiLineInputProps {
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

export const MultiLineInput: FC<MultiLineInputProps> = ({fontSize, placeholder}) => {
  return (
    <textarea className={`${fontSize} w-full bg-background px-3 py-1.5 rounded shadow-sm resize-none`} rows={3} placeholder={placeholder} />
  )
}