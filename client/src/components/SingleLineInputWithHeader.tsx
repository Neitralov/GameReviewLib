import {ChangeEventHandler, FC, FocusEventHandler} from "react";
import {SingleLineInput} from "../ui/SingleLineInput.tsx";

interface Props {
  header: string
  placeholder: string
  value: string
  error: string
  onBlur: FocusEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SingleLineInputWithHeader: FC<Props> = ({header, placeholder, value, error, onBlur, onChange}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className={"flex gap-2"}>
        <h2>{header}</h2>
        <h2 className={"text-danger"}>{error}</h2>
      </div>
      <SingleLineInput placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange}/>
    </div>
  )
}