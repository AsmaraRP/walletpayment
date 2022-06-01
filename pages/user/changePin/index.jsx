import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import { useDispatch, useSelector } from "react-redux";
import { confirmpin } from "../../../stores/actions/auth";
import { updatePinUser } from "../../../stores/actions/user";
import { useRouter } from "next/router";

export default function ChangePin() {
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  const [changePin, setChangePin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const [pinE, setPinE] = useState({});
  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(`pin-${parseInt(e.target.name, 10) + 1}`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPinE({ ...pinE, [`pin${e.target.name}`]: e.target.value });
  };
  const handleChangePin = async (e) => {
    try {
      e.preventDefault();
      const pin = parseInt(pinE.pin1 + pinE.pin2 + pinE.pin3 + pinE.pin4 + pinE.pin5 + pinE.pin6);
      await dispatch(confirmpin(pin));
      setChangePin(!changePin);
      etIsError(false);
    } catch (error) {
      setMsg(error.response.data.msg);
      setIsError(true);
    }
  };
  const handleSubmitPin = async (e) => {
    try {
      e.preventDefault();
      const pin = parseInt(pinE.pin7 + pinE.pin8 + pinE.pin9 + pinE.pin10 + pinE.pin11 + pinE.pin12);
      await dispatch(updatePinUser(dataUser.id, { pin: pin }));
      alert("SUCCESS UPDATE PIN");
      router.push(`/user/profile`);
      setIsError(false);
    } catch (error) {
      setMsg(error.response.data.msg);
      setIsError(true);
    }
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
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-1" onChange={(e) => addPin(e)} name="1" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-2" onChange={(e) => addPin(e)} name="2" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-3" onChange={(e) => addPin(e)} name="3" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-4" onChange={(e) => addPin(e)} name="4" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-5" onChange={(e) => addPin(e)} name="5" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-6" onChange={(e) => addPin(e)} name="6" />
                      </div>
                    </div>
                  </div>
                  {!isError ? null : (
                    <div className="login__alert mb-3" role="alert">
                      {msg}
                    </div>
                  )}
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
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-7" onChange={(e) => addPin(e)} name="7" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-8" onChange={(e) => addPin(e)} name="8" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-9" onChange={(e) => addPin(e)} name="9" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-10" onChange={(e) => addPin(e)} name="10" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-11" onChange={(e) => addPin(e)} name="11" />
                      </div>
                      <div className="col-2 pin__form">
                        <input type="text" placeholder="_" className="pin__formInput" maxLength="1" id="pin-12" onChange={(e) => addPin(e)} name="12" />
                      </div>
                    </div>
                  </div>
                  <div className="pin__buttonChange">
                    <button className="pin__button" onClick={handleSubmitPin}>
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
