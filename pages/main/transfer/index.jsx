import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsSearch, BsPen } from "react-icons/bs";

export default function Transfer() {
  const [doTransfer, setDoTransfer] = useState(false);
  const handleCard = (e) => {
    e.preventDefault();
    setDoTransfer(true);
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    setDoTransfer(false);
  };
  return (
    <div>
      <Navbar />
      <div className="transfer__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className={doTransfer ? "transfer__contentHide" : "transfer__content"}>
                <h1 className="transfer__transactionTittle">Search Receiver</h1>
                <div className="transfer__search">
                  <div className="row">
                    <div className="col-2">
                      <BsSearch />
                    </div>
                    <div className="col-8">
                      <input type="text" className="transfer__searchInput" placeholder="Search receiver here" />
                    </div>
                  </div>
                </div>
                <div className="transfer__receiverCard" onClick={handleCard}>
                  <div className="row">
                    <div className="col-2">
                      <Image src="/auth__mockup.png" width={50} height={50} />
                    </div>
                    <div className="col-8">
                      <p className="transfer__nameCard">Samuel Suhi</p>
                      <p className="transfer__numberCard">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Transaction card */}
              <div className={!doTransfer ? "transfer__contentHide" : "transfer__content"}>
                <h1 className="transfer__transactionTittle">Transfer Money</h1>
                <div className="transfer__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src="/auth__mockup.png" width={50} height={50} />
                    </div>
                    <div className="col-8">
                      <p className="transfer__nameCard">Samuel Suhi</p>
                      <p className="transfer__numberCard">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <p className="transfer__information">Type the amount you want to transfer and then press continue to the next steps.</p>
                <form>
                  <input type="text" className="transfer__nominal" placeholder="0.00" />
                  <p className="transfer__saldo">Rp 120.000 Available</p>
                  <div className="transfer__note">
                    <div className="row">
                      <div className="col-2">
                        <BsPen />
                      </div>
                      <div className="col-8">
                        <input type="text" className="transfer__noteInput" placeholder="add some notes" />
                      </div>
                    </div>
                  </div>
                  <button className="transfer__button" onClick={handleTransfer}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}