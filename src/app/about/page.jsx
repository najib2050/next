import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Button from '@/component/button/Button'
import photo from 'public/photo.jpg'
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgeContainer}>
        <Image

          src={photo}
          
          alt=""
          fill={true}
        />
        <div className={style.imgText}>
          <h1 className={style.imgeTitle}>Digital storytellers</h1>
          <h2 className={style.imgDesc}>tyweruyuw yyuuruwe uiuuueiui uiuiuuiu uuiuiuiwe n</h2>

        </div>
      </div>

      <div className={style.textContainer}>
        <div className={style.item}>
        <h1>who are we?</h1>
        <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}>What We Do?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
     
    </div>
  )
}

export default About