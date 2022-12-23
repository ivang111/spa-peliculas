import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPopularity } from "../redux/actions"
import Card from './Card';

function Home() {

  const dispatch = useDispatch();
  const popular = useSelector((state) => state.allPopularuty);
  const peliculas = popular.results
      
  useEffect(() => {
    dispatch(getAllPopularity());
  }, [dispatch]);

  // console.log("home", popular.results.map(d => d.id))

  return (
    <div>
       {peliculas?.map(d => <Card
        id={d.id}
        title={d.original_title}
       />)}
    </div>
  )
}

export default Home
