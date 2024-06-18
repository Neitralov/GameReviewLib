import {FC} from "react";

interface Props {
  placeholder: string;
}

export const MultiLineInput: FC<Props> = ({placeholder}) => {
  return (
    <textarea className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm resize-none outline-primary"} rows={3} placeholder={placeholder} />
  )
}