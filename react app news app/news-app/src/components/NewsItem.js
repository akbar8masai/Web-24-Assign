import React, { Component } from 'react'

export default class NewsItem extends Component {
 

  render() {
    let {title,description,imageUrl,NewsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
                            <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXXRlWVP2_HJCkJRBf84uqNeT0ha2Fkwr-cpIY7uLA&s"} className="card-img-top" alt="Error"/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <a rel='noreferrer' href={NewsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
                            </div>
                            </div>
      </div>
    )
  }
}
