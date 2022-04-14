import Classes from "./currentweather.module.css";
import FavoritesButton from "../../UI/favoritesButton/favoritesButton";
import Loading from "../../UI/loading/loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Currentweather = (props) => {
  const dispach = useDispatch();
  const [data, setData] = useState({});
  const location = useSelector((state) => {
    return state.location;
  });
  const storedData = useSelector((state) => {
    return state.currentWheather[location.key];
  });
  useEffect(() => {
    if (storedData !== undefined) {
      setData(storedData);
    } else if (location.key !== undefined) {
      fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${location.key}?apikey=vHiCdzBf9ay1yTDR04546BFGIZDDIq4s`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let icon = res[0].WeatherIcon;
          if (icon < 10) {
            icon = "0" + icon;
          }
          let requiredDetails = {
            temperature: res[0].Temperature.Metric.Value,
            WeatherText: res[0].WeatherText,
            icon: icon,
            city: location.city,
            key: location.key,
          };
          setData(requiredDetails);
          dispach({
            type: "AddCurrentWheather",
            payload: { key: location.key, data: requiredDetails },
          });
        })
        .catch((err) => {
          dispach({ type: "alert" });
        });
    }
  }, [location]);

  return (
    <div className={Classes.currentweather}>
      <FavoritesButton id={location.key} city={location.city} />
      <div className={Classes.NextWeek}></div>
      <h1>{data.city}</h1>
      <div className={Classes.temperature}>{data.temperature}&#8451;</div>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${data.icon}-s.png`}
        loading="lazy"
        alt="icon"
      ></img>
      <h2>{data.WeatherText}</h2>
      {data === undefined && <Loading />}
    </div>
  );
};

export default Currentweather;
