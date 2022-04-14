import { useSelector } from "react-redux";
import FavoritesCard from "./FavoritesCard/FavoritesCard";
import Classes from "./favorites.module.css";
const Favorites = () => {
  const favorites = Object.entries(
    useSelector((state) => {
      return state.favorites;
    })
  );

  return (
    <main className={Classes.favorites}>
      <h1>Favorites</h1>
      <div className={Classes.FlexConatiner}>
        {favorites.map((city) => {
          return <FavoritesCard key={city[0]} id={city[0]} city={city[1]} />;
        })}
      </div>
    </main>
  );
};

export default Favorites;
