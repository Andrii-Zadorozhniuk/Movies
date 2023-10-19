import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size';
import { useDispatch } from 'react-redux';
import {setNewFilm } from '../app/WatchLaterSlice';
import { trailerById } from '../api/trailerById';
import { getSimilarMovies } from '../api/similarMovies';
import MoviesList from './MoviesList';
const Details = ({movie}) => {
  const [trailerId, setTrailerId] = useState('');
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    if (window.location.pathname.includes('movie')) {
      trailerById(movie.id, 'movie').then(data => {
      if (data) setTrailerId(data[0]?.key);
    })
    getSimilarMovies(movie.id, 'movie').then(data => {
      if (data) setSimilarMovies(data)
    })
  } else {
    trailerById(movie.id, 'tv').then(data => {
      if (data) setTrailerId(data[0]?.key);
    })
    getSimilarMovies(movie.id, 'tv').then(data => {
      if (data) setSimilarMovies(data)
    })
    }
  }, [movie])
    const width = useWindowWidth();
    const dispatch = useDispatch();

  return (
    <div>
        <div className='w-full h-screen bg-cover bg-no-repeat bg-center sm:h-[45vh] xsm:h-[70vh] 2xsm:h-[90vh] centered-flex px-32 py-10 gap-10 lg:gap-7 flex-row-reverse md:px-7 md:py-8 !pt-20 xsm:py-6 xsm:px-6' style={{backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
      <div className='text-white w-2/3 flex flex-col gap-6 lg:w-full 2xl:w-[45%] sm:gap-5 transition-all duration-1000'>
        <h1 className='font-bold 2xl:text-8xl text-7xl lg:text-4xl'>{movie.name ? movie.name : movie.title}</h1>
        <div className='flex gap-5 sm:gap-3 2xsm:hidden'>
        {movie?.genres?.slice(0, 2).map((genre, i) => (
            <Link key={i} className='border-[1.5px] border-white px-5 py-1 rounded-full shadow-btn-white font-semibold text-base lg:text-sm active:scale-110 hover:text-red-600 hover:bg-white/60 transition-all duration-300 sm:text-[16px] sm:px-4 xsm:text-[12px]'>{genre.name}</Link>
        ))}
        </div>
        <p className='font-bold text-[0.8rem] lg:text-[0.7rem] 2xl:text-lg'>{width < 500 && movie?.overview?.length > 100 ? movie?.overview?.split('.',1).join('.') + '...' : movie.overview }</p>
        <div>
            <button className='bg-red-600 px-5 py-1 rounded-full font-semibold text-xl shadow-btn-red active:scale-110 hover:bg-red-800 transiton-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm centered-flex lg:text-sm' onClick={() => {
              dispatch(setNewFilm(movie))  
            }}>Watch later</button>
        </div>
      </div>
      <div className='w-1/3 2xl:w-1/4 lg:hidden'>
        <img className={`rounded-[30px] transition-all duration-1000`} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </div>
    </div>
          <div className='dark:bg-slate-950 dark:text-white 2xl:px-36 2xl:py-18 px-28 lg:px-12 py-14 md:px-5 md:py-5'>
            <h1 className='text-5xl font-bold mb-6' >Trailer</h1>
            <iframe src={`https://www.youtube.com/embed/${trailerId}`}  className='w-full h-[80vh] lg:h-[60vh] md:h-[30vh]'></iframe>
          </div>
          <div onClick={() => window.location.reload()} className='dark:bg-slate-950 dark:text-white py-10 px-7 md:py-5 md:px-1'>
            <MoviesList title="Similar" moviesList={similarMovies} />
          </div>
    </div>
  )
}

export default Details