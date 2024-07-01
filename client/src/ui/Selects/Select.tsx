import {FC, useState} from "react";
import {ArrowIcon} from "../../icons.tsx";

interface Props {
  header: string
  isStretch: boolean
  getItem: (index: number) => void
  data: {id: number, name: string}[]
}

export const Select: FC<Props> = ({header, isStretch, getItem, data}) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectItem = (index: number) => {
    getItem(index)
    setIsOpen(false)
  }

  return (
    <div className={`${isStretch ? "relative" : ""}`}>
      <button
        className={`${isStretch ? "w-full justify-between" : ""} flex items-center gap-0.5 bg-neutral hover:bg-neutral-hover text-sm px-3 py-1.5 rounded shadow-sm select-none outline-primary`}
        type={"button"}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}>
        { header }
        <ArrowIcon/>
      </button>

      <div
        className={`absolute ${isOpen ? "" : "hidden"} ${isStretch ? "w-full" : ""} max-h-48 overflow-y-auto bg-neutral mt-2 px-2 py-1.5 shadow rounded z-10`}>
        { data.map(item =>
          <p key={item.id}
             className={"hover:bg-neutral-hover text-sm px-2 py-0.5 rounded select-none cursor-pointer"}
             onMouseDown={() => selectItem(item.id)}>{item.name}</p>
        )}
      </div>
    </div>
  )
}