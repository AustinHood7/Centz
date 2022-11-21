import Body from "../Components/Body"
import Graphs from "../Components/Graphs"
import Footer from "../Components/Footer.jsx"
import Sidebar from "../Components/Sidebar"
import Sidebar2 from "../Components/Sidebar2"
import { useState, useEffect } from "react"

export default function Home() {

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

  return(
    <div className="Home">
      <Sidebar data={data}/>
      <Body />
      <div className="homeGraphs">
        <Graphs />
        {(typeof data.info === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          <div className="homeData">

          </div>
        )}
      </div>
      <Sidebar2 data={data}/>
      <Footer />
    </div>
  )
}