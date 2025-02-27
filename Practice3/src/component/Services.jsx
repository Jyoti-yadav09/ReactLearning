import React from "react";
 import {Link, Outlet} from "react-router-dom";
 function Services()
 {
     return (
        <>
         <h1>This is the Services Page</h1>
         <nav>
            <Link to="web">Web Services</Link>
         </nav>
         <Outlet/>
        
        </>
     );
 }
  export default Services;