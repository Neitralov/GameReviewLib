import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";
import {Modal} from "../modal/Modal.tsx";
import {ReviewEditor} from "../modal/ReviewEditor.tsx";

export const App = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <div className={"flex flex-col min-h-screen xl:gap-5 gap-4 bg-background"}>
        <Header openEditor={() => setIsEditorOpen(true)}/>
        <main className={"flex flex-col xl:container w-full xl:gap-5 gap-4 xl:px-[50px] px-4 pb-5"}>
          <Outlet />
        </main>
      </div>

      <Modal isOpen={isEditorOpen}>
        <ReviewEditor setIsModalOpen={setIsEditorOpen}/>
      </Modal>
    </>
  )
}