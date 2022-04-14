import Card from "../../UI/Card/card";
import TempDisplay from "./tempDisplay/tempDispaly";
import Classes from "./nextWeekWeather.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../UI/loading/loading";

const NextWeekWeather = (props) => {
  const dispach = useDispatch();
  const [data, setData] = useState([]);
  const location = useSelector((state) => {
    return state.location;
  });
  const storedData = useSelector((state) => {
    return state.futureWheather[location.key];
  });
  useEffect(() => {
    if (storedData !== undefined) {
      setData(storedData);
    } else if (location.key !== undefined) {
      fetch(
        "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
          location.key +
          "?apikey=vHiCdzBf9ay1yTDR04546BFGIZDDIq4s&metric=true"
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let future = [];
          let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          res.DailyForecasts.forEach((day) => {
            let icon = day.Day.Icon;
            if (icon < 10) {
              icon = "0" + icon;
            }
            future.push({
              day: new Date(day.Date).toLocaleDateString("en-US", options),
              min: day.Temperature.Minimum.Value,
              max: day.Temperature.Maximum.Value,
              src: icon,
            });
          });
          setData(future);
          dispach({
            type: "AddFutureWheather",
            payload: { key: location.key, data: future },
          });
        })
        .catch((err) => {
          dispach({ type: "alert" });
        });
    }
  }, [location]);
  return (
    <div className={Classes.nextWeekWeather}>
      {data.map((forcast, index) => {
        return (
          <Card key={index} class={Classes.nextWeekCard}>
            <h2>{forcast.day}</h2>
            <h3>temperature:</h3>
            <div className={Classes.tempContainer}>
              <TempDisplay headline="minimum" temperature={forcast.min} />
              <img
                src={`https://developer.accuweather.com/sites/default/files/${forcast.src}-s.png`}
                loading="lazy"
              ></img>
              <TempDisplay headline="maximum" temperature={forcast.max} />
            </div>
          </Card>
        );
      })}
      {data === undefined && <Loading />}
    </div>
  );
};

export default NextWeekWeather;
