"use client"

import React from 'react'

import style from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'

const photo = "https://images.unsplash.com/photo-1687246493079-1361abc6d875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.Category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="see more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src={photo}
          fill={true}
            alt='' />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="see more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src={photo}
            fill={true}
            alt='' />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="see more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src={photo}
          fill={true}
            alt='' />
        </div>
      </div>
    </div>
  )
}

export default Category