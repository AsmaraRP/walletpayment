import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { confirmpin } from "../../stores/actions/auth";
import { BsFillBookmarkXFill } from "react-icons/bs";

function Confirmpin({ showConfirm, setShowConfirm }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [pinE, setPinE] = useState({});
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(`pin-${parseInt(e.target.name, 10) + 1}`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPinE({ ...pinE, [`pin${e.target.name}`]: e.target.value });
  };
  const handleConfirm = async (e) => {
    try {
      e.preventDefault();
      const pin = parseInt(pinE.pin1 + pinE.pin2 + pinE.pin3 + pinE.pin4 + pinE.pin5 + pinE.pin6);
      await dispatch(confirmpin(pin));
      setShowConfirm(false);
      setIsError(false);
    } catch (error) {
      setMsg(error.response.data.msg);
      setIsError(true);
    }
  };
  const handleCloseConfirm = (e) => {
    e.preventDefault();
    setShowConfirm(false);
    router.push("/main/transfer");
  };

  return (
    <>
      {!showConfirm ? null : (
        <div className="confirmpin__main">
          <div className="container">
            <div className="confirmpin__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="confirmpin__tittle">Enter PIN to Transfer</h1>
                </div>
                <div className="col-2">
                  <button className="confirmpin__close" onClick={handleCloseConfirm}>
                    <BsFillBookmarkXFill />
                  </button>
                </div>
              </div>
              <p className="confirmpin__des">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
              <form className="confirmpin__setForm">
                <div className="row mb-4">
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-1" onChange={(e) => addPin(e)} name="1" />
                  </div>
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-2" onChange={(e) => addPin(e)} name="2" />
                  </div>
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-3" onChange={(e) => addPin(e)} name="3" />
                  </div>
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-4" onChange={(e) => addPin(e)} name="4" />
                  </div>
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-5" onChange={(e) => addPin(e)} name="5" />
                  </div>
                  <div className="col-2 confirmpin__form">
                    <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-6" onChange={(e) => addPin(e)} name="6" />
                  </div>
                </div>
                {!isError ? null : (
                  <div className="login__alert" role="alert">
                    {msg}
                  </div>
                )}
                <div className="confirmpin__button">
                  <button className="confirmpin__submitButton" onClick={handleConfirm}>
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirmpin;
