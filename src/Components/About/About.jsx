import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          
          <img
            className="md:h-80"
            src={AboutImg}
            alt="About Me"
          />

          <ul>
            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl leading-normal">
                  Frontend Developer
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  I build and optimize the user-facing parts of websites
                  using HTML, CSS, and JavaScript.
                </p>
              </span>
            </li>

            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl leading-normal">
                  Software Testing
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  Identify and fix bugs, perform unit and integration 
                  testing, and ensure software quality.
                </p>
              </span>
            </li>

            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl leading-normal">
                  Backend Developer
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  I develop server-side applications and APIs using
                  technologies such as PHP and Laravel.
                </p>
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default About;










/*import React from 'react';
import AboutImg from "../../assets/7358653-removebg-preview.png";
import {IoArrowForward} from "react-icons/io5";
 
const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
          <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
          <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
              <img className='md:h-80' src={AboutImg} alt="About Me"/> 
              <ul>
                  <div className='flex gap-3 py-4'>
                      <IoArrowForward size={30} className='mt-1'/>
                      <span className='w-96'>
                          <h1 className='text-xl md:text-2xl leading-normal'>
                              Frontend Developer
                          </h1>
                          <p className=' text-sm md:text-md leading-tight '> 
                              I Bulid and optimize the user-facing parts of the websites using, html,css and Jaavascript 
                          </p>
                      </span>
                  </div>
                  <div className='flex gap-3 py-4'>
                      <IoArrowForward size={30} className='mt-1'/>
                      <span className='w-96'>
                          <h1 className='text-xl md:text-2xl leading-normal'>
                              Frontend Developer
                          </h1>
                          <p className=' text-sm md:text-md leading-tight '> 
                              I Bulid and optimize the user-facing parts of the websites using, html,css and Jaavascript 
                          </p>
                      </span>
                  </div>
                  <div className='flex gap-3 py-4'>
                      <IoArrowForward size={30} className='mt-1'/>
                      <span className='w-96'>
                          <h1 className='text-xl md:text-2xl leading-normal'>
                              Backend Developer
                          </h1>
                          <p className=' text-sm md:text-md leading-tight '> 
                              I Bulid and optimize the user-facing parts of the websites using, html,css and Jaavascript 
                          </p>
                      </span>
                  </div>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default About;*/

