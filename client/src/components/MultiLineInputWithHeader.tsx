import {FC} from "react";
import {MultiLineInput} from "../ui/MultiLineInput.tsx";

interface Props {
  header: string,
  placeholder: string
}

export const MultiLineInputWithHeader: FC<Props> = ({header, placeholder}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <MultiLineInput placeholder={placeholder}/>
    </div>
  )
}