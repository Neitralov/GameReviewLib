import React, {FC} from "react";

interface Props {
  children: React.ReactNode
}

export const Tag: FC<Props> = ({children}) => {
  return (
    <div className={"w-fit bg-neutral text-xs px-2 py-1 rounded-full shadow-sm"}>
      { children }
    </div>
  )
}