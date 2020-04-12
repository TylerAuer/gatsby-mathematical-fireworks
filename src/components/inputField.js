import React from "react"
import { css } from "@emotion/core"
import ToastWarning from "./toast"

function InputField(props) {
  return (
    <>
      <ToastWarning
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
              must be between {props.min} and {props.max}.
            </p>
          </>
        }
      />
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
    </>
  )
}

export default InputField
