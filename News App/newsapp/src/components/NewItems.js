import React, { Component } from "react";

export class NewItems extends Component {
  render() {
    let { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : "https://assets1.cbsnewsstatic.com/hub/i/r/2026/08/31/9ce9333e-bfee-4ccb-ada8-2202da2da318/thumbnail/1200x630/5c6be9206549f8c173aa8d95e47ba043/gettyimages-2276448167.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}........</h5>
            <p className="card-text">
              {description}............
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItems;
