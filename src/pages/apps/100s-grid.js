import React from "react"
import Layout from "../../components/layout"
import ControlBtn from "../../components/control-btn"

// TODO: Add skip count buttons 1 through 10 as round
// TODO: Add skip count by... user input option
// TODO: Use element to organize the CSS and include :hover options
// TODO: Work my way back through the code to see if I can optimize it before moving on

const defaultStyle = {
  border: "solid 1px rgba(255, 0, 141, .33)",
  textAlign: "center",
  verticalAlign: "center",
  fontSize: "20px",
  padding: "7px",
}

const shadedStyle = {
  backgroundColor: "rgba(255, 230, 0, 1)",
  color: "black",
  border: "solid 1px rgba(255, 0, 141, .33)",
  textAlign: "center",
  verticalAlign: "center",
  fontSize: "20px",
  padding: "7px",
}

function InputField(props) {
  const style = {
    border: "2px solid rgb(255, 0, 141)",
    borderRadius: "40px",
    fontSize: "20px",
    paddingLeft: "25px", // Helps the text appear centered
    margin: "0px auto 15px auto",
  }
  return (
    <div className="col-xs-12 col-sm-6 col-md text-center">
      <label htmlFor="start">
        <h5 style={{ margin: "0px auto 0px auto" }}>{props.title}</h5>
      </label>
      <input
        style={style}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type="number"
        className="form-control text-center"
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        step="1"
      />
    </div>
  )
}

function ControlBtns(props) {
  let skipCountBtns = []
  for (let i = 1; i <= 10; i++) {
    skipCountBtns.push(
      <ControlBtn
        style={{ margin: "0px 2px" }}
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
        style={{ margin: "5px" }}
        className="btn btn-lg btn-warning"
        text="Clear"
        onClick={props.clearOnClick}
      />
      <ControlBtn
        style={{ margin: "5px" }}
        className="btn btn-lg btn-danger"
        text="Reset"
        onClick={props.resetOnClick}
      />
    </div>
  )
}

function Cell(props) {
  let style = defaultStyle

  const shadedCells = props.shadedCells

  if (shadedCells.includes(props.id)) {
    style = shadedStyle
  }

  return (
    <td
      style={style}
      id={props.id}
      className="cell-in-100s-grid"
      onClick={props.onClick}
    >
      {props.value}
    </td>
  )
}

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

class GridApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.resetOnClick = this.resetOnClick.bind(this)
    this.numOnClick = this.numOnClick.bind(this)
    this.cellOnClick = this.cellOnClick.bind(this)
    this.clearOnClick = this.clearOnClick.bind(this)
    this.state = {
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
      shadedCells: [],
    }
  }

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

  numOnClick(e) {
    // make array of cell Ids to add to state.shadedCells
    const divisor = parseInt(e.target.value)

    let newCellsToShade = []
    const currentShadedCells = this.state.shadedCells
    for (
      let i = this.state.startNum;
      i <= this.state.endNum;
      i += this.state.skipSize
    ) {
      if (i % divisor === 0 && !currentShadedCells.includes("cell" + i)) {
        newCellsToShade.push("cell" + i)
      }
    }
    this.setState({
      shadedCells: currentShadedCells.concat(newCellsToShade),
    })

    // recursively call setTimeout and shift() first value into state.shadedCells
    // continue until shading is done
  }

  resetOnClick(e) {
    this.setState({
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
    })
  }

  clearOnClick(e) {
    this.setState({
      shadedCells: [],
    })
  }

  handleChange(e) {
    // Avoids crash when user deletes current value in input
    if (e.target.value === "") {
      this.setState({ [e.target.name]: 1 })

      // Avoids crash when skipCount is set to 0
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
