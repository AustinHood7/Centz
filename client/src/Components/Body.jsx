import React from 'react'
import { useEffect, useState} from 'react'

function Body() {

    const [data, setData] = useState([{}])

    useEffect(() =>  {
      fetch("/info").then(
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

    function parseDesc() {
      let desc = data.info.coin.description;
      let begin = desc.replace("<p>", "");
      let end = begin.split("</p>", "1");
      return end
    }
  
    return (
        <div>
            {(typeof data.info === 'undefined') ? (
                <p>Loading...</p>
            ): (
                <div className='bodyMain'>
                  <br />
                  <div className='bodyContainer'>
                    <img className='bodyImg' src={data.info.coin.iconUrl} />
                    <br />
                    <h1 className='bodyTitle'>
                      {data.info.coin.name} <p style={{color: data.info.coin.color, display: 'inline'}}>[{data.info.coin.symbol}]</p>
                    </h1>
                  </div>
                  <div className='bodyDesc'>
                    <p>
                      {parseDesc()}
                    </p>
                  </div>
                </div>
                )}
        </div>
    );
  }
  
  export default Body