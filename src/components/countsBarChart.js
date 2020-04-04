import React, { Component } from "react"
import { ResponsiveBar } from "@nivo/bar"
import { chartTheme } from "./chartTheme"

const CountsBarChart = props => (
  <div style={{ height: "450px" }}>
    <ResponsiveBar
      data={props.data}
      theme={chartTheme}
      minValue={0}
      margin={{ top: 10, right: 10, bottom: 50, left: 40 }}
      colors={"rgba(255, 0, 141, 1)"}
      padding={0.04}
      axisBottom={{
        tickSize: 5,
        tickPadding: 1,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={20}
      labelTextColor={"black"}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
)

export default CountsBarChart
