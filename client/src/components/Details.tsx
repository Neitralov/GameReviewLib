import {FC} from "react";
import {BgValueField} from "../ui/value-fields/BgValueField.tsx";

interface Props {
  header: string
  data: {count: number, value: string}[]
}

export const Details: FC<Props> = ({header, data}) => {
  return (
    <details className={"bg-neutral rounded"}>
      <summary className={"px-2 py-1 cursor-pointer"}>{ header }</summary>
      <div className={"flex flex-col gap-1.5 px-3 pt-1 pb-2"}>
        { data.map(item =>
          <BgValueField key={item.value}>
            <span className={"text-base"}>{item.count} - {item.value}</span>
          </BgValueField>
        )}
      </div>
    </details>
  )
}