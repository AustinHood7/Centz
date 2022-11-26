import Footer from "../Components/Footer";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutTitle">
          <h1 className="title">About Centz</h1>
          <h3>
            Centz is a web application that takes cryptocurrency data from the
            Coinranking API and shows it in a user-friendly format.
          </h3>
        </div>
        <div className="aboutTitle">
          <h2 className="title">How to Use Centz</h2>
          <h3>
            To get started, simply click one of the coin cards within the "Top Coins" sidebar
            on the left side of your screen. This will show you data from the coin you choose.
            To see data for another coin, choose another coin from the list on the left.
          </h3>
        </div>
        <div className="aboutTeam">
          <h2>Meet the Team</h2>
          <br />
          <div className="aboutDisplay">
            <h3>Christian Apostoli</h3>
            <a href="https://www.linkedin.com/in/christianapostoli/" target={"_blank"}>
              <FaLinkedin />
            </a>
          </div>
          <p>
            Hi, I'm Christian and I am currently a Senior Software Engineering
            major at Florida Gulf Coast University. Most of my work was on
            writing the back-end with the Coinranking API and some light work on
            the front-end with React. I learned quite a bit on front-end
            development, deployment, and using git with a team, and I am excited
            to bring these skills to the industry as a Junior Developer.
          </p>
          <br />
          <br />

          <div className="aboutDisplay">
            <h3>Jake Hanson</h3>
            <a href="https://www.linkedin.com/in/jakewhans/" target={"_blank"}>
              <FaLinkedin />
            </a>
          </div>
          <p>
            Hey, my name is Jake and I am currently a Senior Software
            Engineering major at Florida Gulf Coast University. I focused mainly
            on the front-end to back-end communication as well as the graphs
            functionality. I found this project to be particularly useful as an
            introduction to real-world development. Working with a team,
            utilizing git and GitHub, and overall understanding how the process
            of deploying a product gave me a much better idea of how software
            development operates. Completing this project made me much more
            confident in my abilities and makes me excited for my future career.
          </p>
          <br />
          <br />

          <div className="aboutDisplay">
            <h3>Austin Hood</h3>
            <a href="https://www.linkedin.com/in/austin-hood7/" target={"_blank"}>
              <FaLinkedin />
            </a>
          </div>
          <p>
            Hello, my name is Austin Hood and I am a senior Software Engineering
            student at Florida Gulf Coast University. My main focus on this
            project was to create high-quality components for use on the
            front-end. This includes creating layouts, fetching data, and
            styling components. This project taught me about how to work
            together as a team and create a CIC pipeline for streamlined and
            safe development. I am excited to bring these skills to real world
            applications and bring value to both companies and end-users!
          </p>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
