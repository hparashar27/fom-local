import React from 'react'
import classes from './Point.module.css'
import {ImTruck } from "react-icons/im";
import {HiCurrencyDollar } from "react-icons/hi";
import {FaRegQuestionCircle } from "react-icons/fa";
import {IoLogoWhatsapp } from "react-icons/io";

function Point() {
  return (
    <>
    <section className={classes.Point}>
<div className={classes.Point1} >
<ImTruck className={classes.icons1} />
<p  className={classes.lines}>
FREE SHIPPING <br/>
ON ORDERS OVER $49.00</p>
</div >
<div className={classes.Point1}>
<HiCurrencyDollar className={classes.icons1}/>
<p className={classes.lines}>
MONEY GUARANTEE <br/>
30 DAYS BACK</p>
</div>
<div className={classes.Point1}>
<FaRegQuestionCircle className={classes.icons1}/>
<p  className={classes.lines}>
PAYMENT METHOD <br/>
SECURE SYSTEM</p>
</div>
<div className={classes.Point1}>
<IoLogoWhatsapp className={classes.icons1}/>
<p  className={classes.lines}>
CONTACT US <br/>
(562) 760-2180</p>
</div>
    </section>
    </>
  )
}

export default Point