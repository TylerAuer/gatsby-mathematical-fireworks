import React, { Component } from "react"
import { ResponsiveBar } from "@nivo/bar"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    country: "AD",
    "hot dog": 50,
    "hot dogColor": "hsl(66, 70%, 50%)",
    burger: 108,
    burgerColor: "hsl(176, 70%, 50%)",
    sandwich: 16,
    sandwichColor: "hsl(188, 70%, 50%)",
    kebab: 23,
    kebabColor: "hsl(10, 70%, 50%)",
    fries: 90,
    friesColor: "hsl(144, 70%, 50%)",
    donut: 200,
    donutColor: "hsl(253, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 185,
    "hot dogColor": "hsl(174, 70%, 50%)",
    burger: 160,
    burgerColor: "hsl(277, 70%, 50%)",
    sandwich: 8,
    sandwichColor: "hsl(305, 70%, 50%)",
    kebab: 8,
    kebabColor: "hsl(70, 70%, 50%)",
    fries: 45,
    friesColor: "hsl(176, 70%, 50%)",
    donut: 73,
    donutColor: "hsl(319, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 44,
    "hot dogColor": "hsl(27, 70%, 50%)",
    burger: 92,
    burgerColor: "hsl(72, 70%, 50%)",
    sandwich: 117,
    sandwichColor: "hsl(150, 70%, 50%)",
    kebab: 116,
    kebabColor: "hsl(130, 70%, 50%)",
    fries: 125,
    friesColor: "hsl(291, 70%, 50%)",
    donut: 133,
    donutColor: "hsl(127, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 158,
    "hot dogColor": "hsl(185, 70%, 50%)",
    burger: 114,
    burgerColor: "hsl(349, 70%, 50%)",
    sandwich: 160,
    sandwichColor: "hsl(155, 70%, 50%)",
    kebab: 134,
    kebabColor: "hsl(132, 70%, 50%)",
    fries: 64,
    friesColor: "hsl(56, 70%, 50%)",
    donut: 191,
    donutColor: "hsl(162, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 180,
    "hot dogColor": "hsl(187, 70%, 50%)",
    burger: 198,
    burgerColor: "hsl(336, 70%, 50%)",
    sandwich: 123,
    sandwichColor: "hsl(139, 70%, 50%)",
    kebab: 92,
    kebabColor: "hsl(90, 70%, 50%)",
    fries: 31,
    friesColor: "hsl(138, 70%, 50%)",
    donut: 131,
    donutColor: "hsl(58, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 47,
    "hot dogColor": "hsl(306, 70%, 50%)",
    burger: 4,
    burgerColor: "hsl(115, 70%, 50%)",
    sandwich: 9,
    sandwichColor: "hsl(282, 70%, 50%)",
    kebab: 57,
    kebabColor: "hsl(152, 70%, 50%)",
    fries: 179,
    friesColor: "hsl(302, 70%, 50%)",
    donut: 199,
    donutColor: "hsl(34, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 97,
    "hot dogColor": "hsl(310, 70%, 50%)",
    burger: 87,
    burgerColor: "hsl(354, 70%, 50%)",
    sandwich: 13,
    sandwichColor: "hsl(244, 70%, 50%)",
    kebab: 111,
    kebabColor: "hsl(76, 70%, 50%)",
    fries: 92,
    friesColor: "hsl(6, 70%, 50%)",
    donut: 156,
    donutColor: "hsl(278, 70%, 50%)",
  },
]

const CountsBarChart = props => (
  <div style={{ height: "400px" }}>
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      padding={0.3}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
)

export default CountsBarChart
