import Card from "../UI/Card/card";
import Currentweather from "./currentweather/currentweather";
import NextWeekWeather from "./nextWeekWeather/nextWeekWeather";
import SearchBar from "./searchBar/SearchBar";
import Classes from "./main.module.css";

const Main = (props) => {
  return (
    <main className={Classes.mainPage}>
      <SearchBar />
      <Card class={Classes.mainCard}>
        <NextWeekWeather />
        <Currentweather />
      </Card>
    </main>
  );
};

export default Main;
