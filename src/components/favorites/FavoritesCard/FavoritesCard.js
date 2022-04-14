import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Card from "../../UI/Card/card";
import Classes from "./FavoritesCard.module.css";

const FavoritesCard = (props) => {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const data = useSelector((state) => {
    return state.currentWheather[props.id];
  });
  const [IsPressed, setIsPressed] = useState(false);
  const clickHandler = () => {
    dispach({
      type: "changeLocation",
      payload: { location: props.city, key: props.id },
    });
    navigate("/");
  };
  return (
    <Card onClick={clickHandler} class={Classes.FavoritesCard}>
      <h2>{props.city}</h2>
      <p>{data.temperature}&#8451;</p>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${data.icon}-s.png`}
        alt="Weather pic"
      ></img>
      <h3>{data.WeatherText}</h3>
    </Card>
  );
};

export default FavoritesCard;
