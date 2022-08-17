import React from 'react'
import classes from './DropDown.module.css';
import {CgMail} from "react-icons/cg";
import {FaInstagram} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


function Dropdown() {
  return (
    <>
     {/* <section className={classes.Dropdown}> */}
        <section className={classes.Dropdownlist}>
    <div className={classes.Dropdown1}>
        <img src={require("./ImgVidfiles/fomlogo.png")} className ={classes.logo}/>
        <p className={classes.contact}> <b className={classes.contact1}>Phone:</b><br/> +1 (562) 760-2180 <br/><br/>
        <b className={classes.contact1}>Address:</b><br/> Meditate and Celebrate Inc 2997 E, Pacific Coast Highway Signal Hill CA 90755 USA</p>
    </div>
    <div className={classes.Dropdown1} >
     <p className={classes.headline}>GET TO KNOW US</p>
     <ul className={classes.headline2}>
      <li className={classes.headline3}> PRIVACY POLICY </li>
      <li className={classes.headline3}> REFUND POLICY</li>
      <li className={classes.headline3}> TERMS OF SERVICE</li>
     </ul>
    </div>
    <div className={classes.Dropdown1} >
    <p className={classes.headline}>INFORMATION</p>
    <ul className={classes.headline2}>
      <li className={classes.headline3}> ABOUT US </li>
      <li className={classes.headline3}> MEDITATION </li>
      <li className={classes.headline3}> YOGA ACCESSORIES </li>
      <li className={classes.headline3}> TRAVEL ACCESSORIES</li>
      <li className={classes.headline3}> BULK BUY </li>
      <li className={classes.headline3}> PERSONAL COACHING </li>
     </ul>
    </div>
    <div className={classes.Dropdown1}>
      <p className={classes.newsletter}>NEWSLETTER</p>
      <ul className={classes.social}>
        <li className={classes.socialicon}><CgMail className={classes.socialicon}/></li>
        <li className={classes.socialicon}><FaInstagram className={classes.socialicon}/></li>
        <li className={classes.socialicon}><FaFacebookF className={classes.socialicon}/></li>
        <li className={classes.socialicon}>< FaTwitterSquare className={classes.socialicon}/></li>
      </ul>
      </div>
     </section>
     <p className={classes.copyright}> © 2020 All rights reserved.</p>
     
     </>
   
  )
}

export default Dropdown