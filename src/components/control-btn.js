import React from "react"

const ControlBtn = props => {
  return (
    <button
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default ControlBtn
