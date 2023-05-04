// import React, { Component } from "react";

import React from 'react'


// export default class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, NewsUrl, author, date } = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               position: "absolute",
//               right: "0",
//             }}
//           >
           
              
//               <span className="badge rounded-pill bg-danger">
//                 {"source"}
//               </span>
          
//           </div>
//           <img
//             src={
//               imageUrl
//                 ? imageUrl
//                 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXXRlWVP2_HJCkJRBf84uqNeT0ha2Fkwr-cpIY7uLA&s"
//             }
//             className="card-img-top"
//             alt="Error"
//           />

//           <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text">
//               <small className="text-danger">
//                 By {author} on {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               rel="noreferrer"
//               href={NewsUrl}
//               target="_blank"
//               className="btn btn-sm btn-dark"
//             >
//               Read More...
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


const NewsItem =(props)=>{
  let { title, description, imageUrl, NewsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
         
            
            <span className="badge rounded-pill bg-danger">
              {"source"}
            </span>
        
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXXRlWVP2_HJCkJRBf84uqNeT0ha2Fkwr-cpIY7uLA&s"
          }
          className="card-img-top"
          alt="Error"
        />

        <div className="card-body">
        <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={NewsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewsItem