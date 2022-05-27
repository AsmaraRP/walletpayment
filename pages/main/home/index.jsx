import React from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { BsArrowUp, BsPlusLg } from "react-icons/bs";
// import Topup from "../../../components/Topup";

export default function Home() {
  const router = useRouter();
  const handleSeeall = (e) => {
    e.preventDefault();
    router.push("/main/history");
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    router.push("/main/transfer");
  };
  return (
    <div>
      <Navbar />
      {/* <Topup /> */}
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
                        <button className="home__balanceButtonSet" onClick={handleTransfer}>
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
                          <button className="home__seeAllButton" onClick={handleSeeall}>
                            see all
                          </button>
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
