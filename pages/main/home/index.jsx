import React from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsArrowUp, BsPlusLg } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home__main">
        <div className="container">
          <div className="home__content">
            <div className="row">
              <div className="col-3">
                <Menu />
              </div>
              <div className="col-8">
                <div className="home__balance">
                  <div className="row">
                    <div className="col-8">
                      <p className="home__balanceTittle">Balance</p>
                      <p className="home__balanceNominal">Rp 120.000</p>
                      <p className="home__balancePhone">+62 813-9387-7946</p>
                    </div>
                    <div className="col-4">
                      <div className="home__balanceButton">
                        <button className="home__balanceButtonSet">
                          <BsArrowUp /> Transfer
                        </button>
                      </div>
                      <div className="home__balanceButton">
                        <button className="home__balanceButtonSet">
                          <BsPlusLg /> Top Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__dashboard">
                  <div className="row">
                    <div className="col-6 home__chart">
                      <h3>Grafik</h3>
                    </div>
                    <div className="col-5 home__transaction">
                      <div className="row">
                        <div className="col-8">
                          <h1 className="home__transactionTittle">Transaction History</h1>
                        </div>
                        <div className="col-4">
                          <button className="home__seeAllButton">see all</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
