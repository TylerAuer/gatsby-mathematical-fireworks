import React from "react"
import { css } from "@emotion/core"

// Site color scheme
// rgba(255, 0, 141, 1);    Pink
// rgba(20, 186, 204, 1);   Blue
// rgb(255, 230, 0);        Yellow
// rgb(92, 221, 41);        Green
// rgb(255, 116, 81);       Orange

const Card = props => (
  <div className="col-lg-6 mb-3">
    <div className="text-center card h-100 ">
      <div className="card-body">
        <h2 className="card-title text-center">{props.title}</h2>
        <p className="card-text">{props.desc}</p>
      </div>
      <div
        css={css`
          background-color: white;
          padding: 25px;
        `}
      >
        <a
          className="btn btn-block btn-lg"
          href={props.btnUrl}
          css={css`
            background-color: rgba(255, 0, 141, 0.85);
            color: white;
            font-family: "Bungee", cursive;
            font-size: 15px;
            &:hover {
              color: white;
              background-color: rgba(255, 0, 141, 1);
            }
          `}
        >
          {props.btnText}
        </a>
      </div>
    </div>
  </div>
)

export default Card
