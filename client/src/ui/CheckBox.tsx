import React, {FC} from "react";
import {BlankCheckMarkIcon, CheckMarkIcon} from "../icons.tsx";

interface Props {
  children: React.ReactNode
  value: boolean
  setValue: (value: boolean) => void
}

export const CheckBox: FC<Props> = ({children, value, setValue}) => {

  return (
    <div
      className={`flex items-center w-fit gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm cursor-pointer select-none`}
      onClick={() => setValue(!value)}>
      { RenderCheckMark(value) }
      { children }
    </div>
  )
}

function RenderCheckMark(value: boolean) {
  if (value) {
    return (<CheckMarkIcon/>)
  }
  else {
    return (<BlankCheckMarkIcon/>)
  }
}