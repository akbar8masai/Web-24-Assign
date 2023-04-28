//import logo from './logo.svg';
//Note: class to change className & clsoing tag to all, href="#" to convert href="/"  by ctrl+f to change 

//Also getbootstrap.com through which we get all type of css framework by bootstrap => doc details will give all types of components
import './App.css';

import PropTypes from 'prop-types'
  //impt for shortcut


import Navbar from "./components/Navbar";

import Textform from './components/Textform';

 import About from './components/About';
import React,{useState} from 'react'

import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [mode,setmode] =useState("light")

  const [alert,setalert]=useState(null)

  const showAlert=(message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
       showAlert(null)
     }, 3000);
  }
  const removeBodyclasses=()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-secondary")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
  }

  const toggleMode=(cls)=>{
    removeBodyclasses()
    console.log(cls)
    document.body.classList.add("bg-"+cls)
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="grey"
      showAlert("success:This is dark mode")
      // document.title="TextUtils-dark mode"
    }else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("success:This is light mode")
      // document.title="TextUtils-light mode"
    }
  }

   
   // for navbar change set mode both in navbar 5 line with props and bagtix
  return (
    <>
     <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  About="About Us"/>
   <Alert  alert={alert} />
   <div className="container">
     <Switch>
          <Route exact path="/About"> 
            {/* use exact for path always  {/user--> component 1} {/user/home---> component 2} */}
            <About />
          </Route>
          <Route exact path="/"> 
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
         </Switch>
          </div>
       </Router> 
     
   {/* <About/> */}
    

   
   
  
   
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