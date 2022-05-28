import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsDownload } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Status() {
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  const dataTransfer = Cookies.get("dataTransfer") ? JSON.parse(Cookies.get("dataTransfer")) : {};
  const [statusTransfer, setStatusTransfer] = useState(true);
  const handleTryagain = (e) => {
    e.preventDefault();
    setStatusTransfer(!statusTransfer);
  };
  const handleHome = (e) => {
    e.preventDefault();
    Cookies.remove("dataTransfer");
    router.push("/main/home");
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
                    <p className="status__msg">We cant transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                  </div>
                )}

                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Amount</p>
                  <p className="status__valueDetail">{"Rp " + dataTransfer.nominal}</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Balance Left</p>
                  <p className="status__valueDetail">{"Rp " + (dataTransfer.balance - dataTransfer.nominal)}</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Date and Time</p>
                  <p className="status__valueDetail">{dataTransfer.date}</p>
                </div>
                <div className="status__detailCard mb-1">
                  <p className="status__tittleDetail">Notes</p>
                  <p className="status__valueDetail">{dataTransfer.note}</p>
                </div>
                <h1 className="status__transactionTittle mt-3">Transfer To</h1>
                <div className="status__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src="/auth__mockup.png" width={50} height={50} />
                    </div>
                    <div className="col-8">
                      <p className="status__nameCard">{dataTransfer.firstName + " " + dataTransfer.lastName}</p>
                      <p className="status__numberCard">{dataTransfer.noTelp}</p>
                    </div>
                  </div>
                </div>
                {statusTransfer ? (
                  <div className="status__ok">
                    <button className="status__downloadButton" onClick={handleTryagain}>
                      <BsDownload /> Download PDF
                    </button>
                    <button className="status__button" onClick={handleHome}>
                      Back to Home
                    </button>
                  </div>
                ) : (
                  <button className="status__button" onClick={handleTryagain}>
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
