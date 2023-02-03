import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className="my-3">
        <div className="card">
        <span class="position-absolute  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', top:'3%', right: '-6%'}}>
          {source}
        </span>
        <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/22/06/m2-mac-mini-listed-macbook-air-rumors/-952x498w6/gsmarena_00.jpg":imageUrl} style={{height:'250px'}} className="card-img-top" alt="..."></img>         
         <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
