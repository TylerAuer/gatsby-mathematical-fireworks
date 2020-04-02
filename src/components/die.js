import React from "react"
import { css } from "@emotion/core"

const Die = props => {
  return (
    <div
      className="text-center m-2"
      css={css`
        border: 3px solid rgba(255, 0, 141, 1);
        border-radius: 20px;
        height: 100px;
        width: 100px;
        font-family: "Bungee", cursive;
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
