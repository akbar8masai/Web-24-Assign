import React from 'react'

// for class based component {component} ,in react import

import {Link}  from "react-router-dom";

// export default class Navbar extends Component {
 
//   render() {
//     return (
//         <>
//         <div className='container'>
//           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">NewsZebra</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
//           </li>
//             <Link className="nav-link" to="/Business">Business</Link>
//             <Link className="nav-link" to="/Entertainment">Entertainment</Link>
//             <Link className="nav-link" to="/General">General</Link>
//             <Link className="nav-link" to="/Health">Health</Link>
//             <Link className="nav-link" to="/Science">Science</Link>
//             <Link className="nav-link" to="/Sports">Sports</Link>
//             <Link className="nav-link" to="/Technology">Technology</Link>
//         </ul>
       
//       </div>
//     </div>
//   </nav>
//         </div>
//       </>
//     )
//   }
// }

// --------------------------------------------------------------------------
// function based component for refactor

const Navbar=()=>{
  return (
    <>
    <div className='container'>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
<div className="container-fluid">
  <a className="navbar-brand" href="/">NewsZebra</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
      </li>
        <Link className="nav-link" to="/Business">Business</Link>
        <Link className="nav-link" to="/Entertainment">Entertainment</Link>
        <Link className="nav-link" to="/General">General</Link>
        <Link className="nav-link" to="/Health">Health</Link>
        <Link className="nav-link" to="/Science">Science</Link>
        <Link className="nav-link" to="/Sports">Sports</Link>
        <Link className="nav-link" to="/Technology">Technology</Link>
    </ul>
   
  </div>
</div>
</nav>
    </div>
  </>
 )
}
export default Navbar
