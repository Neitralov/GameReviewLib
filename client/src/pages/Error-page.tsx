import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={"flex flex-col justify-center items-center h-screen"}>
      <h1 className={"text-3xl mb-2"}>Ого 😱</h1>
      <p className={"mb-1"}>Произошло что-то непредвиденное.</p>
      <p>
        {/* @ts-ignore*/}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}