import React from "react";
import Elonpad from "../Elonpad/Elonpad";
import Header from "../Header";
// import bg1 from "../Images/bg1.png";
import img1 from "../Images/img1.png";
import Tier from "../Teirs/Tier";
import Token from "../Token/Token";
import playbtn from '../Images/playbtn.png'
import { Link } from "react-router-dom";
import Elonarmy from "../Elonarmy/Elonarmy";
import Nfa from "../NFA/Nfa";
import Bottom from "../Bottom/Bottom";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-12 pt-2">
              <img
                src={img1}
                alt=""
                className="hero-img img-fluid img-responsive "
              />
            </div>
            <div className="col-md-7 col-sm-12 col-12 hero-section">
              <h1 className="text1">
                COMMUNITY MEME LAUNCHPAD, INCUBATOR & DAO
              </h1>
              <div class="hero-btn">
                <button class="btn btn-primary" type="button">
                  LAUNCH APP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tier/>
      <Elonpad/>
      <Token/>
      <div className="wrap-6">
        <Link to={'/'}>
        <img src={playbtn} alt="" className="playbtn img-fluid img-responsive"/>
        </Link>
      </div>
      <Elonarmy/>
      <Nfa/>
      <Bottom/>
      <Footer/>
    </>
  );
};

export default Home;
