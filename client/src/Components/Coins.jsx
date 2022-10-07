import React from 'react'
import { useEffect, useState} from 'react'

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
                  data.coin_data.map((coin, i) => (
                  <p key={i}>{coin.rank}. {coin.name}</p>
                  ))
              )}
            </div>
        </div>
    )
  }
  
  export default Coins