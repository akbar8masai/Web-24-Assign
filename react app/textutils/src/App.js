//import logo from './logo.svg';
//Note: class to change className & clsoing tag to all, href="#" to convert href="/"  by ctrl+f to change 

//Also getbootstrap.com through which we get all type of css framework by bootstrap => doc details will give all types of components
import './App.css';

import PropTypes from 'prop-types'  //impt for shortcut


import Navbar from "./components/Navbar";

import Textform from './components/Textform';

//import About from './components/About';

function App() {
  return (
    <>
   
   <Navbar title="TextUtils" About="About Us"/>
   <div className="container">
   <Textform heading="Enter the text to analyze below"/>
  
   {/* <About/> */}
   
   </div>
   
    </>
  );
}

export default App;

//prototype visit react proptype pts for proptype for string it means use string only

//use for debugging error in code write string,array,object => strict method only
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About:PropTypes.string.isRequired,
}


//for default value to navbar line16
Navbar.defaultProps = {
 title:"enter title",
 About:"enter text here"
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   About:PropTypes.string,
// }   isRequired means necessary to use string in line16 without Default