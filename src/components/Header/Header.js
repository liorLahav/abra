import { Link } from "react-router-dom";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={Classes.Header}>
      <Link to="/" className={Classes.navButton}>
        Home
      </Link>
      <Link to="favorites" className={Classes.navButton}>
        Favorites
      </Link>
      <h1>Abra weather site</h1>
    </header>
  );
};

export default Header;
