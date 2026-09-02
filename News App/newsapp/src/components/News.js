import React, { Component } from "react";
import NewItems from "./NewItems";

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor from news components..");
    this.state = {
      articles: [],
    };
  }

  async componentDidMount(){
    console.log("cdn");
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=c54f8cce942c4d2f989597889a61e464";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.article_id}>
              <NewItems
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl = {element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
