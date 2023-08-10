import Image from "next/image";
import style from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/component/button/Button";


export default function Home(){
  return(
    <div className={style.container}>
      <div className={style.item}>
      <h1 className={style.title}>
          Better design for your digital products.
        </h1>
        <p className={style.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/Portfolio" text="See our work"/>
      </div>
      <div className={style.item}>
      <Image src={Hero} alt="" className={style.img}/>

      </div>
    </div>
  )

}