import Body from "../Components/Body"
import Graphs from "../Components/Graphs"
import Footer from "../Components/Footer.jsx"
import Sidebar from "../Components/Sidebar"
import { useState, useEffect } from "react"

export default function Home() {

  const [data, setData] = useState([{}])

  useEffect(() =>  {
      fetch("/top-coins").then(
      res => res.json()
      ).then(
      data => {
          setData(data)
          console.log(data)
      }
      )
  }, [])

  return(
    <div className="Home">
      <Sidebar data={data}/>
      <Body />
      <div className="homeGraphs"><Graphs /></div>
      <Footer />
    </div>
  )
}