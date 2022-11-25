import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { json, Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";

const Sidebar = ({ displayGraph, onCardClick }) => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [data, setData] = useState({});

  // pull top coins from backend
  useEffect(() => {
    fetch("/top-coins")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <MdKeyboardArrowRight onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <div className="navbar-toggle">
              <Link to="#" className="closeMenu" onClick={showSidebar}>
                <MdKeyboardArrowLeft />
              </Link>
            </div>
            <div className="sidebarCoins">
              {typeof data.coin_data === "undefined" ? (
                <p className="loader">
                  <CircleLoader color="#426cb4" size={200} />
                </p>
              ) : (
                data.coin_data.map((coin, i) => (
                  <div className="parent">
                    <div
                      className="cards"
                      style={{
                        backgroundColor:
                          coin.change > 0
                            ? "rgba(26, 137, 23, .5)"
                            : "rgba(186, 4, 2, .5)",
                        border:
                          coin.change > 0
                            ? "1px solid rgb(0, 217, 100)"
                            : "1px solid rgb(179, 0, 0)",
                      }}
                      onClick={() => {
                        displayGraph(coin.uuid);
                        onCardClick(coin.uuid);
                      }}
                    >
                      <img src={coin.iconUrl} alt="" />
                      <div className="info">
                        <p className="coinName" key={i}>
                          {coin.name}{" "}
                        </p>
                        <div className="rankTchange">
                          <p className="change">Change: {coin.change}</p>
                          <p> Price: ${coin.price} </p>
                          <p>Market Cap: {coin.marketCap}</p>
                        </div>
                      </div>
                      {/*}
                        <div className='miniGraphs'>   
                        <Chart chartType="LineChart" width="100px" height="50px" data={graphData} options={options}/>
                        </div>
                        */}
                    </div>
                  </div>
                ))
              )}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
