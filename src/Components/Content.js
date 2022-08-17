import React from 'react';
import classes from './Content.module.css'
import BelowContent from './BelowContent';
import {MdTravelExplore} from 'react-icons/md';
function Content() {
  return (
<>
<div className={classes.gridcontainer}>
<div>
    <h1 className={classes.content1}>Meditation Accessories</h1>
    <p className={classes.content2}>Meditation Accessories , Connect  you with divine ...</p>
    <button className={classes.content3}>DISCOVER <MdTravelExplore className={classes.explore}/></button>

</div>
<div>
{/* <video  controls autoPlay loop >
    < source src= type="video/mp4"  />
</video> */}
 <video width="100%" height="100%" loop muted autoPlay="autoplay"
    className={classes.Contentvid} src ={require('./ImgVidfiles/Content.mp4')} type="video/mp4" />
  
{/* <video  src={require('./Content.mp4')} autoplay  className={classes.Contentvid} /> */}
{/* <img src={require('./fomgirlnew.jpg')}  /> */}
</div>
</div>
</>
  )
}

export default Content ;