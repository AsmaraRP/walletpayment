import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";

export default function Confirmation() {
  const router = useRouter();
  const [doTransfer, setDoTransfer] = useState(false);
  const handleTransfer = (e) => {
    e.preventDefault();
    router.push("/main/status");
  };
  return (
    <div>
      <Navbar />
      <div className="confirmation__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="confirmation__content">
                <h1 className="confirmation__transactionTittle">Transfer To</h1>
                <div className="confirmation__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src="/auth__mockup.png" width={50} height={50} />
                    </div>
                    <div className="col-8">
                      <p className="confirmation__nameCard">Samuel Suhi</p>
                      <p className="confirmation__numberCard">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <h1 className="confirmation__transactionTittle mt-2">Details</h1>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Amount</p>
                  <p className="confirmation__valueDetail">Rp100.000</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Balance Left</p>
                  <p className="confirmation__valueDetail">Rp20.000</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Date and Time</p>
                  <p className="confirmation__valueDetail">May 11, 2020 - 12.20</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Notes</p>
                  <p className="confirmation__valueDetail">For buying some socks</p>
                </div>
                <button className="confirmation__button" onClick={handleTransfer}>
                  Continue
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
