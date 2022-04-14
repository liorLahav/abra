import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./alert.module.css";

const Alert = () => {
  const dispach = useDispatch();
  const AlertText = useSelector((state) => {
    return state.alert;
  });
  const submitHandler = () => {
    dispach({ type: "alert", payload: { text: "" } });
  };
  return ReactDOM.createPortal(
    <div className={Classes.alertBackground}>
      <form onSubmit={submitHandler} className={Classes.Alert}>
        <h1>{AlertText}</h1>
        <button type="submit">Ok</button>
      </form>
    </div>,
    document.getElementById("overlay")
  );
};
export default Alert;
