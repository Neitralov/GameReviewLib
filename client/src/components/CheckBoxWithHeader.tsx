import {FC} from "react";
import {CheckBox} from "../ui/CheckBox.tsx";

interface Props {
  header: string,
  label: string
}

export const CheckBoxWithHeader: FC<Props> = ({header, label}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <CheckBox>
        <span className={"text-sm"}>{ label }</span>
      </CheckBox>
    </div>
  )
}