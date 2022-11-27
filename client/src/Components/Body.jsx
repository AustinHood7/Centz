import React from "react";
import { useEffect, useState } from "react";

function Body({ cardInfo }) {
  const [data, setData] = useState({});

  // update the info if cardInfo changes
  useEffect(() => {
    setData(cardInfo);
  }, [cardInfo]);

  // make description of coin look pretty
  // still contains ASCII strings... look into simply using HTML plaintext that is given,
  // but cutting it off after say, 3 sentences?
  function parseDesc() {
    let desc = data.coin.description;
    let begin = desc.replace("<p>", "");
    let end = begin.split("</p>", "1");
    //let cleanText = desc.replace(/<\/?[^>]+(>|$)/g, "");
    return end;
  }

  return (
    <div>
      {typeof data.coin === "undefined" ? (
        <p></p>
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
