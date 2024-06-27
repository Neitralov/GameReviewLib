import {ChangeEventHandler, FC} from "react";

interface Props {
  placeholder: string
  value: number
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleNumberInput: FC<Props> = ({placeholder, value, onChange}) => {
  return (
    <input
      className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm outline-primary"}
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
  )
}