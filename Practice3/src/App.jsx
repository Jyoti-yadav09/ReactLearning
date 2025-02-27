import React from "react";
import {Router, Route, Link, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from "./component/Services";
 function App()
 {
   return(
    <>
      {<nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>}
        
          {/*Routes*/}
          <Routes>         
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/services" element={<Services/>}>

           <Route path="web" element={<h1>Web Services</h1>}/>

           </Route>
            </Routes>
            </>
   );


 }
  export default App;
