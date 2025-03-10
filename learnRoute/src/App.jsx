import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, Router, Route, Routes} from "react-router-dom";
function App() {

  return (
   <>          
    <nav>
       <Link to="/">Home</Link>
     
       <Link to="/about">About</Link>
  
       <Link to="/contact">Contact</Link>
    
    </nav>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
      
  

    </>
  )
}

export default App;
