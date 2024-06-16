import React, {FC} from "react";

interface ValueFieldProps {
  color: ValueFieldColors
  children: React.ReactNode
}

export enum ValueFieldColors {
  Neutral = "bg-neutral",
  Background = "bg-background",
}

export const ValueField: FC<ValueFieldProps> = ({color, children}) => {
  return (
    <div className={`${color} text-muted text-xs px-3 py-1.5 rounded`}>
      { children }
    </div>
  )
}