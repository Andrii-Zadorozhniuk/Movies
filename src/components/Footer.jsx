import React from 'react'
import bgFooter from '../assets/footer-bg.jpg'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
const Footer = () => {
  return (
    <div className='w-full h-[50vh] lg:h-[80vh] sm:h-[50vh] xsm:h-[70vh] text-white centered-flex flex-col gap-5' style={{backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.1), 
        rgba(0, 0, 0, 0.1)
      ), url(${bgFooter})` }}>
        <div className='flex items-center gap-2'>
            <PlayCircleIcon className='w-10 h-10 text-white' /> 
            <h1 className='text-4xl font-bold text-white sm:text-2xl'>tMovies</h1>
      </div>
      <div className='flex w-3/5 lg:w-4/5 justify-around pb-5 sm:grid sm:grid-cols-2 sm:items-center'>
        <ul className='flex flex-col text-white font-bold text-lg sm:text-sm gap-3 lg:gap-2 '>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Home</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Contact us</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Term of services</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>About us</li>
        </ul>
        <ul className='flex flex-col text-white font-bold text-lg sm:text-base gap-3 lg:gap-2 '>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Live</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>FAQ</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Premium</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Privacy policy</li>
        </ul>
        <ul className='flex flex-col text-white font-bold text-lg sm:text-base gap-3 lg:gap-2 '>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>You must watch</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Recent release</li>
            <li className='cursor-pointer hover:text-red-600 transitions-all duration-500'>Top IMDB</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer