import React from "react"

const ControlBtn = props => {
  return (
    <button
      className={props.className}
      style={props.style}
      onClick={props.onClick}
      key={props.value}
      value={props.text}
    >
      {props.text}
    </button>
  )
}

export default ControlBtn
