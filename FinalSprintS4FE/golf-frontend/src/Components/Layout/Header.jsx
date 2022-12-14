import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = ({ title, button, url }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{title}</h1>
        {button}
      </header>
      {/* <div className={classes["main-image"]}>
        <img src={url} alt="picture of a golf tournament or left blank" />
      </div> */}
    </Fragment>
  );
};

export default Header;
