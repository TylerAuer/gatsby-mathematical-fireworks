import React from "react"
import { css } from "@emotion/core"

function InputField(props) {
  return (
    <div className="text-center">
      <label htmlFor="start">
        <div
          css={css`
            color: rgba(20, 186, 204, 1);
            font-family: "Fredoka One", sans-serif;
            font-size: 25px;
            line-height: 1;
          `}
        >
          {props.title}
        </div>
      </label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type="number"
        className="form-control text-center"
        min={props.min}
        max={props.max}
        step="1"
        css={css`
          border: 2px solid rgb(255, 0, 141);
          border-radius: 40px;
          font-family: "Fredoka One", sans-serif;
          font-size: 30px;
          padding-left: 30px;
          margin: 0px auto 15px auto;
          text-align: center;
          &:hover {
            border-width: 3px;
          }
        `}
      />
    </div>
  )
}

export default InputField
