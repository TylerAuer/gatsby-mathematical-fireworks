import React, { useState } from "react"
import { css } from "@emotion/core"

function ToastWarning(props) {
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
          box-shadow: 2px 2px 3px grey;
        `}
      >
        {props.body}
      </div>
    )
  } else {
    return <></>
  }
}

export default ToastWarning
