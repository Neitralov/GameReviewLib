import {FC} from "react";

interface Props {
  placeholder: string;
}

export const SingleLineInput: FC<Props> = ({placeholder}) => {
  return (
    <input className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm outline-primary"} type="text" placeholder={placeholder} />
  )
}