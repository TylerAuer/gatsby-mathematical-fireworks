import React from "react"
import { css } from "@emotion/core"

const DataDisplay = props => {
  return (
    <div className="col">
      <div
        css={css`
          text-align: center !important;
          font-size: 1.75rem;
          font-family: "Fredoka One", sans-serif;
          color: rgba(20, 186, 204, 1);
          line-height: 1;
        `}
      >
        {props.data}
      </div>

      <div
        css={css`
          color: rgb(255, 116, 81);
          text-align: center;
          font-size: 1.25rem;
          font-family: "Fredoka One", sans-serif;
          line-height: 1;
          margin-bottom: 10px;
        `}
      >
        {props.title}
      </div>
    </div>
  )
}

export default DataDisplay
