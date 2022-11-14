import React from 'react'
import { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import CircleLoader from "react-spinners/CircleLoader"

export const options = {
  hAxis: { title: "Time", titleTextStyle: { color: "#e0f2fe" }, textStyle: { color: "#e0f2fe" } },
  vAxis: { title: "Price (USD$)", titleTextStyle: { color: "#e0f2fe" }, textStyle: { color: "#e0f2fe" }},
  chartArea: { width: "70%", height: "70%" },
  legend: "none",
  animation: {
    startup: true,
    easing: "out",
    duration: 500,
  },
  backgroundColor: { fill:'#111827' },
  legend: { textStyle: { color: "#e0f2fe" }}
};

function Graphs() {

    const [data, setData] = useState([{}])
    
    const graphData = [
      ["Timestamp", "Price"],
    ];

    useEffect(() =>  {
      fetch("/graphs").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          //console.log(data)
        }
      )
    }, [])

    function convertEpoch(epoch) {
      return new Date(epoch * 1000)
    }

    const makeGraph = () => {
      for (let x = 0; x < data.coin_data.history.length; x++) {
        graphData.push([convertEpoch(data.coin_data.history[x].timestamp), parseFloat(data.coin_data.history[x].price)]); 
      }
    }
  
    return (
        <div className='graphs'>
            {(typeof data.coin_data === 'undefined') ? (
                <p>                            
                  <CircleLoader
                    color="#426cb4"
                    size={100}
                  />
                </p>
            ): (
                <div>
                  {
                    makeGraph()
                  }             
                <Chart
                  chartType="AreaChart"
                  width="80%"
                  height="450px"
                  data={graphData}
                  options={options}
                />
                </div>
                )}
        </div>
    );
  }
  
  export default Graphs