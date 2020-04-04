import React, { Component } from "react"
import { Bar } from "react-chartjs-2"

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: this.props.data,
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
  }

  render() {
    return (
      <Bar
        data={this.state.chartData}
        options={{
          title: {
            display: this.props.displayTitle,
            fontSize: 25,
          },
          legend: {
            display: this.props.displayLegend,
          },
        }}
      />
    )
  }
}

export default BarChart
