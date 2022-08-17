import React from 'react'



function About() {
  return (
    <>
    <LandingPage/>   
    <div className={classes.about}>
     <p className={classes.about1}>About our store</p>
     <p className={classes.about2}>We are passionate about meditation, yoga, and relaxation. Our work involves innovation-led manufacturing of an eccentric range of products that facilitate ease in <br/> practicing yoga and meditation techniques for beginners as well as experts.<br/>
  Our founder Swami Dhyan Unmesh is a certified Osho Meditation Facilitator, Restorative Yoga teacher, and Astrologer. He is on the spiritual journey for nearly 20 years with experience <br/> of having participated in various yoga and meditation programs having learned diverse and effective techniques to assist relaxation.</p>
     </div> 
     <Dropdown/> 
     </>
  )
}

export default About