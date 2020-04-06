import React from "react"
import { css } from "@emotion/core"

const DataDisplay = props => {
  return (
    <>
      <h3
        css={css`
          text-align: center !important;
        `}
      >
        {props.data}
      </h3>
      <h5
        css={css`
          color: rgb(255, 116, 81);
          text-align: center;
        `}
      >
        {props.title}
      </h5>
    </>
  )
}

export default DataDisplay
