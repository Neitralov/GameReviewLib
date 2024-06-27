import {FC} from "react";
import {CheckBox} from "../ui/CheckBox.tsx";

interface Props {
  header: string
  label: string
  value: boolean
  setValue: (value: boolean) => void
}

export const CheckBoxWithHeader: FC<Props> = ({header, label, value, setValue}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <CheckBox value={value} setValue={setValue}>
        <span className={"text-sm"}>{ label }</span>
      </CheckBox>
    </div>
  )
}