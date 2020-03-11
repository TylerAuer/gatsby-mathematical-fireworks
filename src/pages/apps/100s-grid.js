import React from "react"
import Layout from "../../components/layout"
import ControlBtn from "../../components/control-btn"

/**
 *
 * Need to make info flow downhill
 * Grid App is the highest level
 * App holds a list of values to pass to the table maker component
 * App holds a list of cells shaded certain colors. Pass to table maker then to cell
 * App passes onChange function to input grids so that when change occurs updates state of App
 * App then pass those values back to the input AND to the grid to build
 * Good Ex: https://reactjs.org/docs/lifting-state-up.html
 *
 * This is also likely what I will need to do to change the colors on click for the grid
 */

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

function InputField(props) {
  const title = props.name[0].toUpperCase() + props.name.slice(1)
  const style = {
    border: "2px solid rgb(255, 0, 141)",
    borderRadius: "40px",
    fontSize: "20px",
    paddingLeft: "25px",
  }
  return (
    <div className="col-xs-12 col-sm-6 col-md text-center">
      <label for="start">
        <h5 style={{ margin: "25px auto 0px auto" }}>{title}</h5>
      </label>
      <input
        style={style}
        id={props.name}
        name={props.name}
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

function UserInputs(props) {
  return (
    <form style={{ margin: "0px auto 30px auto" }}>
      <div className="form-row">
        <InputField name="start" placeholder="1" min="0" max="10000" />
        <InputField name="end" placeholder="100" min="1" max="10000" />
        <InputField name="skip-size" placeholder="1" min="1" max="1250" />
        <InputField name="columns" placeholder="1" min="1" max="150" />
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

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
    }
  }

  render() {
    const rowsNeeded = Math.ceil(
      Math.ceil(
        (1 + (this.state.endNum - this.state.startNum)) / this.state.skipSize
      ) / this.state.columns
    )

    let grid = []
    let counter = this.state.startNum
    // loop for row
    for (let i = 0; i < rowsNeeded; i++) {
      let row = []
      // loop for nums in each row
      for (let j = 0; j < this.state.columns; j++) {
        if (counter <= this.state.endNum) {
          row.push(<Cell key={counter} value={counter} />)
        } else {
          row.push(<Cell key={counter} value=" " />)
        }
        counter += this.state.skipSize
      }
      grid.push(<tr>{row}</tr>)
    }

    const tableStyles = {
      width: "100%",
      borderStyle: "hidden",
    }

    return <table style={tableStyles}>{grid}</table>
  }
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
