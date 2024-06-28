import React, {FC} from "react";
import {ValueField} from "../ui/value-fields/ValueField.tsx";

interface Props {
  header: string
  children: React.ReactNode
}

export const ValueFieldWithHeader: FC<Props> = ({header, children}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <h2 className={"text-base"}>{ header }</h2>
      <ValueField>
        <span className={"text-base"}>{ children }</span>
      </ValueField>
    </div>
  )
}