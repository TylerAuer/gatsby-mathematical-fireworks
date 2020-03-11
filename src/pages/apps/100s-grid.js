import React from "react"
import Layout from "../../components/layout"
import ControlBtn from "../../components/control-btn"

// TODO: Add skip count buttons 1 through 10 as round
// TODO: Add skip count by... user input option
// TODO: Redo margins so the grid customization inputs have the larger margin on the bottom not top
// TODO: Use element to organize the CSS and include :hover options
// TODO: Work my way back through the code to see if I can optimize it before moving on

function InputField(props) {
  const style = {
    border: "2px solid rgb(255, 0, 141)",
    borderRadius: "40px",
    fontSize: "20px",
    paddingLeft: "25px",
  }
  return (
    <div className="col-xs-12 col-sm-6 col-md text-center">
      <label htmlFor="start">
        <h5 style={{ margin: "25px auto 0px auto" }}>{props.title}</h5>
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

function Cell(props) {
  const cellStyle = {
    border: "solid 1px rgba(255, 0, 141, .33)",
    textAlign: "center",
    verticalAlign: "center",
    fontSize: "20px",
    padding: "7px",
  }
  return (
    <td id={"cell" + props.id} className="cell-in-100s-grid" style={cellStyle}>
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
    // loop for nums in each row
    for (let j = 0; j < props.columns; j++) {
      if (counter <= props.endNum) {
        row.push(<Cell id={counter} key={counter} value={counter} />)
      } else {
        row.push(<Cell id={counter} key={counter} value=" " />)
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
    this.state = {
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
    }
  }

  resetOnClick(e) {
    this.setState({
      startNum: 1,
      endNum: 100,
      skipSize: 1,
      columns: 10,
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
        <div
          style={{ margin: "10px auto" }}
          className="container text-center"
          id="button-bank"
        >
          <ControlBtn
            className="btn btn-danger"
            text="Reset"
            onClick={this.resetOnClick}
          />
          {/* <ButtonBank
            startNum={this.state.startNum}
            endNum={this.state.endNum}
            skipSize={this.state.skipSize}
            columns={this.state.columns}
          /> */}
        </div>
        <div style={{ margin: "10px auto" }} id="settings-bank">
          <form style={{ margin: "0px auto 30px auto" }}>
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
        <div
          id="grid-container"
          style={{ overflowX: "auto", margin: "10px auto" }}
        >
          <Grid
            startNum={this.state.startNum}
            endNum={this.state.endNum}
            skipSize={this.state.skipSize}
            columns={this.state.columns}
          />
        </div>
      </Layout>
    )
  }
}

export default GridApp
