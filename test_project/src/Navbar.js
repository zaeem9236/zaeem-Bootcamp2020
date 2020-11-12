import React from 'react';
import { Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';


function Navbar() {

  return (
    <React.Fragment>
         <Link to="/"><button>Home</button></Link>
         <Link to="/about"><button>About</button></Link>
         <Link to="/contact"><button>Contact</button></Link>
    </React.Fragment>
  );

}
export default Navbar;
