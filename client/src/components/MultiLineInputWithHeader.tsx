import {ChangeEventHandler, FC} from "react";
import {MultiLineInput} from "../ui/MultiLineInput.tsx";

interface Props {
  header: string,
  placeholder: string
  value: string
  setValue: ChangeEventHandler<HTMLTextAreaElement>
}

export const MultiLineInputWithHeader: FC<Props> = ({header, placeholder, value, setValue}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <MultiLineInput placeholder={placeholder} value={value} setValue={setValue} />
    </div>
  )
}