import {FC} from "react";
import {ValueField, ValueFieldColors} from "./ValueField.tsx";

interface DetailsProps {
  header: string
}

export const Details: FC<DetailsProps> = ({header}) => {
  return (
    <details className="bg-neutral rounded">
      <summary className="px-2 py-1">{ header }</summary>
      <div className="flex flex-col gap-1.5 px-3 pt-1 pb-2">
        <ValueField color={ValueFieldColors.Background}><span className="text-base">25 - Action/RPG</span></ValueField>
        <ValueField color={ValueFieldColors.Background}><span className="text-base">12 - Головоломка</span></ValueField>
        <ValueField color={ValueFieldColors.Background}><span className="text-base">4 - Кликер</span></ValueField>
      </div>
    </details>
  )
}