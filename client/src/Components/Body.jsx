import React from "react";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Body() {
  const [data, setData] = useState([{}]);

  // grab coin data from backend
  useEffect(() => {
    fetch("/info")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //console.log(data)
      });
  }, []);

  // make description of coin look pretty
  function parseDesc() {
    let desc = data.info.coin.description;
    let begin = desc.replace("<p>", "");
    let end = begin.split("</p>", "1");
    return end;
  }

  return (
    <div>
      {typeof data.info === "undefined" ? (
        <p>
          <CircleLoader color="#426cb4" size={100} />
        </p>
      ) : (
        <div className="bodyMain">
          <br />
          <div className="bodyContainer">
            <img className="bodyImg" src={data.info.coin.iconUrl} />
            <br />
            <h1 className="bodyTitle">
              {data.info.coin.name}{" "}
              <p style={{ color: data.info.coin.color, display: "inline" }}>
                [{data.info.coin.symbol}]
              </p>
            </h1>
          </div>
          <div className="bodyDesc">
            <p>{parseDesc()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
