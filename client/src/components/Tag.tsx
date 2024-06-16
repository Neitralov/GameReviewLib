import React, {FC} from "react";

interface TagProps {
  children: React.ReactNode
}

export const Tag: FC<TagProps> = ({children}) => {
  return (
    <div className="w-fit text-xs bg-neutral px-2 py-1 rounded-full shadow-sm">
      { children }
    </div>
  )
}