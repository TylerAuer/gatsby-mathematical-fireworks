import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import Cell from "../../components/cell"

// TODO: Add basic styles and onClick functions to cells
// TODO: Create customization controls (randomize, order, largest factor), hide products
// TODO: Make columns and rows clickable to highlight the row

//
const MultTable = props => {
  // Generate header row, add className to style header cells
  let headerRow = [<th></th>]
  props.colFactors.forEach(num => {
    headerRow.push(<th className="mult-table-header">{num}</th>)
  })

  // Generate rows which are the product of the matching row and column header text
  let arrOfRows = []

  props.rowFactors.forEach(rowNum => {
    let row = [<th className="mult-table-header">{rowNum}</th>]
    props.colFactors.forEach(colNum => {
      row.push(<Cell value={rowNum * colNum} shadedCells={props.shadedCells} />)
    })
    arrOfRows.push(<tr>{row}</tr>)
  })

  return (
    <table>
      <thead>{headerRow}</thead>
      <tbody>{arrOfRows}</tbody>
    </table>
  )
}

class MultTableApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 144],
      rowFactors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      shadedCells: [],
    }
  }

  render() {
    return (
      <Layout>
        <MultTable
          colFactors={this.state.colFactors}
          rowFactors={this.state.rowFactors}
          shadedCells={this.state.shadedCells}
        />
      </Layout>
    )
  }
}

export default MultTableApp
