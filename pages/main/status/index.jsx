import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsDownload } from "react-icons/bs";

export default function Status() {
  const [statusTransfer, setStatusTransfer] = useState(true);
  const handleDownload = (e) => {
    e.preventDefault();
    setStatusTransfer(!statusTransfer);
  };
  return (
    <div>
      <Navbar />
      <div className="status__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="status__content">
                {statusTransfer ? (
                  <div className="status__transaction">
                    <Image src="/success.png" width={60} height={60} />
                    <h1 className="status__transactionTittle">Transfer Success</h1>
                  </div>
                ) : (
                  <div className="status__transaction">
                    <Image src="/failed.png" width={60} height={60} />
                    <h1 className="status__transactionTittle">Transfer Failed</h1>
                    <p className="status__msg">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                  </div>
                )}

                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Amount</p>
                  <p className="status__valueDetail">Rp100.000</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Balance Left</p>
                  <p className="status__valueDetail">Rp20.000</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Date and Time</p>
                  <p className="status__valueDetail">May 11, 2020 - 12.20</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Notes</p>
                  <p className="status__valueDetail">For buying some socks</p>
                </div>
                <h1 className="status__transactionTittle mt-3">Transfer To</h1>
                <div className="status__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src="/auth__mockup.png" width={50} height={50} />
                    </div>
                    <div className="col-8">
                      <p className="status__nameCard">Samuel Suhi</p>
                      <p className="status__numberCard">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                {statusTransfer ? (
                  <button className="status__downloadButton">
                    <BsDownload /> Download PDF
                  </button>
                ) : null}
                <button className="status__button" onClick={handleDownload}>
                  {statusTransfer ? "Back To Home" : "Try Again"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
