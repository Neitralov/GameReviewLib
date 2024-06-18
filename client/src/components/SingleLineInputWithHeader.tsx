import {FC} from "react";
import {SingleLineInput} from "../ui/SingleLineInput.tsx";

interface Props {
  header: string,
  placeholder: string
}

export const SingleLineInputWithHeader: FC<Props> = ({header, placeholder}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <h2>{ header }</h2>
      <SingleLineInput placeholder={placeholder}/>
    </div>
  )
}