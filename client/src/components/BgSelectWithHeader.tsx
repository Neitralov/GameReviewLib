import {FC, FocusEventHandler} from "react";
import {BgSelect} from "../ui/Selects/BgSelect.tsx";

interface Props {
  header: string
  selectHeader: string
  error: string
  onBlur: FocusEventHandler<HTMLButtonElement>
  getItem: (index: number) => void
  data: {id: number, name: string}[]
}

export const BgSelectWithHeader: FC<Props> = ({header, selectHeader, error, onBlur, getItem, data}) => {
  return (
    <div className={"flex flex-col w-full gap-1"}>
      <div className={"flex gap-2"}>
        <h2>{header}</h2>
        <h2 className={"text-danger"}>{error}</h2>
      </div>
      <BgSelect header={selectHeader} isStretch={true} onBlur={onBlur} getItem={getItem} data={data}/>
    </div>
  )
}