import React from 'react';
import avatarImg from "../../assets/7358602-removebg-preview.png";
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'> Welcome to Khama's Portfolio </ h1>
            <p className='text-sm md:text-2xl tracking-tight'> A Software developer</p>
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        
        </div>
        <img className='h-80' src={avatarImg} alt=""/>
    </div>
  )
}

export default Home;