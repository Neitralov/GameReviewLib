import React, {FC} from "react";

interface ButtonProps {
  color: ButtonColors
  children: React.ReactNode
}

export enum ButtonColors {
  Neutral = "bg-neutral",
  Background = "bg-background",
  Primary =  "bg-primary",
  Danger = "bg-danger",
}

export const Button: FC<ButtonProps> = ({color, children}) => {
  return (
    <button className={`${color} text-xs px-3 py-1.5 rounded shadow-sm`}>
      { children }
    </button>
  )
}