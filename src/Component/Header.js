import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import text from "./Images/text.png";

const Header = () => {
  return (
    <>
      <div className="wrap-1">
        <div className="container-fluid bag-14">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="col-md-3 col-sm-12 bag-13">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="" />
                  <img src={text} alt="" className="bag-19" />
                </Link>

                <button
                  className="navbar-toggler hambg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className=" col-md-9  bag-15">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto ">
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        aria-current="page"
                        to="/elonarmy"
                      >
                        #ELONARMY
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/elonpad">
                        ELONPAD
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/token">
                        TOKENOMICS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tier">
                        ENEFT’S
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/bottom">
                        MEMELORD
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">  Dropdown
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>  */}
                  </ul>
                  <div className="button">
                    <button className="btn btn-primary btn1">BUY</button>
                    <button className="btn btn-primary">LAUNCH APP</button>
                  </div>
                </div>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
