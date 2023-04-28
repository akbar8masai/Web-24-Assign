import React, { Component } from 'react'

import NewsItem from './NewsItem'
export default class News extends Component {
    // articles= [
    //     {
    //     "source": {
    //     "id": "bbc-sport",
    //     "name": "BBC Sport"
    //     },
    //     "author": null,
    //     "title": "What happened after McGrath stood on the ball?",
    //     "description": "Glenn McGrath's freak injury before the second Test of 2005 is etched into Ashes lore, but standing on a stray cricket ball was only the beginning of the story.",
    //     "url": "http://www.bbc.co.uk/sport/cricket/65391885",
    //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18434/production/_129508399_mcgrath.png",
    //     "publishedAt": "2023-04-27T08:37:17.1040427Z",
    //     "content": "From the Ashes is a new series of features and podcasts which dig deeper into tales of pain, despair and sometimes triumph in cricket's fiercest and most storied Test series.\r\nGlenn McGrath's mis-pla… [+7857 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //     "publishedAt": "2020-04-27T11:41:47Z",
    //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //     "publishedAt": "2020-03-30T15:26:05Z",
    //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    //     ]
    constructor(){
        super()
        console.log("this is constructor component from news" )
        this.state={
                //  articles:this.articles,
                articles:[],
                //  refer : react.js state and lifecycle
                 loading:false
              }
        }

       async componentDidMount(){
           let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8"
          let data =await fetch(url)
          let parsedData =await data.json()
         // console.log(parsedData)
           this.setState({articles : parsedData.articles})
       }
       handleNextclick=async()=>{
        //   console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8&page=${this.state.page+1}`
        let data =await fetch(url)
        let parsedData =await data.json()
        this.setState({
            page: this.state.page + 1,
            articles : parsedData.articles
        })
       }
       handlePrevclick=async()=>{
        // console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8&page=${this.state.page-1}`
        let data =await fetch(url)
        let parsedData =await data.json()
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles
        })
       }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsZebra-Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((el)=>{
               return <div className="col-md-4" key={el.url}>
                  {/* col-md-4 = column medium devices form 12 column means 4*3 in set  */}
              <NewsItem title={el.title?el.title.slice(0,45):""} description={el.description?el.description.slice(0,88):""} imageUrl={el.urlToImage?el.urlToImage:""} NewsUrl={el.url}/>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark " onClick={this.handlePrevclick}> &larr; Previous</button>
        <button type="button" class="btn btn-dark " onClick={this.handleNextclick}>Next &rarr; </button>
        {/* //html arrow for refer */}
        </div>
       </div>
    )
  }
}

// Newsapi key - 16e5f94af9694891b6ccfc3d5ec5c2b8
