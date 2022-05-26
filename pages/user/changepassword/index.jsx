import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsLock } from "react-icons/bs";

export default function ChangePassword() {
  const [seePass1, setSeePass1] = useState(true);
  const [seePass2, setSeePass2] = useState(true);
  const [seePass3, setSeePass3] = useState(true);
  const handleChangePassword1 = (e) => {
    e.preventDefault();
    setSeePass1(!seePass1);
  };
  const handleChangePassword2 = (e) => {
    e.preventDefault();
    setSeePass2(!seePass2);
  };
  const handleChangePassword3 = (e) => {
    e.preventDefault();
    setSeePass3(!seePass3);
  };
  return (
    <div>
      <Navbar />
      <div className="password__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="password__content">
                <h1 className="password__transactionTittle">Change Password</h1>
                <p className="password__detail">You must enter your current password and then type your new password twice.</p>
                <form>
                  <div className="password__formFormat mb-5">
                    <div className="row">
                      <div className="col-3  password__icon">
                        <BsLock />
                      </div>
                      <div className="col-7 password__form">
                        <input type={!seePass1 ? "text" : "password"} placeholder="Current password" className="password__formInput" />
                      </div>
                      <div className="col-1">
                        <button className="password__changeType" onClick={handleChangePassword1}>
                          {seePass1 ? "see" : "hide"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="password__formFormat mb-5">
                    <div className="row">
                      <div className="col-3  password__icon">
                        <BsLock />
                      </div>
                      <div className="col-7 password__form">
                        <input type={!seePass2 ? "text" : "password"} placeholder="New password" className="password__formInput" />
                      </div>
                      <div className="col-1">
                        <button className="password__changeType" onClick={handleChangePassword2}>
                          {seePass2 ? "see" : "hide"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="password__formFormat mb-5">
                    <div className="row">
                      <div className="col-3  password__icon">
                        <BsLock />
                      </div>
                      <div className="col-7 password__form">
                        <input type={!seePass3 ? "text" : "password"} placeholder="Repeat new password" className="password__formInput" />
                      </div>
                      <div className="col-1">
                        <button className="password__changeType" onClick={handleChangePassword3}>
                          {seePass3 ? "see" : "hide"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="password__buttonChange">
                    <button className="password__button">Change</button>
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
