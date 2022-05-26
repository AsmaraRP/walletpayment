import React from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";

export default function History() {
  return (
    <div>
      <Navbar />
      <div className="history__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="history__content">
                <div className="row">
                  <div className="col-8">
                    <h1 className="history__transactionTittle">Transaction History</h1>
                  </div>
                  <div className="col-4">
                    <select className="history__filter">
                      <option selected>---Select Filter---</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
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
