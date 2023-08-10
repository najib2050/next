"use client"
import Image from 'next/image';
import style from './page.module.css';
const Footer = () => {

  return (
    <div className={style.container}>
        <div>@2023 Najib, All right resrved</div>
        <div>
          <div className='imageContainer'></div>
          <Image src='/1.png' alt='' width={15} height={15}/>
          <Image src='/2.png' alt='' width={15} height={15}/>
          <Image src='/3.png' alt='' width={15} height={15}/>
          <Image src='/4.png' alt='' width={15} height={15}/>
    
        </div>
    </div>
  )
}

export default Footer