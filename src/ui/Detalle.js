import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetail } from "../redux/actions"

function Detalle(props) {

    const dispatch = useDispatch();
    const details = useSelector((state) => state.detail);
    const id = props.match.params.id;    

    console.log(props)
          
    useEffect(() => {
      dispatch(getMovieDetail(id));
    }, [dispatch, id]);



  return (
    <div>
      {details.original_title} 

      hola  mundo 
    </div>
  )
}

export default Detalle
