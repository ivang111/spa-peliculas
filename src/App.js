import React from 'react';
import { Route } from "react-router-dom";
import Home from './ui/Home';
import About from './ui/About';
import Detalle from './ui/Detalle';

function App() {
  return (
    <div className='contenedor'>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/detalle/:id" exact component={Detalle} />
    </div>
  )
}

export default App

