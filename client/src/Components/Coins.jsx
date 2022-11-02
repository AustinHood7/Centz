import React from 'react'
import { useEffect, useState} from 'react'
import { Chart } from 'react-google-charts'
import CircleLoader from "react-spinners/CircleLoader"


function Coins() {

    const [data, setData] = useState([{}])
    
    useEffect(() =>  {
      fetch("/top-coins").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])
  
    return (
        <div className='top-coins'>
            <h1 className='title'>Top Coins For Today</h1>
            <div className='coins'>
              {(typeof data.coin_data === 'undefined') ? (
                  <p className='loader'>                  
                    <CircleLoader
                      color="#426cb4"
                      size={200}
                    />
                  </p>
              ): (
                  data.coin_data.map((coin, i) => 
                  <div className='parent'>
                    <div className='cards'
                        style={{
                          backgroundColor: coin.change > 0 ? "rgba(26, 137, 23, 0.1)" : "rgba(186, 4, 2, 0.1)",
                          border: coin.change > 0 ?  "1px solid rgb(0, 217, 100)" : "1px solid rgb(179, 0, 0)"
                        }}>

                      <img src={coin.iconUrl} />
                      <div className='info'>
                        <p className="coinName" key={i}>{coin.name} </p>
                        <div className='rankTchange'>
                          <p className="change">Change: {coin.change}</p>
                          <p> Price: ${coin.price} </p>
                          <p>Market Cap: {coin.marketCap}</p>
                        </div>
                      </div>
                      <p className='rank'>{coin.rank}</p>
                      {/*}
                      <div className='miniGraphs'>   
                      <Chart chartType="LineChart" width="100px" height="50px" data={graphData} options={options}/>
                      </div>
                      */}
                       </div>
                    </div>
                  )
              )}
            </div>
        </div>
    )
  }
  
  export default Coins