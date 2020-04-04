import React, { Component } from "react"
import { ResponsiveBar } from "@nivo/bar"
import { chartTheme } from "./chartTheme"
import { css } from "@emotion/core"

const placeHolderDivStyle = css`
  height: 450px;
  /* border: 2px solid grey; */
  margin: 10px;
`
const placeHolderStyle = css`
  font-size: 40px;
`

const CountsBarChart = props => {
  // use a truthy/falsy value to display warning before data arrives
  if (props.hasData) {
    return (
      <div style={{ height: "450px", margin: "10px" }}>
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
  } else {
    return (
      <div
        className="d-flex flex-column justify-content-center"
        css={placeHolderDivStyle}
      >
        <p css={placeHolderStyle} className="text-center align-middle">
          Hit the start button and watch the data roll (ha!) in.
        </p>
      </div>
    )
  }
}

export default CountsBarChart
