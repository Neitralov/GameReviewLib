import {FC, useState} from "react";
import {ArrowIcon} from "../../icons.tsx";

interface Props {
  header: string
  isStretch: boolean
}

export const Select: FC<Props> = ({header, isStretch}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${isStretch ? "relative" : ""}`}>
      <button
        className={`${isStretch ? "w-full justify-between" : ""} flex items-center gap-0.5 bg-neutral hover:bg-neutral-hover text-sm px-3 py-1.5 rounded shadow-sm select-none`}
        type={"button"}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}>
        { header }
        <ArrowIcon/>
      </button>

      <div
        className={`absolute ${isOpen ? "" : "hidden"} ${isStretch ? "w-full" : ""} bg-neutral mt-2 px-2 py-1.5 shadow rounded z-10`}>
        <p
          className={"hover:bg-neutral-hover text-sm px-2 py-0.5 rounded cursor-pointer"}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
        <p
          className={"hover:bg-neutral-hover text-sm px-2 py-0.5 rounded cursor-pointer"}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
        <p
          className={"hover:bg-neutral-hover text-sm px-2 py-0.5 rounded cursor-pointer"}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
      </div>
    </div>
  )
}