import Body from "../Components/Body";
import Graphs from "../Components/Graphs";
import Footer from "../Components/Footer.jsx";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

export default function Home() {
  const [data, setData] = useState([{}]);
  const [cardData, setCardData] = useState();
  const [cardUuid, setCardUuid] = useState();

  // sidebar uses this... but I thought it used /top-coins? *have Austin look at this
  
  useEffect(() => {
    fetch("/info")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //console.log(data)
      });
  }, []);

  const displayGraph = (id) => {
    setCardUuid(id)
    console.log(id)
  };

  return (
    <div className="Home">
      <Sidebar data={data} displayGraph={displayGraph}/>
      <Body uuid={cardUuid} />
      <div className="homeGraphs">
        <Graphs uuid={cardUuid}/>
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
