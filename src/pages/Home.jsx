import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; //npm install swiper
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/autoplay";

import { useEffect } from 'react';
import { topRatedMovies } from '../api/topRatedMovies';
import MoviesList from '../components/MoviesList';
import { topRatedTV } from '../api/topRatedTV';
import { upcoming } from '../api/upcoming';
import { nowPlaying } from '../api/nowPlaying';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import { trailerById } from '../api/trailerById';

import { XMarkIcon } from '@heroicons/react/24/solid';
const Home = () => {
  const [topRatedFilms, setTopRatedFilms] = useState([]);
  const [topRatedTVies, setTopRatedTVies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [openTrailer, setOpenTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState('');
  useEffect(() => {
    topRatedMovies().then(data => {
      setTopRatedFilms(data);
    })
    topRatedTV().then(data => {
      setTopRatedTVies(data)
  })
  upcoming().then(data => {
    setUpcomingMovies(data);
  })
  nowPlaying().then(data => {
    setNowPlayingMovies(data);
  })
  window.scrollTo(0, 0);
  }, [])

  return (
    <div>
     <Swiper
    modules={[Autoplay]}
    autoplay={{delay: 3000}}
    loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
        {topRatedFilms.map((movie, i) => (
          <SwiperSlide key={i}>
            {({isActive}) => (
            <Slide movie={movie} isActive={isActive} setOpenTrailer={setOpenTrailer} setTrailerId={setTrailerId}/>
)}
          </SwiperSlide>
        ))}

    </Swiper> 
    <div className='dark:bg-slate-950 bg-white dark:text-white py-7'>
          <MoviesList title='Now playing movies' moviesList={nowPlayingMovies} />
          <MoviesList title='Top rated TV' moviesList={topRatedTVies} />
          <MoviesList title="Top rated movies" moviesList={topRatedFilms} />
          <MoviesList title='Upcoming movies' moviesList={upcomingMovies} /></div>
          {openTrailer && <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-30 text-white centered-flex flex-col'>
          <div className='flex justify-end w-1/2 xl:w-2/3 lg:w-[70%] md:w-[70%] sm:w-4/5'><XMarkIcon onClick={() => {setOpenTrailer(false); document.body.style.overflow = 'auto'}} className='w-10 h-10'/></div>
        <iframe src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-1/2 h-3/5 xl:w-2/3 xl:h-3/5 lg:w-[70%] lg:h-2/5 md:w-[70%] sm:w-4/5 sm:h-[27%]'></iframe>
      </div>}
    </div>

  )
}
const Slide = ({movie, isActive, setOpenTrailer, setTrailerId}) => {
  const width = useWindowWidth();
  const getTrailerId = (id) => {
    trailerById(movie.id, 'movie').then(data => {
      setTrailerId(data[0].key)
    })
    setOpenTrailer(true);
    document.body.style.overflow = 'hidden';
  }
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat bg-center sm:h-[45vh] xsm:h-[70vh] centered-flex px-32 py-10 gap-10 lg:gap-7 md:px-7 md:py-8 !pt-20 xsm:py-6 xsm:px-6 2xsm:h-[90vh]' style={{backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
      <div className={`text-white w-2/3 flex flex-col gap-10 lg:w-full 2xl:w-[45%] sm:gap-5 transition-all duration-1000 scale-0 ${isActive && 'scale-100'}`}>
        <h1 className='font-bold 2xl:text-8xl text-7xl lg:text-4xl'>{movie.title}</h1>
        <p className='font-bold text-base lg:text-sm 2xl:text-lg'>{width < 500 && movie?.overview?.length > 100 ? movie.overview.split('.',1).join('.') + '.' : movie.overview }</p>
        <div className='flex gap-4'>
          <Link to={`/movie/${movie.id}`} className='bg-red-600 px-5 py-1 rounded-full font-semibold text-xl shadow-btn-red active:scale-110 hover:bg-red-800 transiton-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm centered-flex text-center'>Watch now</Link>
          <button className='border-[1.5px] border-white px-5 py-1 rounded-full shadow-btn-white font-semibold text-xl active:scale-110 hover:text-red-600 hover:bg-white/60 transition-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm text-center' onClick={getTrailerId}>Watch trailer</button>
        </div>
      </div>
      <div className='w-1/3 2xl:w-1/4 lg:hidden'>
        <img className={`rounded-[30px] transition-all duration-1000 scale-0 ${isActive && 'scale-100'}`} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </div>
    </div>
  )
}

export default Home