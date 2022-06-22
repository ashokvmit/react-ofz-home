import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import './Chart.css'

const Chart = (props) => {
  let maxValue = Math.max(...props.dataPoints.map((dataPoint) => dataPoint.value));

  return props.dataPoints.map((bar, index) => {
    return <ChartBar
      key={index}
      value={bar.value}
      label={bar.label}
      maxValue={maxValue}
    />;
  });
};

export default Chart;
