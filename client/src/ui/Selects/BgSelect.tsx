import {FC, useState} from "react";
import {ArrowIcon} from "../../icons.tsx";

interface Props {
  header: string
  isStretch: boolean
  GetItem: (index: number) => void
  Data: {id: number, name: string}[]
}

export const BgSelect: FC<Props> = ({header, isStretch, GetItem, Data}) => {
  const [isOpen, setIsOpen] = useState(false)

  function SelectItem(index: number) {
    GetItem(index)
    setIsOpen(false)
  }

  return (
    <div className={`${isStretch ? "relative" : ""}`}>
      <button
        className={`${isStretch ? "w-full justify-between" : ""} flex items-center gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm select-none`}
        type={"button"}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}>
        { header }
        <ArrowIcon/>
      </button>

      <div
        className={`absolute ${isOpen ? "" : "hidden"} ${isStretch ? "w-full" : ""} bg-background mt-2 px-2 py-1.5 shadow rounded z-10`}>
        { Data.map(item =>
          <p key={item.id}
            className={"hover:bg-background-hover text-sm px-2 py-0.5 rounded cursor-pointer"}
            onMouseDown={() => SelectItem(item.id)}>{item.name}</p>
        )}
      </div>
    </div>
  )
}