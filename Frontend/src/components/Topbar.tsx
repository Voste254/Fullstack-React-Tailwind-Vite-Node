import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Topbar() {
  const [data,setData]=useState('')

  const getData= async()=>{
    const response= await axios.get("/api/getData");
    setData(response.data)
  }
  useEffect(()=>{getData()},[])

  return (
    <div className="relative w-3/5 m-auto rounded-md shadow-md overflow-hidden text-center">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/g2ffPxs/Lush-green-rainforest-canopy-creating-stunning.jpg")',
        }}
      ></div>
      <div className="relative z-10 text-white text-6xl font-bold py-8">
        {data}
      </div>
    </div>
  );
}
