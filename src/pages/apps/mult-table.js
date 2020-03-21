import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import Cell from "../../components/cell"

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
    }
  `

  let headerRow = [
    <th css={tableHeaderStyle} style={{ backgroundColor: "black" }}>
      X
    </th>,
  ]
  props.colFactors.forEach(num => {
    headerRow.push(<th css={tableHeaderStyle}>{num}</th>)
  })

  // Generate rows which are the product of the matching row and column header text
  let arrOfRows = []

  props.rowFactors.forEach(rowNum => {
    let row = [<th css={tableHeaderStyle}>{rowNum}</th>]
    props.colFactors.forEach(colNum => {
      row.push(
        <Cell
          id={"row" + rowNum + "col" + colNum}
          value={rowNum * colNum}
          shadedCells={props.shadedCells}
          onClick={props.onClick}
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
      <thead>{headerRow}</thead>
      <tbody>{arrOfRows}</tbody>
    </table>
  )
}

class MultTableApp extends React.Component {
  constructor(props) {
    super(props)
    this.cellOnClick = this.cellOnClick.bind(this)
    this.state = {
      colFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 144],
      rowFactors: [2, 4, 6, 8, 10, 1, 3, 5, 7, 9],
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

  render() {
    return (
      <Layout>
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
            onClick={this.cellOnClick}
          />
        </div>
      </Layout>
    )
  }
}

export default MultTableApp
