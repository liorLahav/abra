import { useState } from "react";
import { useDispatch } from "react-redux";
import DropDown from "./DropDown/dropDown";
import Classes from "./SerchBar.module.css";

const Search = (props) => {
  const dispach = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [searchHaveError, setsearchHaveError] = useState(null);
  let autoCompleteData;
  const inputHandler = (event) => {
    let value = event.target.value;
    if (value.length === 0) {
      setsearchHaveError(null);
    } else {
      for (let i = 0; i < value.length; i++) {
        let temp = value.charCodeAt(i);

        if ((96 < temp && temp < 122) || (65 < temp && temp < 90)) {
          if (i === value.length - 1) {
            setsearchHaveError(false);
          }
        } else {
          setsearchHaveError(true);
          break;
        }
      }
    }
    event.target.value.slice();
    setInputValue(event.target.value);
  };

  const submitHandler = (event, value) => {
    event.preventDefault();
    if (autoCompleteData !== undefined) {
      setInputValue("");
      dispach({ type: "changeLocation", payload: autoCompleteData });
    }
  };
  const autoCompleteHandler = (value) => {
    setInputValue(value.location);
    autoCompleteData = value;
  };
  return (
    <div className={Classes.searchContainer}>
      <form onSubmit={submitHandler} className={Classes.Search}>
        <button type="submit"></button>
        <input
          className={searchHaveError ? Classes.searchError : null}
          onChange={inputHandler}
          placeholder="Search here"
          value={inputValue}
          type="text"
        ></input>
      </form>
      {searchHaveError && <p>invalid input only english letter are allowed</p>}
      <DropDown inputVal={inputValue} autoComplete={autoCompleteHandler} />
    </div>
  );
};

export default Search;
