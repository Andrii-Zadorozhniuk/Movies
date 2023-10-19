import React, { useEffect, useState } from 'react'
import { allMovies } from '../api/allMovies'
import Movie from '../components/Movie';
import { allTVShows } from '../api/allTVShows';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import bgFooter from '../assets/footer-bg.jpg'
import { searchMovies } from '../api/searchMovies';
import { searchTVShows } from '../api/searchTVShows';
const Movies = () => {
    const [page, setPage] = useState(1);
    const [moviesList, setMoviesList] = useState([]);
    const [query, setQuery] = useState('');
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(location.pathname == '/movies') {
            if(page == 1) {
                allMovies(page).then(data => {
                    setMoviesList(data);
                })
            } else {
            allMovies(page).then(data => {
            setMoviesList([...moviesList, ...data]);
        }) } } else if (location.pathname == '/tvshows') {
            if (page == 1) {
                allTVShows(page).then(data => {
                    setMoviesList(data);
                })
            } else {
            allTVShows(page).then(data => {
                setMoviesList([...moviesList, ...data]);
            }) }
        }
        else if (location.pathname.includes(`/movies/search`)) {
            searchMovies(params.query).then(data => {
                setMoviesList(data);
                console.log(data)
            })
        }
        else if (location.pathname.includes(`/tvshows/search`)) {
            searchTVShows(params.query).then(data => {
                setMoviesList(data);
                console.log(data)
            })
        }
    }, [page, location.pathname]);
    useEffect(() => {
        setPage(1)
        window.scrollTo(0, 0)
    }, [location.pathname])

  return (
    <>
    <div className='w-full h-[45vh] lg:h-[35vh] text-white centered-flex flex-col gap-5 text-5xl font-bold' style={{backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.1), 
        rgba(0, 0, 0, 0.1)
      ), url(${bgFooter})` }}>{location.pathname === '/movies' ? "Movies" : "TV Shows"}</div>
    <div className='dark:bg-slate-950 bg-white pt-24 2xl:px-24 px-10 sm:px-6 2xsm:px-10 pb-10 dark:text-white'>
        <div className='flex mb-6 gap-3 px-5 py-3 lg:px-1 w-full'>
            <input className='border-[3px] border-slate-800 border-solid rounded-[30px] dark:bg-slate-950 bg-white px-3 py-0.9 text-lg sm:w-2/3 focus:outline-none' placeholder='Enter keyword' type='search' onChange={e => {
                setQuery(e.target.value)
            }} onKeyPress={e => {
                if (e.key === 'Enter') {
                    navigate(query && `${location.pathname.includes('/movies') ? '/movies' : '/tvshows'}/search/${query}`)
                  }
            }} />
            <Link to={query && `${location.pathname.includes('/movies') ? '/movies' : '/tvshows'}/search/${query}`} className='bg-red-600 px-6 py-0.9 rounded-full font-semibold text-lg shadow-btn-red active:scale-110 hover:bg-red-800 transiton-all duration-300 sm:text-[16px] sm:px-4 xsm:text-sm centered-flex text-center sm:w-1/3 text-white'>Search</Link>
        </div>
        <div className='movies-grid px-5 py-3 lg:px-1'>
        {/* grid 2xl:grid-cols-8 grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 2xsm:grid-cols-1 gap-5 gap-y-10 sm:gap-y-12 */}
        {moviesList.map((movie, i) => (
            <Movie movie={movie} key={i} />
        ))}</div>
        <div className='centered-flex'>
            <button className={`border-[1.5px] dark:border-white px-5 py-1 rounded-full font-semibold text-md active:scale-110 hover:text-red-600 hover:bg-black/20 dark:hover:bg-white/60 transition-all duration-300 sm:text-[16px] sm:px-4 border-black shadow-[0_0_3px_2px_#2727279d] dark:shadow-[0_0_3px_2px_#ffffff9d] mt-12 ${location.pathname.includes('/search') && 'hidden'}`} onClick={() => setPage(page+1)}>Load more</button>
        </div>
    </div>
    </>
  )
}

export default Movies