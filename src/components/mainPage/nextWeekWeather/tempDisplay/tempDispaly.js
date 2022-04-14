import Classes from "./tempDispaly.module.css";

const TempDisplay = (props) => {
  return (
    <div className={Classes.tempDisplay}>
      <h5>{props.headline}</h5>
      <p>{props.temperature}&#8451;</p>
    </div>
  );
};

export default TempDisplay;
