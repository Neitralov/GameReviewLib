import {ValueField, ValueFieldColors} from "./ValueField.tsx";

export default function Details() {
  return (
    <details className="bg-neutral rounded">
      <summary className="px-2 py-1">Заголовок</summary>
      <div className="flex flex-col gap-1.5 px-3 pt-1 pb-2">
        <ValueField color={ValueFieldColors.Background}><span className="text-base">Значение</span></ValueField>
        <ValueField color={ValueFieldColors.Background}><span className="text-base">Значение</span></ValueField>
        <ValueField color={ValueFieldColors.Background}><span className="text-base">Значение</span></ValueField>
      </div>
    </details>
  )
}