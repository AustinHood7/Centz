import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { json, Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import CircleLoader from "react-spinners/CircleLoader";

const Sidebar = ({ onCardClick }) => {
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

  function capFormatter(num) {
    // convert into millions, since it gives more significant digits than converting to billions
    //return Math.abs(num) > 999,999 ? new Intl.NumberFormat('en-US').format(Math.sign(num)*((Math.abs(num)/1000000).toFixed(1))) + 'M' : Math.sign(num)*Math.abs(num)
    
    // convert into billions w/ 3 decimal places
    return Math.abs(num) > 999,999,999 ? new Intl.NumberFormat('en-US').format(Math.sign(num)*((Math.abs(num)/1000000000).toFixed(3))) + 'B' : Math.sign(num)*Math.abs(num)
  }

  return (
    <>
      <IconContext.Provider className="nav-test" value={{ color: "#fff" }}>
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
                        onCardClick(coin.uuid);
                      }}
                    >
                      <img src={coin.iconUrl} alt="" />
                      <div className="info">
                        <p className="coinName" key={i}>
                          {coin.name}{" "}
                        </p>
                        <div className="rankTchange">
                          <p className="change">Change: {coin.change}%</p>
                          {// United States currency, with 8 decimal places
                          }
                          <p>Price: {new Intl.NumberFormat('en-US', { minimumFractionDigits: 8, style: 'currency', currency: 'USD' }).format(coin.price)}</p>
                          <p>Market Cap: ${capFormatter(coin.marketCap)}</p>
                        </div>
                      </div>
                      {/* future implementation: add mini graphs to each card}
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
