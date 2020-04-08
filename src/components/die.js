import React from "react"
import { css } from "@emotion/core"

// TODO: Replace values with SVG of die pips
const Die = props => {
  return (
    <div
      className="text-center m-2"
      css={css`
        border: 3px solid rgba(255, 0, 141, 1);
        border-radius: 20px;
        height: 100px;
        width: 100px;
        font-family: "Fredoka One", sans-serif;
        font-size: 45px;
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      {props.value}
    </div>
  )
}

export default Die
