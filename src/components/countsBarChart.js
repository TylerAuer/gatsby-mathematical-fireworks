import React from "react"
import { ResponsiveBar } from "@nivo/bar"
import { chartTheme } from "./chartTheme"
import { css } from "@emotion/core"

const placeHolderDivStyle = css`
  height: 450px;
  width: 100%
  margin: 10px;
  position: relative;
`

const placeHolderUnderlayStyle = css``

const placeHolderOverlayStyle = css`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 10px;
  z-index: 8;
  /* background: rgba(219, 219, 219, 0.9); */
  backdrop-filter: blur(15px) grayscale(10%);
  font-size: 50px;
  font-family: "Fredoka One", sans-serif;
  text-shadow: 2px 2px 3px white;
`

const placeHolderData = [
  {
    id: "1",
    value: 5,
  },
  {
    id: "2",
    value: 10,
  },
  {
    id: "3",
    value: 15,
  },
  {
    id: "4",
    value: 10,
  },
  {
    id: "5",
    value: 5,
  },
]

// TODO: Make if statement apply only to the data, not to the whole chart
// that way the settings for the chart are not repeated

const CountsBarChart = props => {
  // use a truthy/falsy value to display warning before data arrives
  if (props.hasData) {
    return (
      <div css={placeHolderDivStyle}>
        <ResponsiveBar
          data={props.data}
          theme={chartTheme}
          minValue={0}
          margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
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
      <>
        <div css={placeHolderDivStyle}>
          <ResponsiveBar
            css={placeHolderUnderlayStyle}
            data={placeHolderData}
            theme={chartTheme}
            minValue={0}
            margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
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
          <div
            css={placeHolderOverlayStyle}
            className="d-flex flex-column justify-content-center"
          >
            <p className="text-center align-middle">
              Hit start. Watch the data <i>roll</i> in.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default CountsBarChart
