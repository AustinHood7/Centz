import React from "react";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Body({ cardInfo }) {
  const [data, setData] = useState({});

  // update the info if it changes
  useEffect(() => {
    setData(cardInfo);
  }, [cardInfo]);

  // make description of coin look pretty
  function parseDesc() {
    let desc = data.coin.description;
    let begin = desc.replace("<p>", "");
    let end = begin.split("</p>", "1");
    return end;
  }

  return (
    <div>
      {typeof data.coin === "undefined" ? (
        <p>
          <CircleLoader color="#426cb4" size={100} />
        </p>
      ) : (
        <div className="bodyMain">
          <br />
          <div className="bodyContainer">
            <img className="bodyImg" src={data.coin.iconUrl} />
            <br />
            <h1 className="bodyTitle">
              {data.coin.name}{" "}
              <p style={{ color: data.coin.color, display: "inline" }}>
                [{data.coin.symbol}]
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
