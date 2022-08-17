import React from 'react'
import classes from './BelowContent.module.css'

function BelowContent() {
  return (
   <>
   <h3 className={classes.ourprod}> Best Selling Products </h3>
  <div className={classes.belowcontent}>
   <img src={require('./ImgVidfiles/fomchair.png')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/yogastrap.png')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/sofafom.jpg')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/bottlefom.png')} className={classes.logo2} />
   <div>
    <ul >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
   </div>
   </div>
   
   </>
  )
}

export default BelowContent;