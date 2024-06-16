import React, {FC, useState} from "react";

interface CheckBoxProps {
  color: CheckBoxColors
  children: React.ReactNode
}

export enum CheckBoxColors {
  Neutral = "bg-neutral",
  Background = "bg-background",
}

export const CheckBox: FC<CheckBoxProps> = ({color, children}) => {
  const [value, setValue] = useState(false);

  return (
    <div className={`${color} flex items-center w-fit gap-0.5 px-3 py-1.5 text-sm rounded shadow-sm cursor-pointer select-none`} onClick={() => setValue(!value)}>
      { RenderCheckMark(value) }
      { children }
    </div>
  )
}

function RenderCheckMark(value: boolean) {
  if (value) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
        <path
          d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z"/>
      </svg>
    )
  }
  else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
        <path
          d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Z"/>
      </svg>
    )
  }
}