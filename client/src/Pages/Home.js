import Body from "../Components/Body";
import Graphs from "../Components/Graphs";
import Footer from "../Components/Footer.jsx";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const [cardUuid, setCardUuid] = useState("Qwsogvtv82FCd");
  const [graphData, setGraphData] = useState({ history: [] });

  // get the default info and 24h coin data for bitcoin
  useEffect(() => {
    fetch("/info")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCardInfo(data.info);
      });

    fetch("/graphs")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.coin_data);
        setGraphData(data.coin_data);
      });
  }, []);

  // Once the card is clicked grab the info and the 24h for the new coin
  const onCardClick = (tempid) => {
    axios
      .post("/postInfo", {
        uuid: String(tempid),
      })
      .then((response) => {
        //console.log(response.data.info);
        setCardInfo(response.data.info);
        setCardUuid(String(tempid));
      })
      .catch((err) => console.log(err));

    axios
      .post("/cardselect", {
        uuid: String(tempid),
        time: "24h",
      })
      .then((response) => {
        //console.log(response.data.apiData.data);
        setGraphData(response.data.apiData.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="homeGraphs">
        {typeof data.info === "undefined" ? (
          <p className="loadHome">
            <br /><br />
            <CircleLoader color="#426cb4" size={500} />
          </p>
        ) : (
          <>
          <Sidebar data={data} onCardClick={onCardClick} />
          <Body cardInfo={cardInfo} />
          <Graphs graphData={graphData} cardUuid={cardUuid} />
          <Footer />
          </>
        )}
        
        
      </div>
    </div>
  );
}
