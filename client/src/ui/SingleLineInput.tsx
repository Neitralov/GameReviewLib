import {ChangeEventHandler, FC, FocusEventHandler} from "react";

interface Props {
  placeholder: string
  value: string
  onBlur: FocusEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleLineInput: FC<Props> = ({placeholder, value, onBlur, onChange}) => {
  return (
    <input className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm outline-primary"} type="text" placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange}/>
  )
}