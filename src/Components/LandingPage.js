import React from "react";
import classes from "./LandingPage.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import Content from "./Content";
import BelowContent from "./BelowContent";
import Dropdown from "./Dropdown";
import Products from "./Products";
import Point from "./Point";
import { Link } from "react-router-dom";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <>
      <div className={classes.body}>
        <header className={`${classes.nav}`}>
          <img
            src={require("./ImgVidfiles/fomlogo.png")}
            className={classes.logo}
          />
          
    <Navbar/>

        </header>
        <div className={classes.cartrow}>
          <ul className={classes.cartrow}>
            <button className={classes.cartrowitem}>Wishlist</button>
            <li>
              <MdFavorite className={classes.icon} />
            </li>
            <button className={classes.cartrowitem}> Add to Cart </button>
            <li>
              <BsFillCartPlusFill className={classes.icon} />
            </li>
          </ul>
        </div>
        <Content />
        <Products />
        <BelowContent className={classes.belcontitems}/>
      </div>
<Point/>
      <Dropdown />
      
    </>
  );
};
export default LandingPage;
