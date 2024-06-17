import {FC, useState} from "react";

interface DropdownProps {
  header: string
  isStretch: boolean
  color: DropdownColors
}

export enum DropdownColors {
  Neutral = "bg-neutral",
  Background = "bg-background",
}

export const Dropdown: FC<DropdownProps> = ({header, isStretch, color}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${isStretch ? "relative" : ""}`}>
      <button
        className={`${isStretch ? "w-full justify-between" : ""} flex items-center gap-0.5 text-sm ${color} px-3 py-1.5 rounded shadow-sm select-none`}
        type={"button"}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}>
        { header }
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
          <path d="M480-384 288-576h384L480-384Z"/>
        </svg>
      </button>

      <div
        className={`${isOpen ? "" : "hidden"} ${isStretch ? "w-full" : ""} z-10 absolute ${color} mt-2 px-2 py-1.5 shadow rounded`}>
        <p
          className={`${color == DropdownColors.Neutral ? "hover:bg-background" : "hover:bg-neutral"} text-sm px-2 py-0.5 rounded`}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
        <p
          className={`${color == DropdownColors.Neutral ? "hover:bg-background" : "hover:bg-neutral"} text-sm px-2 py-0.5 rounded`}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
        <p
          className={`${color == DropdownColors.Neutral ? "hover:bg-background" : "hover:bg-neutral"} text-sm px-2 py-0.5 rounded`}
          onMouseDown={() => setIsOpen(false)}>Пункт меню</p>
      </div>
    </div>
  )
}