import React from "react"
import Layout from "../../components/layout"
import ControlBtn from "../../components/control-btn"

// settings adjusted by user
const startNum = 20
const endNum = 356
const skipSize = 3
const columns = 17

function ButtonBank(props) {
  // Generate buttons for skip counting
  // TODO: Need to figure out what buttons would be wanted when the grid is "weird"
  return (
    // Skip count buttons here
    <ControlBtn
      className="btn btn-danger"
      //style={skipCountBtnStyle}
      text="Reset"
      // onClick="() => jfdlaksd"
    />
  )
}

function UserInputs(props) {
  return (
    <form>
      <div class="form-row">
        <div class="col">
          <input type="number" class="form-control" placeholder="Start" />
        </div>
        <div class="col">
          <input type="number" class="form-control" placeholder="End" />
        </div>
        <div class="col">
          <input type="number" class="form-control" placeholder="Skip Size" />
        </div>
        <div class="col">
          <input type="number" class="form-control" placeholder="Columns" />
        </div>
      </div>
    </form>
  )
}

function Cell(props) {
  const cellStyle = {
    border: "solid 1px rgba(255, 0, 141, .33)",
    textAlign: "center",
    verticalAlign: "center",
    fontSize: "20px",
    padding: "7px",
  }
  return (
    <td className="cell-in-100s-grid" style={cellStyle}>
      {props.value}
    </td>
  )
}

function Grid(props) {
  const rowsNeeded = Math.ceil(
    Math.ceil((1 + (endNum - startNum)) / skipSize) / columns
  )

  let grid = []
  let counter = startNum
  // loop for row
  for (let i = 0; i < rowsNeeded; i++) {
    let row = []
    // loop for nums in each row
    for (let j = 0; j < columns; j++) {
      if (counter <= endNum) {
        row.push(<Cell key={counter} value={counter} />)
      } else {
        row.push(<Cell key={counter} value=" " />)
      }
      counter += skipSize
    }
    grid.push(<tr>{row}</tr>)
  }

  const tableStyles = {
    width: "100%",
    borderStyle: "hidden",
  }
  return <table style={tableStyles}>{grid}</table>
}

const GridApp = () => (
  <Layout>
    <div
      style={{ margin: "10px auto" }}
      className="container text-center"
      id="button-bank"
    >
      <ButtonBank />
    </div>
    <div style={{ margin: "10px auto" }} id="settings-bank">
      <UserInputs />
    </div>
    <div id="grid-container" style={{ overflowX: "auto", margin: "10px auto" }}>
      <Grid />
    </div>
  </Layout>
)

export default GridApp
