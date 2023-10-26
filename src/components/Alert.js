import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
  const { alert, clearAlert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="container mt-3 alert">
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {alert.msg}
          <button
            onClick={clearAlert}
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
};

export default Alert;
