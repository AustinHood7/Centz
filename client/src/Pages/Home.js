import Body from "../Components/Body";
import Graphs from "../Components/Graphs";
import Footer from "../Components/Footer.jsx";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

export default function Home() {
  const [data, setData] = useState([{}]);
  const [cardData, setCardData] = useState();

  // sidebar uses this... but I thought it used /top-coins? *have Austin look at this
  useEffect(() => {
    fetch("/info")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //console.log(data)
      });
  }, []);



  return (
    <div className="Home">
      <Sidebar data={data}/>
      <Body />
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
