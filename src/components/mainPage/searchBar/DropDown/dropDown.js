import Classes from "./dropDown.module.css";
import { useEffect, useState } from "react";
const DropDown = (props) => {
  const [autoCompleteLists, setAutoCompleteLists] = useState([]);
  useEffect(() => {
    if (props.inputVal !== "" && props.inputVal.length > 1) {
      fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=vHiCdzBf9ay1yTDR04546BFGIZDDIq4s&q=${props.inputVal}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let arr = [];
          res.forEach((city) => {
            arr.push({ location: city.LocalizedName, key: city.Key });
          });
          setAutoCompleteLists(arr);
        });
    }
  }, [props.inputVal]);
  const autoComplete = (event) => {
    setAutoCompleteLists([]);
    props.autoComplete(autoCompleteLists[event.currentTarget.id]);
  };
  return (
    <div
      style={{
        display:
          props.inputVal !== "" && autoCompleteLists.length !== 0
            ? "inline-block"
            : "none",
      }}
      className={Classes.dropDown}
    >
      {autoCompleteLists.map((city, index) => {
        return (
          <div key={index} id={index} onClick={autoComplete}>
            {city.location}
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;

//tZue34nmLbdXAXJG9XMDx1AV7Za3rUoR
