import React, { Component } from "react"
import { ResponsiveBar } from "@nivo/bar"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: "1",
    value: 100,
  },
  {
    id: "2",
    value: 200,
  },
  {
    id: "3",
    value: 100,
  },
  {
    id: "4",
    value: 300,
  },
  {
    id: "5",
    value: 350,
  },
  {
    id: "6",
    value: 600,
  },
  {
    id: "7",
    value: 500,
  },
  {
    id: "8",
    value: 400,
  },
  {
    id: "9",
    value: 300,
  },
  {
    id: "10",
    value: 200,
  },
  {
    id: "11",
    value: 100,
  },
  {
    id: "12",
    value: 2,
  },
]

const theme = {
  axis: {
    textColor: "rgba(255, 0, 141, 1)",
    fontSize: "18px",
    tickColor: "#eee",
  },
  grid: {
    stroke: "#888",
    strokeWidth: 10,
  },
}

const CountsBarChart = props => (
  <div style={{ height: "400px" }}>
    <ResponsiveBar
      data={data}
      theme={theme}
      minValue={0}
      margin={{ top: 20, right: 50, bottom: 20, left: 50 }}
      colors={"rgba(255, 0, 141, 1)"}
      padding={0.04}
      borderRadius={5}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={"black"}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
)

export default CountsBarChart
