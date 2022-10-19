import React from 'react'
import { useEffect, useState} from 'react'
import { Chart } from 'react-google-charts'

export const options = {
  title: "Coin Name",
  hAxis: { title: "24h", titleTextStyle: { color: "#333" } },
  //vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
  legend: "none",
};

function Graphs() {

    const [data, setData] = useState([{}])
    
    const graphData = [
      ["Timestamp", "Price"],
    ];

    useEffect(() =>  {
      fetch(`/graphs`).then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          //console.log(data)
        }
      )
    }, [])

    function convertDate(date) {
      var std = new Date(date * 1000); // convert to UTC from Epoch
      var shortDate = [
        std.getMonth() + 1, // JS months start at 0
        std.getDate(),
        std.getFullYear(),
      ].join('/');
      //console.log(shortDate);
      return shortDate;
    }

    function convertEpoch(epoch) {
      return new Date(epoch * 1000)
    }

    const makeGraph = () => {
      for (let x = 0; x < data.coin_data.history.length; x++) {
        graphData.push([convertEpoch(data.coin_data.history[x].timestamp), parseFloat(data.coin_data.history[x].price)]); 
        //console.log(graphData[x]);
      }
    };
  
    return (
        <div className='graphs'>
            {(typeof data.coin_data === 'undefined') ? (
                <p>Loading...</p>
            ): (
                <div>
                  {
                    makeGraph()
                  }
                  <h1 className='title'>COIN_NAME  [${data.coin_data.change}] change &nbsp;
                  {convertDate(data.coin_data.history[0].timestamp)}</h1>
                <Chart
                  chartType="AreaChart"
                  width="100%"
                  height="400px"
                  data={graphData}
                  options={options}
                />
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={graphData}
                  options={options}
                />
                </div>
                )}
        </div>
    );
  }
  
  export default Graphs