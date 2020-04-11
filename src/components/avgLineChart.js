import React from "react"
import { ResponsiveLine } from "@nivo/line"
import { chartTheme } from "./chartTheme"
import { css } from "@emotion/core"

const placeHolderDivStyle = css`
  height: 250px;
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
  backdrop-filter: blur(8px) grayscale(10%);
  font-size: 50px;
  font-family: "Fredoka One", sans-serif;
  text-shadow: 2px 2px 3px white;
`

const placeHolderData = [
  {
    id: "Rolling Average",
    color: "rgba(255, 0, 141, 1)",
    data: [
      {
        x: 1,
        y: 5,
      },
      {
        x: 2,
        y: 5.1,
      },
      {
        x: 3,
        y: 5.3,
      },
      {
        x: 4,
        y: 5.12,
      },
      {
        x: 5,
        y: 4.7,
      },
      {
        x: 6,
        y: 5.3,
      },
      {
        x: 7,
        y: 5.1,
      },
      {
        x: 8,
        y: 5.9,
      },
      {
        x: 9,
        y: 5,
      },
    ],
  },
]

// TODO: Make if statement apply only to the data, not to the whole chart
// that way the settings for the chart are not repeated

const AvgLineChart = props => {
  // use a truthy/falsy value to display warning before data arrives
  if (props.hasData) {
    return (
      <div css={placeHolderDivStyle}>
        <ResponsiveLine
          css={placeHolderUnderlayStyle}
          data={props.data}
          theme={chartTheme}
          margin={{ top: 10, right: 10, bottom: 10, left: 40 }}
          colors={"rgba(255, 0, 141, 1)"}
          padding={0}
          enableGridX={false}
          axisBottom={null}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          enablePoints={false}
          curve={"linear"}
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
          <ResponsiveLine
            css={placeHolderUnderlayStyle}
            data={placeHolderData}
            theme={chartTheme}
            margin={{ top: 10, right: 10, bottom: 10, left: 40 }}
            colors={"rgba(255, 0, 141, 1)"}
            padding={0}
            enableGridX={false}
            axisBottom={null}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            enablePoints={false}
            curve={"linear"}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
          <div
            css={placeHolderOverlayStyle}
            className="d-flex flex-column justify-content-center"
          >
            <p className="text-center align-middle">
              We'll track the average result here.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default AvgLineChart
