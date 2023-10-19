import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findById } from '../api/findById';
import Details from '../components/Details';
const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        findById(id, 'movie').then(data => {
            setMovie(data);
            console.log(data)
        })
        window.scrollTo(0, 0)
    }, [])
  return (
    <Details movie={movie} />
  )
}

export default MovieDetails