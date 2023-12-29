import React, { Component } from "react";
export class NewsItems extends Component {
  render() {
    let { title, descreption, imgUrl, imgId, author, date, source } = this.props
    return (

      <div>
        <div className="card" >


          <img src={!imgUrl ? "https:images.moneycontrol.com/static-mcnews/2023/12/stocks_sensex_nifty_stockmarket-770x433.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"85%"}}>
   {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">{descreption}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>

            <a href={imgId} target="_black" className="btn btn-sm btn-primary">Get full news</a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItems