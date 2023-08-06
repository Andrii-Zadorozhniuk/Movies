import React from 'react'
import { useState, useEffect } from 'react';
import {PlayCircleIcon} from '@heroicons/react/24/solid'
import { Link, useLocation } from 'react-router-dom';
import {ClockIcon} from '@heroicons/react/24/outline'
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const location = useLocation();
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark"); 
      } else {
        document.documentElement.classList.remove("dark"); 
      }
      localStorage.setItem('theme', theme);
    }, [theme])
    const switchTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  return (
    <div className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4  transition-all duration-300 ${scrollPosition > 0 && 'bg-black/50'}`}> 
      <div className='flex items-center gap-2'>
        <PlayCircleIcon className='w-10 h-10 text-white' /> 
        <h1 className='text-4xl font-bold text-white sm:text-2xl'>tMovies</h1>
      </div>
        <ul className='flex items-center gap-8 text-white font-bold text-xl md:fixed md:bg-slate-900 md:bottom-0 md:right-0 md:left-0 md:px-20 sm:px-7 md:py-2 md:justify-between sm:text-[1rem]'>
          <Link to='/' className={`link ${location.pathname === '/' ? "link-location" : "not-link-location"}`}>Home</Link>
          <Link to='/movies' className={`link ${location.pathname === '/movies' ? "link-location" : "not-link-location"}`}>Movies</Link>
          <Link to='/tvshows' className={`link ${location.pathname === '/tvshows' ? "link-location" : "not-link-location"}`}>TV Shows</Link>
          <div className='md:fixed md:right-5 md:top-[1.7rem] flex items-center gap-3'>
          <label className="ui-switch">
          <input type="checkbox" defaultChecked={theme === 'dark' ? true : false} onChange={switchTheme} />
          <div className="slider">
          <div className="circle"></div>
          </div>
          </label>
          <div className='w-8 h-8 relative cursor-pointer'><ClockIcon />
          <div className='bg-red-600 text-white rounded-full flex items-center justify-center text-sm -top-1.5 -right-2.5 absolute px-1.5'>9+</div>
          </div>

          </div>
        </ul>
    </div>
  )
}

export default Navbar