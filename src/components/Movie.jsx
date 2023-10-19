import {PlayIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Movie = ({movie}) => {

    return (
        <div className='w-full h-full'>
        <Link to={`${movie.name ? `/tv/${movie.id}` : `/movie/${movie.id}`}`} className='cursor-pointer max-h-[280px]'>
            <div className='relative group mb-3 h-[83%] overflow-hidden'>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg` } className='rounded-[30px] w-full h-full object-cover' />
                <div className="absolute centered-flex rounded-[30px] top-[120%] left-0 right-0 bottom-0 bg-red-600/20 group-hover:top-0 transition-all duration-300">
                <PlayIcon className='w-14 h-14 text-white' />
            </div>
            </div>
            <h1 className='text-md font-bold'>{movie.name ? movie.name : movie.title}</h1>

        </Link>
        </div>
    )
}
export default Movie;