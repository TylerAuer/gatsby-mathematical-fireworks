export const chartTheme = {
  background: "transparent",
  axis: {
    domain: {
      line: {
        stroke: "transparent",
        strokeWidth: 10,
      },
    },
    ticks: {
      line: {
        stroke: "rgba(255, 0, 141, 1)",
        strokeWidth: 4,
      },
      text: {
        color: "rgba(255, 0, 141, 1)",
        fontSize: "14px",
      },
    },
  },
  grid: {
    line: {
      stroke: "rgba(20, 186, 204, .4)",
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: "#333333",
    },
  },
  labels: {
    text: {
      fontSize: 12,
      fontFamily: "open sans",
      fontWeight: "bold",
    },
  },
  markers: {
    lineColor: "#000000",
    lineStrokeWidth: 1,
    text: {},
  },
  dots: {
    text: {},
  },
  tooltip: {
    container: {
      background: "white",
      color: "inherit",
      fontSize: "inherit",
      borderRadius: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      padding: "5px 9px",
    },
    basic: {
      whiteSpace: "pre",
      display: "flex",
      alignItems: "center",
    },
    chip: {
      marginRight: 7,
    },
    table: {},
    tableCell: {
      padding: "3px 5px",
    },
  },
  crosshair: {
    line: {
      stroke: "#000000",
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: "6 6",
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    outline: {
      fill: "none",
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
  },
}
