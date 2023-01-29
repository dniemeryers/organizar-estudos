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

 console.log(Inicio)

  return (
    <>

<Router>
     
     <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/Header" element={<Header/>}/>

     </Routes >
    </Router>
      
    </>
    );
  }

export default App;
