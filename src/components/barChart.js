import React, { Component } from "react"
import { Bar } from "react-chartjs-2"

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: this.props.data,
      options: this.props.options,
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
  }

  render() {
    return <Bar data={this.state.chartData} options={this.state.options} />
  }
}

export default BarChart
