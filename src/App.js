import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Header} from './introducao/Header/index.jsx'
import {Body} from './introducao/Body/index.jsx'
import {Inicio} from './introducao/inicio/index.jsx'
import { useState } from "react";


function App() {

  const inicio = Inicio()

  function inicio([nome,curso,semestre]){
    inicio()
  }
 
console.log()
  return (
    <>

<Router>
     
     <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio  />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/Header" element={<Header nome={inicio.nome} curso={inicio.curso} semestre={inicio.semestre} />}/>

     </Routes >
    </Router>
      
    </>
    );
  }

export default App;
