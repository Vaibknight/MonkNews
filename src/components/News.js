import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLayoutEffect } from "react";
import { useInsertionEffect } from "react";

 

  const News =(props) => {
  
    const[articles, setArticles] = useState([])
    const[loading, setLoading] = useState(true)
    const[page, setPage] = useState(1)
    const[totalResults, setTotalResults] = useState(0)
    // document.title = `${this.toCapitalCase(props.category)} - Vaibnews`;

  const toCapitalCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  

  const update = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    update();
  
  }, [])
  


  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=7365ee0e4a3f4f2b9ebbfbbc4e207288&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(true)
};

    return (
      <div>
          <h2 className="text-center " style={{ margin: "40px 0px", marginTop : '90px' }}>
            Vaibnews - Top {toCapitalCase(props.category)} Headlines{" "}
          </h2>
          {/* {this.state.loading && <Spinner/>} */}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
                <div className="row">
                  {articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                      </div>
                    );
                  })}
                </div>
            </div>
            
          </InfiniteScroll>
      </div>
    );
}

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
