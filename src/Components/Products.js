import React from "react";
import classes from "./Products.module.css";

function Products() {
  return (
    <>
      <div className={classes.about}>
   <p className={classes.about1}>ABOUT US</p>
   <p className={classes.about2}>We are passionate about meditation, yoga, and relaxation. Our work involves innovation-led manufacturing of an eccentric range of products that facilitate ease in practicing yoga and meditation techniques for beginners as well as experts.</p>
   </div> 
      <h3 className={classes.ourproducts}> Our Products </h3>
      <section className={classes.Products}>
        <div>
          <p className={classes.para}>
            Backless Yoga Chair <br /> for Holding, Alignment, Flexibility
          </p>
          <p className={classes.p2}>
            {" "}
            " It helps to perform asanas which are difficult of perform
            independently .The backless chair is an effective prop to make many
            poses safer and more accessible "
          </p>
        </div>
        <div>
          <video
            width="100%"
            height="100%"
            loop
            muted
            autoPlay="autoplay"
            className={classes.prod1}
            src={require("./ImgVidfiles/chair.mp4")}
            type="video/mp4"
          />
        </div>
        <div>
          <video
            width="100%"
            height="100%"
            loop
            muted
            autoPlay="autoplay"
            className={classes.prod2}
            src={require("./ImgVidfiles/mask.mp4")}
            type="video/mp4"
          />
        </div>
        <div>
          {" "}
          <p className={classes.para2}>
            {" "}
            Mulberry Silk Eye Mask <br /> Super Smooth Sleep Mask and Blind Fold
          </p>
          <p className={classes.p1}>
            {" "}
            " The silk sleep mask reduces facial stress, wrinkles, aging, eye
            bags, puffiness, and under-eye darkening to make you look more
            youthful. "{" "}
          </p>
        </div>
        <div>
          <p className={classes.para3}>
            {" "}
            Friends of Meditation Yoga Mat Bag <br />
            Gym Carrier Bag with Pockets and Adjustable Strap
          </p>{" "}
          <p className={classes.p2}>
            {" "}
            "  yoga mat bags are made of premium quality cotton and reinforced stitching lining, durable & water-resistant. Smooth and sturdy zippers are designed for long-term use and makes easy to insert and pull out the yoga mat easily. "
          </p>
        </div>
        <div>
          <div>
            <video
              width="100%"
              height="100%"
              loop
              muted
              autoPlay="autoplay"
              className={classes.prod3}
              src={require("./ImgVidfiles/bottle.mp4")}
              type="video/mp4"
            />
          </div>
        </div>
        <div>
          <div>
            <video
              width="100%"
              height="100%"
              loop
              muted
              autoPlay="autoplay"
              className={classes.prod4}
              src={require("./ImgVidfiles/belt.mp4")}
              type="video/mp4"
            />
          </div>
        </div>
        <div>
          <p className={classes.para2}>
            {" "}
            Yoga Belt Best for Daily Stretching <br /> Yoga, Pilates, Physical
            Therapy, Fitness{" "}
          </p>
          <p className={classes.p1}>
            {" "}
            "  This strap is made of high quality thick and reinforced cotton and has an adjustable metal buckle .
            Sustain proper form in poses for longer time, holding posture will become easier, whether you are beginner, advanced or pro, men or women "
          </p>
        </div>
      </section>
      <section className={classes.Products2}>
        <div>
          <p className={classes.para}>
            Backless Yoga Chair <br /> for Holding, Alignment, Flexibility
          </p>
          <p className={classes.p2}>
            {" "}
            " It helps to perform asanas which are difficult of perform
            independently .The backless chair is an effective prop to make many
            poses safer and more accessible "
          </p>
        </div>
        <div>
          <video
            width="100%"
            height="100%"
            loop
            muted
            autoPlay="autoplay"
            className={classes.prod1}
            src={require("./ImgVidfiles/chair.mp4")}
            type="video/mp4"
          />
        </div>
        <div>
          {" "}
          <p className={classes.para2}>
            {" "}
            Mulberry Silk Eye Mask <br /> Super Smooth Sleep Mask and Blind Fold
          </p>
          <p className={classes.p1}>
            {" "}
            " The silk sleep mask reduces facial stress, wrinkles, aging, eye
            bags, puffiness, and under-eye darkening to make you look more
            youthful. "{" "}
          </p>
        </div>
        <div>
          <video
            width="100%"
            height="100%"
            loop
            muted
            autoPlay="autoplay"
            className={classes.prod2}
            src={require("./ImgVidfiles/mask.mp4")}
            type="video/mp4"
          />
        </div>
        <div>
          <p className={classes.para3}>
            {" "}
            Friends of Meditation Yoga Mat Bag <br />
            Gym Carrier Bag with Pockets and Adjustable Strap
          </p>{" "}
          <p className={classes.p2}>
            {" "}
            "  yoga mat bags are made of premium quality cotton and reinforced stitching lining, durable & water-resistant. Smooth and sturdy zippers are designed for long-term use and makes easy to insert and pull out the yoga mat easily. "
          </p>
        </div>
        <div>
            <video
              width="100%"
              height="100%"
              loop
              muted
              autoPlay="autoplay"
              className={classes.prod3}
              src={require("./ImgVidfiles/bottle.mp4")}
              type="video/mp4"
            />
        </div>
        <div>
          <div>
          <p className={classes.para2}>
            {" "}
            Yoga Belt Best for Daily Stretching <br /> Yoga, Pilates, Physical
            Therapy, Fitness{" "}
          </p>
          <p className={classes.p1}>
            {" "}
            "  This strap is made of high quality thick and reinforced cotton and has an adjustable metal buckle .
            Sustain proper form in poses for longer time, holding posture will become easier, whether you are beginner, advanced or pro, men or women "
          </p>
        </div>
        <div>
            <video
              width="100%"
              height="100%"
              loop
              muted
              autoPlay="autoplay"
              className={classes.prod4}
              src={require("./ImgVidfiles/belt.mp4")}
              type="video/mp4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
