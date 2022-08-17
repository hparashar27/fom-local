import React from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
// import classes from "./LandingPage.module.css";
// import {Link, Routes ,Route} from 'react-router-dom' ;
import classes from './About.module.css'

function Navbar() {
  return (
    <div>
    <div className={classes.nav}>
            <ul className={classes.list}>
                <BrowserRouter>
                <Routes>
             <li className={classes.listitem}><Route path="/About">About</Route></li> 
              <li className={classes.listitem}>Meditation</li>
              <li className={classes.listitem}>Yoga Accessories</li>
              <li className={classes.listitem}>Travel Accessories </li>
              <li className={classes.listitem}>Personal Coaching</li>
              </Routes>
              </BrowserRouter>
           </ul>
          </div>
</div>
  )
}

export default Navbar