import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import Cell from "../../components/cell"
import InputField from "../../components/inputField"

// TODO: Create customization controls (randomize, order, largest factor), hide products
// TODO: Make columns and rows clickable to highlight the row

//
const MultTable = props => {
  // Generate header row, add className to style header cells
  const tableHeaderStyle = css`
    font-size 22px;
    color: white;
    border: solid 2px white;
    background-color: rgba(255, 0, 141, 0.8);
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
      row.push(
        <Cell
          id={"row" + rowNum + "col" + colNum}
          key={"row" + rowNum + "col" + colNum}
          value={rowNum * colNum}
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
    this.skipCounterId = null
    this.state = {
      colCount: 10,
      rowCount: 10,
      colFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rowFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
      this.skipCountTimeoutID = setTimeout(() => {
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

  render() {
    return (
      <Layout>
        <div style={{ margin: "10px auto" }} id="settings-bank">
          <form>
            <div className="form-row">
              <InputField
                title="Rows"
                name="rowCount"
                value={this.state.rowCount}
                min="1"
                max="1000"
                onChange={this.handleChange}
              />
              <InputField
                title="Columns"
                name="colCount"
                value={this.state.colCount}
                min="1"
                max="50"
                onChange={this.handleChange}
              />
            </div>
          </form>
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
          />
        </div>
      </Layout>
    )
  }
}

export default MultTableApp
