import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { findById } from '../api/findById';
import Details from '../components/Details';
const TVDetails = () => {
    const {id} = useParams();
    const [tv, setTv] = useState([]);
    useEffect(() => {
        findById(id, 'tv').then(data => {
            setTv(data);
            console.log(data)
        })
    }, [])
  return (
    <Details movie={tv} />
  )
}

export default TVDetails