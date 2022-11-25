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

  // sidebar uses this... but I thought it used /top-coins? *have Austin look at this
  // have the default info to bitcoin
  useEffect(() => {
    fetch("/info")
      .then((res) => res.json())
      .then((data) => {
        console.log("This is default info");
        console.log(data);
        setData(data);
        setCardInfo(data.info);
        //console.log(cardInfo);
      });
  }, []);

  const displayGraph = (id) => {
    setCardUuid(id);
    console.log(id);
  };

  // Once the card is clicked grab the info for the new coin
  const onCardClick = (tempid) => {
    axios
      .post("/postInfo", {
        uuid: String(tempid),
      })
      .then((response) => {
        console.log(response.data.info);
        setCardInfo(response.data.info);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Home">
      <Sidebar
        data={data}
        displayGraph={displayGraph}
        onCardClick={onCardClick}
      />
      <Body cardInfo={cardInfo} />
      <div className="homeGraphs">
        <Graphs />
        {typeof data.info === "undefined" ? (
          <p>
            <CircleLoader color="#426cb4" size={100} />
          </p>
        ) : (
          <div className="homeData"></div>
        )}
      </div>
      <Footer />
    </div>
  );
}
