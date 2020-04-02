import React from "react"
import { css } from "@emotion/core"

const DataDisplay = props => {
  return (
    <div className="col-6 col-md-3">
      <h3>{props.data}</h3>
      <h5
        css={css`
          color: rgb(255, 116, 81);
        `}
      >
        {props.title}
      </h5>
    </div>
  )
}

export default DataDisplay
