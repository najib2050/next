"use client"

// import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import useSWR from 'swr';
const Dashboard = () => {
  // const [data,setData]=useState([]);
  // const [isLoading,setIsloading]=useState(false);
  // const [error,setError]=useState(false);
  
  // useEffect(()=>{
  //   async function getData() {
  //     setIsloading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     if (!res.ok) {
  //       setError(true)
  //     }
  //     const data=await res.json()
      
  //      setData(data)
  //      setIsloading(false)
  //   }
  //   getData()
  // },[]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data)
  return (
    <div className={style.container}>dashboard</div>
  )
}

export default Dashboard