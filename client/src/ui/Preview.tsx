import {FC} from "react";

interface Props {
  imageUrl: string
}

export const Preview:FC<Props> = ({imageUrl}) => {
  return (
    <div
      className={"min-w-[180px] w-[180px] h-[270px] bg-cover rounded-lg"}
      style={{backgroundImage: `url('${imageUrl}')`}}>
    </div>
  )
}