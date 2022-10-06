/*import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <>
            <h1>Top Coins For Today</h1>
            {(typeof data.coin_data === 'undefined') ? (
                <p>Loading...</p>
            ): (
                data.coin_data.map((coin, i) => (
                <p key={i}>{coin.rank}. {coin.name}</p>
                ))
            )}
        </>
    )
  }
  
  export default Coins*/