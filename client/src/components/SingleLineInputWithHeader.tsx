import {ChangeEventHandler, FC} from "react";
import {SingleLineInput} from "../ui/SingleLineInput.tsx";

interface Props {
  header: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleLineInputWithHeader: FC<Props> = ({header, placeholder, value, onChange}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <h2>{ header }</h2>
      <SingleLineInput placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}