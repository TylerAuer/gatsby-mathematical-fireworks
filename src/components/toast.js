import React from "react"
import { css } from "@emotion/core"

function Toast(props) {
  if (props.show) {
    return (
      <div
        css={css`
          width: 50%; /* Set a default minimum width */
          margin-left: -25%; /* Divide value of min-width by 2 */
          background-color: rgba(255, 0, 141, 0.98);
          color: #fff; /* White text color */
          border-radius: 10px; /* Rounded borders */
          /* padding: 15px 30px; Padding */
          position: fixed; /* Sit on top of the screen */
          z-index: 1; /* Add a z-index if needed */
          left: 50%; /* Center the snackbar */
          top: 30px; /* 30px from the bottom */
          box-shadow: 8px 8px 15px black;
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

{
  /* <Toast
  show={props.showWarning}
  body={
    <>
      <div
        css={css`
          font-size: 30px;
          font-family: "Fredoka One", sans-serif;
          border-bottom: 2px solid white;
          padding: 5px 10px;
        `}
      >
        Invalid {props.title} Value
      </div>
      <p
        css={css`
          font-size: 20px;
          text-align: left;
          padding: 10px 20px;
        `}
      >
        <span style={{ fontWeight: "bold" }}>{props.title}</span> value
        must be between {prettyNum(props.min)} and {prettyNum(props.max)}.
      </p>
    </>
  }
/> */
}
