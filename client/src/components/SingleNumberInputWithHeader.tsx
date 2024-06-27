import {ChangeEventHandler, FC} from "react";
import {SingleNumberInput} from "../ui/SingleNumberInput.tsx";

interface Props {
  header: string
  placeholder: string
  value: number
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleNumberInputWithHeader: FC<Props> = ({header, placeholder, value, onChange}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <h2>{ header }</h2>
      <SingleNumberInput placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}