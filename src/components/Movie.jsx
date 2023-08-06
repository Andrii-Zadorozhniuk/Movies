import {PlayIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Movie = ({movie}) => {
    return (
        <Link to={`${movie.name ? `tv/${movie.id}` : `movie/${movie.id}`}`} className='w-full cursor-pointer'>
            <div className='relative overflow-hidden group'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className='rounded-[30px]' />
                <div className="absolute centered-flex rounded-[30px] top-[120%] left-0 right-0 bottom-0 bg-red-600/20 group-hover:top-0 transition-all duration-500">
                <PlayIcon className='w-14 h-14 text-white' />
            </div>
            </div>
            <h1 className='text-md font-bold w-full break-words'>{movie.name ? movie.name : movie.title}</h1>

        </Link>
    )
}
export default Movie;