import React, {FC} from "react";

interface Props {
  header: string
  children: React.ReactNode
}

export const Details: FC<Props> = ({header, children}) => {
  return (
    <details className={"bg-neutral rounded"}>
      <summary className={"px-2 py-1 cursor-pointer"}>{ header }</summary>
      <div className={"flex flex-col gap-1.5 px-3 pt-1 pb-2"}>
        { children }
      </div>
    </details>
  )
}