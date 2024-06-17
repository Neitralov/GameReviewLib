import React, {FC} from "react";
import {createPortal} from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({isOpen, children}) => {
  return createPortal(
    <div className={`${isOpen ? "" : "hidden"} fixed flex justify-center w-full min-h-screen bg-black/25 z-50`}>
      <div className={"container grid grid-cols-12 gap-5 px-[50px] items-center"}>
        <div className={"col-start-2 col-span-10 bg-neutral p-5 rounded-lg shadow"}>
          { children }
        </div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  )
}