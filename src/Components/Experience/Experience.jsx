import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import {SiRedis} from "react-icons/si";
import { SiLaravel} from 'react-icons/si';
import { SiPostgresql} from 'react-icons/si';

const Experience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24'> 
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-18'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaHtml5 color='#E34F26' size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiLaravel color='#4285F4'size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaCss3 color='#1572b6' size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaReact color='#61DAFB' size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaJs color='#F7DF1E' size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiPostgresql color='#47A248' size={50}/>
                </span>
            </div>
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg items-center bg-center'>
                <span className='text-white'>
                    <h2 className='leading-tight'>Intern at MindStorm pty ltd</h2>
                    <p className='text-sm leading-tight font-thin'>
                        oct 2026 - present
                    </p>
                    <ul className='text-sm p-2'>
                        <li>work as software developer</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Experience