import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllFIlms, removeFilm, selectFilms, selectOpenState, toggleOpenState } from '../app/WatchLaterSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const WatchLater = () => {
  const openState = useSelector(selectOpenState);
  const films = useSelector(selectFilms);
  const dispatch = useDispatch();
  console.log(openState)
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/20 transition-all duration-300 backdrop-blur-md z-[300]
    ${openState ? 'opacity-100 visible translate-x-0' :
  'opacity-0 invisible translate-x-8'}
    `} onClick={() => dispatch(toggleOpenState({openState: false}))}>
        <div className='absolute bg-white dark:bg-slate-950 right-0 h-screen max-w-xl w-full text-black dark:text-white px-7 py-6'>
          <div className='w-full flex justify-between cursor-pointer'>
            <h1 className='text-2xl font-bold'>Watch later list</h1>
            <div className='flex gap-5'>
            <button className='text-xl font-bold' onClick={() => dispatch(deleteAllFIlms())}>Clear</button>
              <XMarkIcon className='w-8 h-8' onClick={() => dispatch(toggleOpenState({openState: false}))} />
            </div>
            </div>
            <div className='movies-grid px-7 py-5 lg:px-1 lg:py-5 overflow-y-scroll max-h-full scroll-smooth scroll-hidden' onClick={() => window.location.reload()}>
              {films?.map((movie, i) => 
              (
                <div className='relative'>
                  <div className='absolute top-2 right-2 cursor-pointer z-[500] bg-black p-0.5 rounded-[30px]' onClick={() => dispatch(removeFilm(movie))}><XMarkIcon className='w-8 h-8' /></div>
                  <Movie movie={movie} key={i} />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default WatchLater;