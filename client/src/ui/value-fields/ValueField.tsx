import React, {FC} from "react";

interface Props {
  children: React.ReactNode
}

export const ValueField: FC<Props> = ({children}) => {
  return (
    <div className={"bg-neutral text-xs text-muted px-3 py-1.5 rounded"}>
      { children }
    </div>
  )
}