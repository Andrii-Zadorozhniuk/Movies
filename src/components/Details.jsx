import React from 'react'
import { Link } from 'react-router-dom'
const Details = ({movie}) => {
  return (
    <div>
        <div className='w-full h-screen bg-cover bg-no-repeat bg-center sm:h-[60vh] centered-flex px-32 py-10 gap-10 flex-row-reverse md:px-7 md:py-8 !pt-20 xsm:py-6 xsm:px-6' style={{backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
      <div className='text-white w-2/3 flex flex-col gap-10 lg:w-full 2xl:w-[45%] xsm:gap-5 transition-all duration-1000 sm:gap-7'>
        <h1 className='font-bold 2xl:text-8xl text-7xl xl:text-5xl sm:text-4xl xsm:text-2xl'>{movie.name ? movie.name : movie.title}</h1>
        <p className='font-bold text-md sm:text-[0.7rem] xsm:text-[0.5rem] 2xl:text-lg'>{movie.overview}</p>
        <div className='flex gap-5 sm:gap-3 sm:hidden'>
        {movie?.genres?.slice(0,3).map((genre, i) => (
            <Link key={i} className='border-[1.5px] border-white px-5 py-1 rounded-full shadow-btn-white font-semibold text-md active:scale-110 hover:text-red-600 hover:bg-white/60 transition-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm'>{genre.name}</Link>
        ))}
        </div>
        <div>
            <button className='bg-red-600 px-5 py-1 rounded-full font-semibold text-xl shadow-btn-red active:scale-110 hover:bg-red-800 transiton-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm'>Watch later</button>
        </div>
      </div>
      <div className='w-1/3 lg:hidden'>
        <img className={`rounded-[30px] transition-all duration-1000`} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </div>
    </div>
    </div>
  )
}

export default Details