import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./favoritesButton.module.css";

const FavoritesButton = (props) => {
  const dispach = useDispatch();
  const isFavorite = useSelector((state) => {
    return state.favorites[props.id];
  });

  const changeFavoriteStatus = () => {
    if (isFavorite) {
      dispach({ type: "removeFavorite", payload: { id: props.id } });
    } else {
      dispach({
        type: "addFavorite",
        payload: { id: props.id, city: props.city },
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: isFavorite
          ? "rgb(217, 217, 42)"
          : "rgb(201, 201, 201)",
      }}
      onClick={changeFavoriteStatus}
      className={Classes.favButton}
    ></div>
  );
};

export default FavoritesButton;
