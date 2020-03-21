import React from "react"
import { css } from "@emotion/core"

/**
 * Style for un-highlighted cells
 */
const defaultCellStyle = css`
  border: solid 1px rgba(255, 0, 141, 0.33);
  text-align: center;
  vertical-align: center;
  font-size: 20px;
  padding: 7px;
  &:hover {
    background-color: rgba(255, 0, 141, 0.33);
    cursor: pointer;
  }
`

/**
 * Styles for highlighted cells
 */
const shadedStyle = css`
  background-color: rgba(255, 0, 141, 1);
  border: solid 1px rgba(255, 0, 141, 1);
  color: white;
  border: none;
  text-align: center;
  vertical-align: center;
  font-size: 20px;
  padding: 7px;
  &:hover {
    background-color: rgba(255, 0, 141, 1);
    color: white;
    font-weight: bolder;
    cursor: pointer;
  }
`

/**
 * Component for clickable cells in a table
 */
function Cell(props) {
  let style = defaultCellStyle

  const shadedCells = props.shadedCells

  if (shadedCells.includes(props.id)) {
    style = shadedStyle
  }

  return (
    <td
      css={style}
      key={props.id}
      id={props.id}
      onClick={props.onClick}
      onKeyDown={props.onClick}
    >
      {props.value}
    </td>
  )
}

export default Cell
