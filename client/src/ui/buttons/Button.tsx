import React, {FC} from "react";

interface Props {
  onClick: () => void
  children: React.ReactNode
}

export const Button: FC<Props> = ({onClick, children}) => {
  return (
    <button
      className={"flex justify-center items-center h-fit gap-0.5 bg-neutral hover:bg-neutral-hover text-xs px-3 py-1.5 rounded shadow-sm"}
      onClick={onClick}>
      { children }
    </button>
  )
}