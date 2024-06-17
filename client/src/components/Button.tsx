import React, {FC} from "react";

interface ButtonProps {
  color: ButtonColors
  onClick: () => void
  children: React.ReactNode
}

export enum ButtonColors {
  Neutral = "bg-neutral",
  Background = "bg-background",
  Primary =  "bg-primary",
  Danger = "bg-danger",
}

export const Button: FC<ButtonProps> = ({color, onClick, children}) => {
  return (
    <button className={`${color} flex justify-center items-center gap-0.5 h-fit text-xs px-3 py-1.5 rounded shadow-sm`} onClick={onClick}>
      { children }
    </button>
  )
}