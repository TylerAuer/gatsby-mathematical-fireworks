import React from "react"
import { css, keyframes } from "@emotion/core"

function Toast(props) {
  const fadeintop = keyframes`
    from {
      top: 0; 
      opacity: 0;
    }
    to {
      top: 30px; 
      opacity: 1;
    }
    `
  const fadeouttop = keyframes`
    from {
      top: 30px; 
      opacity: 1;
    }
    to {
      top: 0; 
      opacity: 0; 
    }
  `
  const fadeinbottom = keyframes`
    from {
      bottom: 0; 
      opacity: 0;
    }
    to {
      bottom: 30px; 
      opacity: 1;
    }
    `
  const fadeoutbottom = keyframes`
    from {
      bottom: 30px; 
      opacity: 1;
    }
    to {
      bottom: 0; 
      opacity: 0; 
    }
  `

  if (props.show) {
    return (
      <div
        css={css`
          position: fixed;
          background-color: rgba(255, 0, 141, 0.98);
          color: #fff;
          border-radius: 10px;
          box-shadow: 8px 8px 15px black;
          z-index: 1; /* Add a z-index if needed */
          width: 90%; /* Set a default minimum width */
          right: 5%; /* Center the snackbar */
          bottom: 50px;
          -webkit-animation: ${fadeinbottom} 0.5s forwards,
            ${fadeoutbottom} 1s 4.5s forwards;
          animation: ${fadeinbottom} 0.5s forwards forwards;
          /* Moves toast to top for md and larger screens */
          @media (min-width: 768px) {
            width: 60%; /* Set a default minimum width */
            right: 20%; /* Center the snackbar */
            top: 30px;
            bottom: auto;
            -webkit-animation: ${fadeintop} 0.5s forwards,
              ${fadeouttop} 1s 4.5s forwards;
            animation: ${fadeintop} 0.5s forwards,
              ${fadeouttop} 1s 4.5s forwards;
          }
        `}
      >
        <div
          css={css`
            font-size: 30px;
            font-family: "Fredoka One", sans-serif;
            border-bottom: 2px solid white;
            padding: 5px 10px;
            text-align: center;
          `}
        >
          {props.title}
        </div>
        <div
          css={css`
            font-size: 18px;
            text-align: left;
            padding: 10px 20px;
          `}
        >
          {props.body}
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default Toast
