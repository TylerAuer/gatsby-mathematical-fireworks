import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import ControlBtn from "../../components/control-btn"

// MUST DO FIRST!
// TODO: !!!!JSDoc Comments for every component
// TODO: !!!!Add limits to the inputs so that the user doesn't crash the grid with number that are too large
// Can do later
// TODO: Add skip count by... user input option
// TODO: Refine design on skip count buttons
// TODO: Work my way back through the code to see if I can optimize it before moving on
// TODO: Add simple little tips to help people figure out how to use the page
// TODO: Add Sieve of Eratosthenes
// TODO: Add factor counter example

// Site color scheme
// rgba(255, 0, 141, 1);    Pink
// rgba(20, 186, 204, 1);   Blue
// rgb(255, 230, 0);        Yellow
// rgb(92, 221, 41);        Green
// rgb(255, 116, 81);       Orange

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
    background-color: rgba(255, 0, 141, 0.33);
    color: black;
    cursor: pointer;
  }
`

/**
 * Style for the user input fields that control the grid
 */
const inputStyle = css`
  border: 2px solid rgb(255, 0, 141);
  border-radius: 40px;
  font-size: 20px;
  padding-left: 25px;
  margin: 0px auto 15px auto;
  &:hover {
    border-width: 3px;
  }
`

const skipCountBtnStyle = css`
  margin: 3px 2px;
  background-color: rgb(255, 0, 141);
  border: none;
  border-radius: 5px;
  height: 48px;
  width: 48px;
  font-size: 20px;
  font-family: "Bungee", cursive;
  &:hover,
  &:focus {
    background-color: rgba(20, 186, 204, 1);
  }
`
// Site color scheme
// rgba(255, 0, 141, 1);    Pink
// rgba(20, 186, 204, 1);   Blue
// rgb(255, 230, 0);        Yellow
// rgb(92, 221, 41);        Green
// rgb(255, 116, 81);       Orange

const clearBtnStyle = css`
  margin: 3px 2px;
  font-family: "Bungee", cursive;
  background-color: rgb(255, 116, 81);
  color: white;
  &:hover,
  &:focus {
    color: black;
    background-color: white;
    border: 1px solid rgba(255, 0, 141, 1);
  }
`

const resetBtnStyle = css`
  margin: 3px 2px;
  font-family: "Bungee", cursive;
  background-color: rgba(20, 186, 204, 1);
  color: white;
  &:hover,
  &:focus {
    background-color: rgb(92, 221, 41);
    color: white;
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

/**
 * Component for the buttons that skip count
 */
function ControlBtns(props) {
  let skipCountBtns = []
  for (let i = 1; i <= 10; i++) {
    skipCountBtns.push(
      <ControlBtn
        css={skipCountBtnStyle}
        className="btn btn-dark"
        key={i}
        value={i}
        text={i}
        onClick={props.numOnClick}
      />
    )
  }

  return (
    <div
      style={{ margin: "0px auto" }}
      className="container text-center"
      id="button-bank"
    >
      {skipCountBtns}
      <ControlBtn
        css={clearBtnStyle}
        className="btn btn-lg"
        text="Clear Colors"
        onClick={props.clearOnClick}
      />
      <ControlBtn
        css={resetBtnStyle}
        className="btn btn-lg"
        text="Reset Grid"
        onClick={props.resetOnClick}
      />
    </div>
  )
}

/**
 * Component for cells in the table
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
      id={props.id}
      className="cell-in-100s-grid"
      onClick={props.onClick}
      onKeyDown={props.onClick}
    >
      {props.value}
    </td>
  )
}

/**
 * Component for the whole grid
 */
function Grid(props) {
  const rowsNeeded = Math.ceil(
    Math.ceil((1 + (props.endNum - props.startNum)) / props.skipSize) /
      props.columns
  )
  let grid = []
  let counter = props.startNum
  // loop for row
  for (let i = 0; i < rowsNeeded; i++) {
    let row = []
    // loop for numbers in each row
    for (let j = 0; j < props.columns; j++) {
      if (counter <= props.endNum) {
        row.push(
          <Cell
            id={"cell" + counter}
            key={counter}
            value={counter}
            onClick={props.onClick}
            shadedCells={props.shadedCells}
          />
        )
      } else {
        row.push(
          <Cell
            id={"cell" + counter}
            key={counter}
            value=" "
            shadedCells={props.shadedCells}
          />
        )
      }
      counter += props.skipSize
    }
    grid.push(<tr key={i}>{row}</tr>)
  }

  const tableStyles = {
    width: "100%",
    borderStyle: "hidden",
  }

  return (
    <table style={tableStyles}>
      <tbody>{grid}</tbody>
    </table>
  )
}

/**
 * Highest level component
 * State holds shadedCells list and the settings to build the grid
 */
class GridApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.resetOnClick = this.resetOnClick.bind(this)
    this.numOnClick = this.numOnClick.bind(this)
    this.cellOnClick = this.cellOnClick.bind(this)
    this.clearOnClick = this.clearOnClick.bind(this)
    this.skipCounterId = null
    this.state = {
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
      shadedCells: [],
    }
  }

  // onCLick function for cells in the grid
  cellOnClick(e) {
    const cellId = e.target.id
    // remove cell from shadedCells (removes highlights)
    if (this.state.shadedCells.includes(cellId)) {
      const shadedCells = this.state.shadedCells
      const newShadedCells = shadedCells.filter(id => id !== cellId)
      this.setState({ shadedCells: newShadedCells })

      // add cell Id to shadedCells (removes highlights)
    } else {
      const newShadedCells = this.state.shadedCells
      newShadedCells.push(cellId)
      this.setState({ shadedCells: newShadedCells })
    }
  }

  /**
   * Utility function
   * Shades previously unshaded cells after a timeout to make the skip counting visible
   * @param {array} arrOfCellsToShade list of cells (ex: ["cell2", "cell25"]) that need to be shaded
   */
  shadeNewCells(arrOfCellsToShade) {
    const cellId = arrOfCellsToShade.shift()
    this.setState(prevState => {
      if (!prevState.shadedCells.includes(cellId)) {
        const newShadedCells = prevState.shadedCells.concat(cellId)
        return { shadedCells: newShadedCells }
      }
    })

    if (arrOfCellsToShade.length > 0) {
      this.skipCountTimeoutID = setTimeout(() => {
        this.shadeNewCells(arrOfCellsToShade)
      }, 75)
    }
  }

  // onClick function for skipCounting controls
  numOnClick(e) {
    // make array of cell Ids to add to state.shadedCells
    const divisor = parseInt(e.target.value)
    let newCellsToShade = []
    for (
      let i = this.state.startNum;
      i <= this.state.endNum;
      i += this.state.skipSize
    ) {
      if (i % divisor === 0) {
        newCellsToShade.push("cell" + i)
      }
    }
    this.shadeNewCells(newCellsToShade)
  }

  // onClick function for clear button
  clearOnClick(e) {
    clearTimeout(this.skipCountTimeoutID)
    this.setState({
      shadedCells: [],
    })
  }

  // onClick function for reset grid button
  resetOnClick(e) {
    this.setState({
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
    })
    clearTimeout(this.skipCountTimeoutID)
  }

  // handleChange function for the input fields
  handleChange(e) {
    // Avoids crash when user deletes current value in input
    if (e.target.value === "") {
      this.setState({ [e.target.name]: 1 })

      // Avoids crash when skipCount is set to 0 or below
    } else if (e.target.name === "skipSize" && parseInt(e.target.value) <= 0) {
      this.setState({ [e.target.name]: 1 })
    } else {
      this.setState({ [e.target.name]: parseInt(e.target.value) })
    }
  }

  render() {
    return (
      <Layout>
        <div style={{ margin: "10px auto" }} id="settings-bank">
          <form>
            <div className="form-row">
              <InputField
                title="Start"
                name="startNum"
                value={this.state.startNum}
                onChange={this.handleChange}
                min="-100"
                max="10000"
              />
              <InputField
                title="End"
                name="endNum"
                value={this.state.endNum}
                onChange={this.handleChange}
                min="1"
                max="10000"
              />
              <InputField
                title="Skip Size"
                name="skipSize"
                value={this.state.skipSize}
                onChange={this.handleChange}
                min="1"
                max="1250"
              />
              <InputField
                title="Columns"
                name="columns"
                value={this.state.columns}
                onChange={this.handleChange}
                min="1"
                max="150"
              />
            </div>
          </form>
        </div>
        <ControlBtns
          startNum={this.state.startNum}
          endNum={this.state.endNum}
          skipSize={this.state.skipSize}
          columns={this.state.columns}
          shadedCells={this.state.shadedCells}
          numOnClick={this.numOnClick}
          clearOnClick={this.clearOnClick}
          resetOnClick={this.resetOnClick}
        />
        <div
          id="grid-container"
          style={{ overflowX: "auto", margin: "10px auto" }}
        >
          <Grid
            startNum={this.state.startNum}
            endNum={this.state.endNum}
            skipSize={this.state.skipSize}
            columns={this.state.columns}
            shadedCells={this.state.shadedCells}
            onClick={this.cellOnClick}
          />
        </div>
      </Layout>
    )
  }
}

export default GridApp
