import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

function Card({id, title}) {

  return (
    <div> 
    <div  >
        <h1 className='ssss'>{id}</h1> 
        <h3>{title}</h3>
        <Link to={`/detalle/${id}`}>
      
        
        <button>hola</button>

        </Link>
    </div>
   

          
      </div>
  )
}

export default Card
