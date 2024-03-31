import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>📮 React Poster</h1>
      <p>
        <Link className={classes.button} to="/new-post">
          + New Post
        </Link>
      </p>
    </header>
  );
};

export default Header;
