import {FC, ReactNode} from "react";

interface Props {
  header: string;
  isGradientBackground: boolean;
  children: ReactNode;
}

export const Carousel: FC<Props> = ({header, isGradientBackground, children}) => {
  return (
    <div className={`flex flex-col gap-3 ${ isGradientBackground ? "bg-gradient-to-br from-20% from-cyan-300 via-sky-500 to-80% to-fuchsia-500" : "bg-neutral" } pt-4 rounded-xl`}>
      <h2 className={"text-xl px-5"}>{ header }</h2>
      <div className={"flex gap-5 px-5 pb-4 overflow-x-auto snap-x scroll-pl-5"}>
        { children }
      </div>
    </div>
  )
}