import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";
const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg, type) => {
    dispatch({ type: "Set_Alert", payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: "Remove_Alert" });
    }, 3000);
  };
  const clearAlert = () => {
    dispatch({ type: "Remove_Alert" });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
