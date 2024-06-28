import React, {FC, FocusEventHandler, useState} from "react";
import {ArrowIcon} from "../../icons.tsx";

interface Props {
  header: string
  isStretch: boolean
  onBlur: FocusEventHandler<HTMLButtonElement>
  getItem: (index: number) => void
  data: {id: number, name: string}[]
}

export const BgSelect: FC<Props> = ({header, isStretch, onBlur, getItem, data}) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectItem = (index: number) => {
    getItem(index)
    setIsOpen(false)
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLButtonElement>) => {
    onBlur(e)
    setIsOpen(false)
  }

  return (
    <div className={`${isStretch ? "relative" : ""}`}>
      <button
        className={`${isStretch ? "w-full justify-between" : ""} flex items-center gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm select-none`}
        type={"button"}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={onBlurHandler}>
        { header }
        <ArrowIcon/>
      </button>

      <div
        className={`absolute ${isOpen ? "" : "hidden"} ${isStretch ? "w-full" : ""} bg-background mt-2 px-2 py-1.5 shadow rounded z-10`}>
        { data.map(item =>
          <p key={item.id}
            className={"hover:bg-background-hover text-sm px-2 py-0.5 rounded select-none cursor-pointer"}
            onMouseDown={() => selectItem(item.id)}>{item.name}</p>
        )}
      </div>
    </div>
  )
}