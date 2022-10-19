import React from 'react'
import { useEffect, useState} from 'react'
import { Chart } from 'react-google-charts'


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
                  <p>Loading...</p>
              ): (
                  data.coin_data.map((coin, i) => 
                  <div className='parent'>
                    <div className='cards'>
                      
                      <p key={i}>{coin.rank}. {coin.name}</p>
                      <p className="change">Change: {coin.change}</p>
                      <img src={coin.iconUrl} />
                      <p> Price: ${coin.price} </p>
                      <p>Market Cap: {coin.marketCap}</p>
                                 
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