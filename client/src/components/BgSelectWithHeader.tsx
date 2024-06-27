import {FC} from "react";
import {BgSelect} from "../ui/Selects/BgSelect.tsx";

interface Props {
  header: string
  selectHeader: string
  GetItem: (index: number) => void
  Data: {id: number, name: string}[]
}

export const BgSelectWithHeader: FC<Props> = ({header, selectHeader, GetItem, Data}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <BgSelect header={selectHeader} isStretch={true} GetItem={GetItem} Data={Data}/>
    </div>
  )
}