import {ValueField, ValueFieldColors} from "./ValueField.tsx";
import React, {FC} from "react";

interface ValueFieldWithHeaderProps {
  header: string;
  children: React.ReactNode;
}

export const ValueFieldWithHeader: FC<ValueFieldWithHeaderProps> = ({header, children}) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-base">{ header }</h2>
      <ValueField color={ValueFieldColors.Neutral}><span className="text-base">{ children }</span></ValueField>
    </div>
  )
}