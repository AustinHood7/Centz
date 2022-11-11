import Coins from "../Components/Coins.jsx"
import Footer from "../Components/Footer"

export default function About() {
    return (
            <>
              {/* Not sure whether to have bios in first or third person... -Jake */}
              <div className="aboutTitle">
                <h1>About Centz</h1>
                <h3>Centz is a cryptocurrency web application that takes API-driven cryptocurrency data and shows it in an easy to comprehend format.</h3>
              </div>
              <br />
              <div className="aboutTeam">
                <h2>Meet the Team</h2>
                <br />
                <h3>Christian Apostoli</h3>
                  <p>
                    CHRISTIAN: ENTER BIO HERE
                  </p>
                  <a href="https://www.linkedin.com/in/christianapostoli/" target="_blank">Christian's LinkedIn</a>
                  <br /><br />

                <h3>Jake Hanson</h3>
                  <p>
                    Hey, my name is Jake and I am currently a Senior Software Engineering major at Florida Gulf Coast University. 
                    I focused mainly on the front-end to back-end communication as well as the graphs functionality.
                    I found this project to be particularly useful as an introduction to real-world development. Working with a team, utilizing git and GitHub,
                    and overall understanding how the process of deploying a product gave me a much better idea of how software development operates.
                  </p>
                  <a href="https://www.linkedin.com/in/jakewhans/" target="_blank">Jake's LinkedIn</a>
                  <br /><br />

                  
                <h3>Austin Hood</h3>
                  <p>
                    AUSTIN: ENTER BIO HERE
                  </p>
                  <a href="https://www.linkedin.com/in/austin-hood7/" target="_blank">Austin's LinkedIn</a>
                  <br /><br />
              </div>


              <Coins />
              <Footer />
            </>
          )
  }