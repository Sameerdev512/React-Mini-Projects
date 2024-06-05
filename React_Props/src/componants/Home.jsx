import React from 'react'
import './Home.css'

const Home = (props) => {
  return (
    <div className="container">
      <div>
        <h1>Book Details</h1>
      </div>
      <div className="card">
        <div className="info">
          <b>Title</b> : {props.title}
        </div>
        <div className="info">
          <b>Author</b> : {props.author}
        </div>
        <div className="info">
          <b>Published Date : </b> {props.publishDate}
        </div>
        <div className="info">
          <b>Price :</b> {props.price}
        </div>
        <div className="info">
          <b>Description : </b>
          {props.desc}
        </div>
      </div>
    </div>
  );
}

export default Home
