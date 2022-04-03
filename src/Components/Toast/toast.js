
import "./toast.css";

import { useEffect } from "react";
import { useAuth } from "../../Context/authContext";
// import { useAuth } from "../../Context";

export const Toast = () => {
  const {
    authState: { toastData },
    authDispatch,
  } = useAuth();
  const { status, display, data } = toastData;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      authDispatch({ type: "REMOVE_TOAST" });
    }, 3000);
    return () => clearTimeout(timeoutID);
  }, [display]);

  return (
    <div
      className={`${
        display ? "snackbar-container flex flex-justify-center" : "display-none"
      } ${status}`}
    >
      {data}
    </div>
  );
};