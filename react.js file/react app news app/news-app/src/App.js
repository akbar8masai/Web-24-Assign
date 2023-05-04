
import './App.css';

// import React, { Component } from 'react'


import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App=()=>{
 const pageSize=15;
 const  Apikey=process.env.REACT_APP_NEWS_API
 
 const [Progress,setProgress]=useState(0)
 return (
     
  <div>
    <Router>
    <Navbar/>
    <LoadingBar
    height={3}
    color='#f11946'
    progress={Progress} 
  />
    <Switch>
    <Route  exact path="/"><News setProgress={setProgress} Apikey={Apikey} key="gen" pageSize={pageSize}  country="in" category="general" /></Route>
    <Route  exact path="/Business"><News setProgress={setProgress} Apikey={Apikey} key="business" pageSize={pageSize}  country="in" category="Business" /></Route>
    <Route exact path="/Entertainment"><News setProgress={setProgress} Apikey={Apikey}  key="entertainment" pageSize={pageSize}  country="in" category="Entertainment" /></Route>
    <Route exact path="/General"><News setProgress={setProgress} Apikey={Apikey} key="gen"  pageSize={pageSize}  country="in" category="General" /></Route>
    <Route  exact path="/Health"><News setProgress={setProgress} Apikey={Apikey} key="health" pageSize={pageSize}  country="in" category="Health" /></Route>       
    <Route  exact path="/Science"><News setProgress={setProgress} Apikey={Apikey} key="science" pageSize={pageSize}  country="in" category="Science" /></Route>
    <Route exact path="/Sports"><News setProgress={setProgress} Apikey={Apikey} key="sports" pageSize={pageSize}  country="in" category="Sports" /></Route>
    <Route  exact path="/Technology"><News setProgress={setProgress} Apikey={Apikey} key="tech" pageSize={pageSize}  country="in" category="Technology" /></Route>
    </Switch>
  </Router>
  </div>
)
}



export default App
// -------------------------------------------------------
// class based component 

// export default class App extends Component {
  // pageSize=15;
  // Apikey=ProcessingInstruction.env.REACT_APP_NEWS_API
  // c="john"
  // state={
  //   progress:0
  // }

  // setProgress=(progress)=>{
  //  {setState({progress:progress})
  //   }
  
//   render() {
//     return (
     
//       <div>
//         <Router>
//         {/* hello my first class component app {c} */}
//         {/* Also Exact to path match */}
//         <Navbar/>
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={state.Progress} Apikey={Apikey}
//       />
//         <Switch>
//         <Route  exact path="/"><News setProgress={setProgress} Apikey={Apikey} key="gen" pageSize={pageSize}  country="in" category="general" /></Route>
//         <Route  exact path="/Business"><News setProgress={setProgress} Apikey={Apikey} key="business" pageSize={pageSize}  country="in" category="Business" /></Route>
//         <Route exact path="/Entertainment"><News setProgress={setProgress} Apikey={Apikey}  key="entertainment" pageSize={pageSize}  country="in" category="Entertainment" /></Route>
//         <Route exact path="/General"><News setProgress={setProgress} Apikey={Apikey} key="gen"  pageSize={pageSize}  country="in" category="General" /></Route>
//         <Route  exact path="/Health"><News setProgress={setProgress} Apikey={Apikey} key="health" pageSize={pageSize}  country="in" category="Health" /></Route>       
//         <Route  exact path="/Science"><News setProgress={setProgress} Apikey={Apikey} key="science" pageSize={pageSize}  country="in" category="Science" /></Route>
//         <Route exact path="/Sports"><News setProgress={setProgress} Apikey={Apikey} key="sports" pageSize={pageSize}  country="in" category="Sports" /></Route>
//         <Route  exact path="/Technology"><News setProgress={setProgress} Apikey={Apikey} key="tech" pageSize={pageSize}  country="in" category="Technology" /></Route>
//         </Switch>
//       </Router>
//       </div>
    
//     )
//   }
// }


