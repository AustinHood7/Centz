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

    const bodyStyling = {
      body: {
        marginLeft: 20,
      },
      title: {
        display: "inline",
        size: 30,
      },
      icon: {
        display: "inline",
        height: 40,
        width: 40,
        marginTop: 10,
        marginRight: 5,
      }
    }

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
  
    return (
        <div>
            {(typeof data.info === 'undefined') ? (
                <p>Loading...</p>
            ): (
                <div>
                  <br />
                  <h1 style={bodyStyling.body}>
                    <img style={bodyStyling.icon} src={data.info.coin.iconUrl} />
                    {data.info.coin.name}
                  </h1><br />
                </div>
                )}
        </div>
    );
  }
  
  export default Body