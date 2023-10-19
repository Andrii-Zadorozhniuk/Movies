import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; //npm install swiper
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/autoplay";
import Movie from './Movie';
import { Link } from 'react-router-dom';
const MoviesList = ({title, moviesList}) => {
  return (
    <div>
                <div className='px-10 py-5 2xl:px-28 sm:px-5'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-3xl font-bold sm:text-xl'>{title}</h1>
                <Link to={moviesList[0]?.title ? '/movies' : '/tvshows'} className='border-[1.5px] dark:border-white px-5 py-1 rounded-full font-semibold text-md active:scale-110 hover:text-red-600 hover:bg-black/20 dark:hover:bg-white/60 transition-all duration-300 sm:text-[16px] sm:px-4 border-black shadow-[0_0_3px_2px_#2727279d] dark:shadow-[0_0_3px_2px_#ffffff9d]'>View more</Link>
            </div>
            <Swiper
    modules={[Autoplay]}
    autoplay={{delay: 3000}}
    loop={true}
      spaceBetween={15}
      slidesPerView={'auto'}
    >
                {moviesList.map((movie, i) => (
                    <SwiperSlide key={i} className='2xl:!w-[10%] !w-[15%] xl:!w-[20%] md:!w-[30%] sm:!w-[40%]'>
                        <Movie movie={movie}  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default MoviesList