const initailState = {
  favorites: {},
  location: { city: "Tel Aviv", key: 215854 },
  currentWheather: {},
  futureWheather: {},
  alert: "",
};
const Reducer = (state = initailState, action) => {
  let temp;
  switch (action.type) {
    case "addFavorite":
      temp = state.favorites;
      temp[action.payload.id] = action.payload.city;
      return {
        favorites: temp,
        location: state.location,
        currentWheather: state.currentWheather,
        futureWheather: state.futureWheather,
        alert: state.alert,
      };
    case "removeFavorite":
      temp = state.favorites;
      delete temp[action.payload.id];
      return {
        favorites: temp,
        location: state.location,
        currentWheather: state.currentWheather,
        futureWheather: state.futureWheather,
        alert: state.alert,
      };
    case "changeLocation":
      return {
        favorites: state.favorites,
        location: {
          city: action.payload.location,
          key: action.payload.key,
        },
        currentWheather: state.currentWheather,
        futureWheather: state.futureWheather,
        alert: state.alert,
      };
    case "AddCurrentWheather":
      temp = state.currentWheather;
      temp[action.payload.key] = action.payload.data;
      return {
        favorites: state.favorites,
        location: state.location,
        currentWheather: temp,
        futureWheather: state.futureWheather,
        alert: state.alert,
      };
    case "AddFutureWheather":
      temp = state.futureWheather;
      temp[action.payload.key] = action.payload.data;
      return {
        favorites: state.favorites,
        location: state.location,
        currentWheather: state.currentWheather,
        futureWheather: temp,
        alert: state.alert,
      };
    case "alert":
      if (action.payload === undefined) {
        temp = "Oops something went wrong...";
      } else {
        temp = action.payload.text;
      }
      return {
        favorites: state.favorites,
        location: state.location,
        currentWheather: state.currentWheather,
        futureWheather: temp,
        alert: temp,
      };
    default:
      return state;
  }
};
export default Reducer;
