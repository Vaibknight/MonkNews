import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string
  }

  toCapitalCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
  

      constructor(props){
    super(props);
    this.state={
        articles : [],
        loading: false,
        page:1
    }
    document.title = `${this.toCapitalCase(this.props.category)} - Vaibnews`
  }

  async update(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
       totalResults: parsedData.totalResults,
      loading: false})
  }

 async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(data);
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles,
    //    totalResults: parsedData.totalResults,
    //   loading: false})
    this.update();
  }

  handlePrevClick= async()=>{
    //   console.log("Previous");
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page - 1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
    this.setState({page:this.state.page - 1})
    this.update();
  }

   handleNextClick= async()=>{ 

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    
    }

    else{
      // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true}); // Loading true before hitting the url
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // this.setState({
      //   page: this.state.page +1,
      //   articles : parsedData.articles,
      //   loading:false //loading false or stops after hitting url 
      // })

      this.setState({page:this.state.page + 1})
    this.update();
    }
    
}

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center " style={{margin: '40px 0px'}}>Vaibnews - Top  {this.toCapitalCase(this.props.category)} Headlines </h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}
           
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark " onClick={this.handlePrevClick}>&larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default News
