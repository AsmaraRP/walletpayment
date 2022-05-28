import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";

export default function ChangePin() {
  const [changePin, setChangePin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleChangePin = (e) => {
    e.preventDefault();
    setChangePin(!changePin);
  };
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="pin__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className="pin__content">
                <h1 className="pin__transactionTittle">Change PIN</h1>
                {!changePin ? <p className="pin__detail">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p> : <p className="pin__detail">Type your new 6 digits security PIN to use in Zwallet.</p>}
                <form className={changePin ? "" : "pin__setHide"}>
                  <div className="pin__inputPin">
                    <div className="row">
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" />
                      </div>
                    </div>
                  </div>
                  <div className="pin__buttonChange">
                    <button className="pin__button" onClick={handleChangePin}>
                      Continue
                    </button>
                  </div>
                </form>
                <form className={changePin ? "pin__setHide" : ""}>
                  <div className="pin__inputPin">
                    <div className="row">
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" />
                      </div>
                    </div>
                  </div>
                  <div className="pin__buttonChange">
                    <button className="pin__button" onClick={handleChangePin}>
                      Change PIN
                    </button>
                  </div>
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
