import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsTelephone, BsTrash } from "react-icons/bs";
import Topup from "../../../components/Topup";

export default function ManageNumber() {
  const [addNumber, setAddNumber] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleAddNumber = (e) => {
    e.preventDefault();
    setAddNumber(!addNumber);
  };

  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="phone__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className={addNumber ? "phone__content" : "phone__hide"}>
                <h1 className="phone__transactionTittle">Add Phone Number</h1>
                <p className="phone__detail">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                <form>
                  <div className="phone__formFormat mb-5">
                    <div className="row">
                      <div className="col-3  phone__icon">
                        <BsTelephone />
                      </div>
                      <div className="col-1 phone__code">
                        <p>+62</p>
                      </div>
                      <div className="col-8 phone__form">
                        <input type="text" placeholder="Enter your phone number" className="phone__formInput" />
                      </div>
                    </div>
                  </div>
                  <div className="phone__buttonChange">
                    <button className="phone__button" onClick={handleAddNumber}>
                      Add Phone Number
                    </button>
                  </div>
                </form>
              </div>
              <div className={!addNumber ? "phone__content" : "phone__hide"}>
                <h1 className="phone__transactionTittle">Manage Phone Number</h1>
                <p className="phone__detail">You can only delete the phone number and then you must add another phone number.</p>
                <div className="phone__detailCard mb-1">
                  <div className="row">
                    <div className="col-11">
                      <p className="phone__tittleDetail">Primary</p>
                      <p className="phone__valueDetail">+62 813 9387 7946</p>
                    </div>
                    <div className="col-1">
                      <button className="phone__delete" onClick={handleAddNumber}>
                        <BsTrash />
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
