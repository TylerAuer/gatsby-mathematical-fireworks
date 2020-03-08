import React from "react"

const Card = props => (
  <div className="col-lg-6 mb-3">
    <div className="card h-100 ">
      <div className="card-body">
        <h2 className="card-title text-center">{props.title}</h2>
        <p className="card-text">{props.desc}</p>
        <a className="btn btn-dark btn-block" href={props.btnUrl}>
          {props.btnText}
        </a>
      </div>
    </div>
  </div>
)

export default Card
