import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";

export default function Informastion() {
  const [doTransfer, setDoTransfer] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    setDoTransfer(false);
  };
  return (
    <div>
      <Navbar />
      <div className="information__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="information__content">
                <h1 className="information__transactionTittle">Personal Information</h1>
                <p className="information__detail">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">First Name</p>
                  <p className="information__valueDetail">Robert</p>
                </div>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">Last Name</p>
                  <p className="information__valueDetail">Chandle</p>
                </div>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">Verified E-mail</p>
                  <p className="information__valueDetail">pewdiepie1@gmail.com</p>
                </div>
                <div className="information__detailCard mb-1">
                  <div className="row">
                    <div className="col-10">
                      <p className="information__tittleDetail">Phone Number</p>
                      <p className="information__valueDetail">+62 813-9387-7946</p>
                    </div>
                    <div className="col-1">
                      <button className="information__button" onClick={handleTransfer}>
                        Manage
                      </button>
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
