import React from "react"
import { css } from "@emotion/core"

/**
 * Style for the user input fields that control the grid
 */
const inputStyle = css`
  border: 2px solid rgb(255, 0, 141);
  border-radius: 40px;
  font-family: "Bungee", cursive;
  font-size: 30px;
  padding-left: 30px;
  margin: 0px auto 15px auto;
  &:hover {
    border-width: 3px;
  }
`

/**
 * Component that holds the user inputs for setting up the grid
 */
function InputField(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md text-center">
      <label htmlFor="start">
        <h5 style={{ margin: "0px auto 0px auto" }}>{props.title}</h5>
      </label>
      <input
        css={inputStyle}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type="number"
        className="form-control text-center"
        min={props.min}
        max={props.max}
        step="1"
      />
    </div>
  )
}

export default InputField
