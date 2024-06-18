import {FC} from "react";
import {BgValueField} from "../ui/value-fields/BgValueField.tsx";

interface Props {
  header: string
}

export const Details: FC<Props> = ({header}) => {
  return (
    <details className={"bg-neutral rounded"}>
      <summary className={"px-2 py-1 cursor-pointer"}>{ header }</summary>
      <div className={"flex flex-col gap-1.5 px-3 pt-1 pb-2"}>
        <BgValueField>
          <span className={"text-base"}>25 - Action/RPG</span>
        </BgValueField>
        <BgValueField>
          <span className={"text-base"}>12 - Головоломка</span>
        </BgValueField>
        <BgValueField>
          <span className={"text-base"}>4 - Кликер</span>
        </BgValueField>
      </div>
    </details>
  )
}