import {ChangeEventHandler, FC} from "react";

interface Props {
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleLineInput: FC<Props> = ({placeholder, value, onChange}) => {
  return (
    <input className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm outline-primary"} type="text" placeholder={placeholder} value={value} onChange={onChange}/>
  )
}