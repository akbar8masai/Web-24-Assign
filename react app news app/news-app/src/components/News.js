import React, {useEffect, useState } from "react";

import NewsItem from "./NewsItem";


import Spinner from "./Spinner";

import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  const [page, setpage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&Apikey=${props.Apikey}&page=${page}&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    totalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };


   useEffect(() => { 
    document.title=`${capitalizeFirstLetter(props.category)}-NewsZebra`
   updateNews();
    // eslint-disable-next-line
     }, [])

  // const handleNextclick = async () => {
  //   setpage(page - 1);
  //   updateNews();
  // };
  // const handlePrevclick = async () => {
  //   setpage(page + 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&ApiKey=${props.Apikey}&page=${page+1}&pagesize=${props.pageSize}`;
    setpage(page + 1)
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
     }

    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" ,marginTop:"90px"}}>
          NewsZebra-Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((el) => {
                return (
                  <div className="col-md-4" key={el.url}>
                    <NewsItem
                      title={el.title ? el.title : ""}
                      description={el.description ? el.description : ""}
                      imageUrl={el.urlToImage ? el.urlToImage : ""}
                      NewsUrl={el.url}
                      author={el.author ? el.author : "Author"}
                      date={el.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  };
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;


// -------------------------------------------------------------------

// import React, { Component } from 'react'

// import NewsItem from './NewsItem'

// import Spinner from './Spinner'

// import PropTypes from 'prop-types'

// import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
//  static defaultProps ={
//   country:"in",
//   pageSize:8,
//   category:"general"
//  }

//  static propTypes ={
//   country:PropTypes.string,
//   pageSize:PropTypes.number,
//   category:PropTypes.string,
//  }
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
// capitalizeFirstLetter=(string)=> {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// constructor(props){
//     super(props)
//     console.log("this is constructor component from news" )
//     this.state={
//             //  articles:this.articles,
//             articles:[],
//             //  refer : react.js state and lifecycle
//              loading:false,
//              totalResults:0,
//              page:1
//           }
// document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsZebra`
// }

//  async updateNews(){
//    this.props.setProgress(10);
//   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&Apikey=${this.props.Apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
//   this.setState({loading:"true"})
//   let data =await fetch(url)
//   this.props.setProgress(30);
//   let parsedData =await data.json()
//  // console.log(parsedData)
//  this.props.setProgress(70);
//    this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults,loading:false})
//   this.props.setProgress(100);
//  }

//  async componentDidMount(){
//    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8&page=1&pagesize=${this.props.pageSize}`
//   let data =await fetch(url)
//   this.setState({loading:"true"})
//   let parsedData =await data.json()
//  // console.log(parsedData)
//    this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults,loading:false})
//   this.updateNews()
//  }
//  handleNextclick=async()=>{
//   console.log("next")
//   if(!(this.state.page +1  > Math.ceil(this.state.totalResults/this.props.pageSize))){
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
//   let data =await fetch(url)
//   this.setState({loading:"true"})
//   let parsedData =await data.json()
//   this.setState({
//       page: this.state.page + 1,
//       articles : parsedData.articles,
//       loading:"false"
//   })
//   // Note:loading :false & true means data will be loading condition
//  }

// this.updateNews()
// this.setState({page:this.state.page + 1})
//  }
//  handlePrevclick=async()=>{
// console.log("prev")
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16e5f94af9694891b6ccfc3d5ec5c2b8&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
// let data =await fetch(url)
// this.setState({loading:"true"})
// let parsedData =await data.json()
// this.setState({
//     page: this.state.page - 1,
//     articles : parsedData.articles,
//     loading:"false"
// })
//   this.setState({page:this.state.page - 1})
//   this.updateNews()
//  }
//  fetchMoreData = async () => {
//   this.setState({page:this.state.page - 1})
//   this.updateNews()
//   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&ApiKey=${this.props.Apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
//   this.setState({loading:"true"})
//   let data =await fetch(url)

//   let parsedData =await data.json()
//  // console.log(parsedData)
//    this.setState({articles : this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})

// };
// render() {
// return (
<>
  {/* <div className='container my-3'> */}
  {/* <h2 className='text-center'>NewsZebra-Top {this.capitalizeFirstLetter(this.props.category)} Headlines   </h2> */}
  {/* {this.state.loading && <Spinner/>} */}
  {/* <div className="row"> */}
  {/* {!this.state.loading && this.state.articles.map((el)=>{ */}
  {/* //  return <div className="col-md-4" key={el.url}>
              //     {/* col-md-4 = column medium devices form 12 column means 4*3 in set  */}
  {/* // <NewsItem title={el.title?el.title:""} description={el.description?el.description:""} imageUrl={el.urlToImage?el.urlToImage:""} NewsUrl={el.url} author={el.author?el.author:"Author"} date={el.publishedAt}/> */}
  {/* <NewsItem title={el.title?el.title.slice(0,45):""} description={el.description?el.description.slice(0,88):""} imageUrl={el.urlToImage?el.urlToImage:""} NewsUrl={el.url}/> */}
  {/* // </div> */}
  {/* // })} */}
  {/* for infinite loop */}
  {/* <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResults}
                  loader={<Spinner/>}
                >
                  <div className="container">
             <div className="row">
            {this.state.articles.map((el)=>{
               return <div className="col-md-4" key={el.url}>
                  {/* col-md-4 = column medium devices form 12 column means 4*3 in set  */}
  {/* <NewsItem title={el.title?el.title:""} description={el.description?el.description:""} imageUrl={el.urlToImage?el.urlToImage:""} NewsUrl={el.url} author={el.author?el.author:"Author"} date={el.publishedAt}/> */}
  {/* <NewsItem title={el.title?el.title.slice(0,45):""} description={el.description?el.description.slice(0,88):""} imageUrl={el.urlToImage?el.urlToImage:""} NewsUrl={el.url}/> */}
  {/* </div> */}
  {/* // })} */}
  {/* //  </div> */}
  {/* // </div> */}
  {/* // </InfiniteScroll> */} 
  {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevclick}> &larr; Previous</button>
        <button disabled={this.state.page +1  > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next &rarr; </button>
        {/* //html arrow for refer */}
  {/* </div> */}
  {/* </div> */}
</>
//     )
//   }
// }

// Newsapi key - 16e5f94af9694891b6ccfc3d5ec5c2b8

// -----------------------------------------------------


