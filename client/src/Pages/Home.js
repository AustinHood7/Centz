import Body from "../Components/Body"
import Graphs from "../Components/Graphs"
import Footer from "../Components/Footer.jsx"

export default function Home() {
  return(
    <div className="Home">
      <Body />
      <div className="graphs"><Graphs /></div>
      <Footer />
    </div>
  )
}