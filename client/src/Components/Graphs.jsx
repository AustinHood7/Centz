import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import CircleLoader from "react-spinners/CircleLoader";
import { Button, Form } from "semantic-ui-react";
import Select from "react-select";
import axios from "axios";
import { resolvePath } from "react-router-dom";

// includes all timePeriods available to choose from CoinRanking
// we may remove some of these to make the options look cleaner in the future
const timeFrames = [
  { value: "1h", label: "1h" },
  { value: "3h", label: "3h" },
  { value: "12h", label: "12h" },
  { value: "24h", label: "24h" },
  { value: "7d", label: "7d" },
  { value: "30d", label: "30d" },
  { value: "3m", label: "3m" },
  { value: "1y", label: "1y" },
  { value: "3y", label: "3y" },
  { value: "5y", label: "5y" },
];

// graph options
export const options = {
  hAxis: {
    title: "Time",
    titleTextStyle: { color: "#e0f2fe" },
    textStyle: { color: "#e0f2fe" },
  },
  vAxis: {
    title: "Price (USD$)",
    titleTextStyle: { color: "#e0f2fe" },
    textStyle: { color: "#e0f2fe" },
  },
  chartArea: { width: "70%", height: "70%" },
  legend: "none",
  animation: {
    startup: true,
    easing: "out",
    duration: 500,
  },
  backgroundColor: { fill: "#111827" },
  legend: { textStyle: { color: "#e0f2fe" } },
};

function Graphs({ cardUuid, graphData }) {
  const [data, setData] = useState([{}]);
  const [time, setTime] = useState();
  const [coinUuid, setCoinUuid] = useState();
  const [SelectedData, setSelectedData] = useState({ history: [] });

  // graph array column names
  const graphDataMatrix = [["Timestamp", "Price"]];

  useEffect(() => {
    // default 24 hour time period graph for bitcoin
    /*
    fetch("/graphs")
      .then((res) => res.json())
      .then((data) => {
        setSelectedData(data.coin_data);
      });
      */
    console.log(graphData);
    setSelectedData(graphData);
    setCoinUuid(cardUuid);
  }, [graphData]);

  // send timePeriod chosen by user to backend using axios
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/cardselect", {
        uuid: cardUuid,
        time: time,
      })
      .then((response) => {
        setSelectedData(response.data.apiData.data);
      })
      .catch((error) => console.log(error));
  };

  // convert epoch time from CoinRanking API into normal time
  function convertEpoch(epoch) {
    return new Date(epoch * 1000);
  }

  // make graph using data from API - add it to array
  const makeGraph = () => {
    for (let x = 0; x < SelectedData.history.length; x++) {
      graphDataMatrix.push([
        convertEpoch(SelectedData.history[x].timestamp),
        parseFloat(SelectedData.history[x].price),
      ]);
    }
  };

  return (
    <div className="graphs">
      <Form onSubmit={handleSubmit} className="graph-form">
        <label>Choose a time period:</label>
        <Select
          defaultValue={{ value: "24h", label: "24h" }}
          placeholder="Change Time Period"
          options={timeFrames}
          onChange={(e) => setTime(e.value)}
        />
        <Button>Update Time Period</Button>
      </Form>
      {typeof SelectedData === "undefined" ? (
        <p>
          <CircleLoader color="#426cb4" size={100} />
        </p>
      ) : (
        <div>
          {makeGraph()}
          <Chart
            chartType="AreaChart"
            width="80%"
            height="450px"
            data={graphDataMatrix}
            options={options}
          />
        </div>
      )}
    </div>
  );
}

export default Graphs;
