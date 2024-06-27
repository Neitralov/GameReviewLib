import {ChangeEventHandler, FC} from "react";

interface Props {
  placeholder: string
  value: string
  setValue: ChangeEventHandler<HTMLTextAreaElement>
}

export const MultiLineInput: FC<Props> = ({placeholder, value, setValue}) => {
  return (
    <textarea
      className={"w-full bg-background text-sm px-3 py-1.5 rounded shadow-sm resize-none outline-primary"}
      rows={3}
      placeholder={placeholder}
      value={value}
      onChange={setValue}/>
  )
}