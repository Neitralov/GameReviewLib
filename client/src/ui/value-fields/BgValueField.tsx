import React, {FC} from "react";

interface Props {
  children: React.ReactNode
}

export const BgValueField: FC<Props> = ({children}) => {
  return (
    <div className={"bg-background text-xs text-muted px-3 py-1.5 rounded"}>
      { children }
    </div>
  )
}