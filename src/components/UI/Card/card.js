import { useEffect } from "react";
import Classes from "./card.module.css";

const Card = (props) => {
  return (
    <div onClick={props.onClick} className={`${Classes.Card} ${props.class}`}>
      {props.children}
    </div>
  );
};

export default Card;

// vHpVFJikTtHFfeWGvUo8EqmhA5ZX7NAA
