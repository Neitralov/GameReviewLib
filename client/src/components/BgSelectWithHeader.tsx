import {FC} from "react";
import {BgSelect} from "../ui/Selects/BgSelect.tsx";

interface Props {
  header: string,
  selectHeader: string
}

export const BgSelectWithHeader: FC<Props> = ({header, selectHeader}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <h2>{ header }</h2>
      <BgSelect header={selectHeader} isStretch={true}/>
    </div>
  )
}