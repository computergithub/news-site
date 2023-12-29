import React, { Component } from "react";
import { NewsItems } from "./NewsItems";
// import PropTypes  from 'prop-types'
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
   async update(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73d1cec1a8bf42dd9165e606c1db2f29&page=${this.state.page }&pageSize=${this.props.pageSize}`
        let data =  await fetch(url)
        let paresData = await data.json()
        console.log(paresData)
        this.setState({
            page: this.state.page+1,
            articles: paresData.articles
        })
    }
    async componentDidMount() {
              this.update()
    }
    handlNextbtn = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.update()
    }
    handlPrevbtn = async () => {
        this.setState({
            page: this.state.page - 1,
            })
            this.update()
    }

    render() {

        return (

            <div className="container my-3">
                <h1 className="text-center" style={{margin:"4rem 0.1rem"}}>Top news from DengerNews - {this.props.category} </h1>
                {/* {this.state.articles.map((element) => {
    }
    )} */}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>

                            <NewsItems title={element.title} descreption={element.description} imgUrl={element.urlToImage} imgId={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>

                <div className="container my-3 d-flex justify-content-between">

                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlPrevbtn} className="btn btn-dark"> &larr; Previous </button>
                    <button type="button" onClick={this.handlNextbtn} className="btn btn-dark">Next &rarr; </button>
                </div>

            </div>
        )
    }
}
export default News

