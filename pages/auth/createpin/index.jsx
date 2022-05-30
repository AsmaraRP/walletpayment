import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createpin } from "../../../stores/actions/auth";

export default function CreatePin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);
  const [pinE, setPinE] = useState({});
  const dataUser = useSelector((state) => state.user.data);
  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(`pin-${parseInt(e.target.name, 10) + 1}`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPinE({ ...pinE, [`pin${e.target.name}`]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };
  const handleConfirm = async (e) => {
    try {
      e.preventDefault();
      const pin = parseInt(pinE.pin1 + pinE.pin2 + pinE.pin3 + pinE.pin4 + pinE.pin5 + pinE.pin6);
      await dispatch(createpin(dataUser.id, { pin }));
      setConfirm(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="createpin__main">
      <div className="container createpin__menu">
        <div className="row">
          <div className="col-7 auth__banner">
            <h1 className="auth__title">Zwallet</h1>
            <div className="auth__mockup">
              <Image src="/auth__mockup.png" alt="mockup" width={500} height={550} />
            </div>
            <h2 className="auth__motto">App that Covering Banking Needs.</h2>
            <p className="auth__description">
              Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
            </p>
          </div>
          <div className={!confirm ? "col-5 createpin__content" : "createpin__swab"}>
            <h1 className="createpin__info">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h1>
            <h2 className="createpin__description">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and dont tell anyone about your Zwallet account password and the PIN.</h2>
            <form className="createpin__formMenu">
              <div className="row">
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-1" onChange={(e) => addPin(e)} name="1" />
                </div>
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-2" onChange={(e) => addPin(e)} name="2" />
                </div>
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-3" onChange={(e) => addPin(e)} name="3" />
                </div>
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-4" onChange={(e) => addPin(e)} name="4" />
                </div>
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-5" onChange={(e) => addPin(e)} name="5" />
                </div>
                <div className="col-2 createpin__form">
                  <input type="text" placeholder="_" className="createpin__formInput" maxLength="1" id="pin-6" onChange={(e) => addPin(e)} name="6" />
                </div>
              </div>
              <div className="createpin__button">
                <button className="createpin__createpin" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
          <div className={!confirm ? "createpin__swab" : "col-5 createpin__contenthide"}>
            <div className="createpin__successSign">
              <Image src="/success.png" alt="succes sign" width={50} height={50} />
            </div>
            <h1 className="createpin__info">Your PIN Was Successfully Created</h1>
            <h2 className="createpin__description">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!.</h2>
            <div className="createpin__buttonhide">
              <button className="createpin__createpin" onClick={handleLogin}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
