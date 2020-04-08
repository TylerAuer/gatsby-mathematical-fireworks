import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import Cell from "../../components/cell"
import InputField from "../../components/inputField"
import ControlBtn from "../../components/control-btn"
import { prettyNum } from "../../components/numFormatter"

const clearBtnStyle = css`
  margin: 3px 2px;
  font-family: "Fredoka One", sans-serif;
  background-color: rgb(255, 116, 81);
  color: white;
  &:hover,
  &:focus {
    color: black;
    background-color: white;
    border: 1px solid rgba(255, 0, 141, 1);
  }
`

const hideBtnStyle = css`
  margin: 3px 2px;
  font-family: "Fredoka One", sans-serif;
  background-color: rgb(92, 221, 41);
  color: white;
  &:hover,
  &:focus {
    background-color: rgb(255, 230, 0);
    color: white;
  }
`

const resetBtnStyle = css`
  margin: 3px 2px;
  font-family: "Fredoka One", sans-serif;
  background-color: rgba(20, 186, 204, 1);
  color: white;
  &:hover,
  &:focus {
    background-color: rgb(92, 221, 41);
    color: white;
  }
`

const randBtnStyle = css`
  margin: 3px 2px;
  font-family: "Fredoka One", sans-serif;
  background-color: rgb(92, 221, 41);
  color: white;
  &:hover,
  &:focus {
    background-color: rgb(255, 230, 0);
    color: white;
  }
`

//
const MultTable = props => {
  // Generate header row, add className to style header cells
  const tableHeaderStyle = css`
    color: white;
    border: solid 2px white;
    background-color: rgba(255, 0, 141, 0.8);
    padding: 5px;
    @media (min-width: 576px) {
      font-size: 22px;
      min-width: 50px;
      min-height: 45px;
    }
    &:hover {
      background-color: rgba(255, 0, 141, 1);
      cursor: pointer;
    }
  `

  let headerRow = [
    <th css={tableHeaderStyle} style={{ backgroundColor: "black" }}>
      X
    </th>,
  ]
  props.colFactors.forEach(num => {
    headerRow.push(
      <th
        id={"colHead" + num}
        className={"col-header"}
        css={tableHeaderStyle}
        onClick={props.headerOnClick}
        onKeyDown={props.headerOnClick}
        value={num}
        key={num}
      >
        {num}
      </th>
    )
  })

  // Generate rows which are the product of the matching row and column header text
  let arrOfRows = []

  props.rowFactors.forEach(rowNum => {
    let row = [
      <th
        id={"rowHead" + rowNum}
        key={"rowHead" + rowNum}
        className={"row-header"}
        css={tableHeaderStyle}
        onClick={props.headerOnClick}
        onKeyDown={props.headerOnClick}
        value={rowNum}
      >
        {rowNum}
      </th>,
    ]
    props.colFactors.forEach(colNum => {
      let cellDisplayVal = ""
      if (!props.hideCellValues) {
        cellDisplayVal = prettyNum(rowNum * colNum)
      }
      row.push(
        <Cell
          id={"row" + rowNum + "col" + colNum}
          key={"row" + rowNum + "col" + colNum}
          value={cellDisplayVal}
          shadedCells={props.shadedCells}
          onClick={props.cellOnClick}
        />
      )
    })
    arrOfRows.push(<tr>{row}</tr>)
  })

  return (
    <table
      css={css`
        width: 98%;
        margin: 5px auto;
        text-align: center;
      `}
    >
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>{arrOfRows}</tbody>
    </table>
  )
}

class MultTableApp extends React.Component {
  constructor(props) {
    super(props)
    this.cellOnClick = this.cellOnClick.bind(this)
    this.headerCellOnClick = this.headerCellOnClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearOnClick = this.clearOnClick.bind(this)
    this.resetOnClick = this.resetOnClick.bind(this)
    this.randOnClick = this.randOnClick.bind(this)
    this.hideOnClick = this.hideOnClick.bind(this)
    this.state = {
      colCount: 10,
      rowCount: 10,
      colFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rowFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      shadedCells: [],
      hideCellValues: false,
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

  headerCellOnClick(e) {
    let arrOfCellsToShade = []
    const headerVal = e.target.innerHTML

    if (e.target.className.includes("col-header")) {
      this.state.rowFactors.forEach(rowNum => {
        arrOfCellsToShade.push("row" + rowNum + "col" + headerVal)
      })
    } else {
      this.state.colFactors.forEach(colNum => {
        arrOfCellsToShade.push("row" + headerVal + "col" + colNum)
      })
    }
    this.shadeNewCells(arrOfCellsToShade)
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
      this.skipCounterID = setTimeout(() => {
        this.shadeNewCells(arrOfCellsToShade)
      }, 75)
    }
  }

  //TODO: Add checks to make sure the user inputs make sense and don't crash the app
  // handleChange function for the input fields
  handleChange(e) {
    // updates the value in the input field
    this.setState({ [e.target.name]: parseInt(e.target.value) })
    // re-renders the table
    let newFactorArr = []
    for (let i = 1; i <= e.target.value; i++) {
      newFactorArr.push(i)
    }
    if (e.target.name === "rowCount") {
      this.setState({
        rowFactors: newFactorArr,
      })
    } else {
      this.setState({
        colFactors: newFactorArr,
      })
    }
  }

  // onClick function for clear button
  clearOnClick(e) {
    clearTimeout(this.skipCounterID)
    this.setState({
      shadedCells: [],
    })
  }

  // onClick function for reset grid button
  resetOnClick(e) {
    this.setState({
      colCount: 10,
      rowCount: 10,
      colFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rowFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
    clearTimeout(this.skipCounterID)
  }

  randOnClick(e) {
    this.setState({
      rowFactors: shuffle(this.state.rowFactors),
      colFactors: shuffle(this.state.colFactors),
    })

    // Fisher-Yates (aka Knuth) Shuffle
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  }

  hideOnClick(e) {
    if (this.state.hideCellValues) {
      this.setState({
        hideCellValues: false,
      })
      e.target.innerHTML = "Hide Products"
    } else {
      this.setState({
        hideCellValues: true,
      })
      e.target.innerHTML = "Show Products"
    }
  }

  render() {
    return (
      <Layout>
        <div style={{ margin: "10px auto" }} id="settings-bank">
          <form>
            <div className="form-row">
              <div className="col-xs-12 col-sm-6 col-md text-center">
                <InputField
                  title="Rows"
                  name="rowCount"
                  value={this.state.rowCount}
                  min="1"
                  max="1000"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md text-center">
                <InputField
                  title="Columns"
                  name="colCount"
                  value={this.state.colCount}
                  min="1"
                  max="50"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
        </div>

        <div
          style={{ margin: "0px auto" }}
          className="container text-center"
          id="button-bank"
        >
          <ControlBtn
            css={randBtnStyle}
            className="btn btn-lg"
            text="Randomize"
            onClick={this.randOnClick}
          />
          <ControlBtn
            css={hideBtnStyle}
            className="btn btn-lg"
            text="Hide Products"
            onClick={this.hideOnClick}
          />
          <ControlBtn
            css={clearBtnStyle}
            className="btn btn-lg"
            text="Clear Colors"
            onClick={this.clearOnClick}
          />
          <ControlBtn
            css={resetBtnStyle}
            className="btn btn-lg"
            text="Reset Grid"
            onClick={this.resetOnClick}
          />
        </div>

        <div
          css={css`
            overflow-x: auto;
            margin: 10px auto;
          `}
        >
          <MultTable
            colFactors={this.state.colFactors}
            rowFactors={this.state.rowFactors}
            shadedCells={this.state.shadedCells}
            cellOnClick={this.cellOnClick}
            headerOnClick={this.headerCellOnClick}
            hideCellValues={this.state.hideCellValues}
          />
        </div>
      </Layout>
    )
  }
}

export default MultTableApp
