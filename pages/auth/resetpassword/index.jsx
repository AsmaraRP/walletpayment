import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsEnvelope, BsLock } from "react-icons/bs";

export default function ResetPassword() {
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);
  const handleReset = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };
  const [seePass, setSeePass] = useState(true);
  const [seePassConfirm, setSeePassConfirm] = useState(true);
  const handleChangePassword = (e) => {
    e.preventDefault();
    setSeePass(!seePass);
  };
  const handleChangePasswordConfirm = (e) => {
    e.preventDefault();
    setSeePassConfirm(!seePassConfirm);
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirm(true);
  };
  return (
    <div className="resetpass__main">
      <div className="container resetpass__menu">
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
          <div className={!confirm ? "col-5 resetpass__contenthide" : "resetpass__swab"}>
            <h1 className="resetpass__info">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h1>
            <h2 className="resetpass__description">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h2>
            <form className="resetpass__formMenu">
              <div className="row mt-5">
                <div className="col-2 resetpass__icon">
                  <BsEnvelope />
                </div>
                <div className="col-8 resetpass__form">
                  <input type="email" placeholder="Enter your email" className="form-control resetpass__formInput" />
                </div>
              </div>
              <div className="resetpass__button">
                <button className="resetpass__resetpass" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </form>
          </div>

          <div className={!confirm ? "resetpass__swab" : "col-5 resetpass__contenthide"}>
            <h1 className="resetpass__info">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h1>
            <h2 className="resetpass__description">Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</h2>
            <div className="resetpass__buttonhide">
              <form className="resetpass__formMenuHide">
                <div className="row">
                  <div className="col-2 resetpass__icon">
                    <BsLock />
                  </div>
                  <div className="col-7 resetpass__form">
                    <input type={!seePass ? "text" : "password"} placeholder="Create new password" className="form-control resetpass__formInput" />
                  </div>
                  <div className="col-1">
                    <button className="resetpass__changeType" onClick={handleChangePassword}>
                      {seePass ? "see" : "hide"}
                    </button>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-2 resetpass__icon">
                    <BsLock />
                  </div>
                  <div className="col-7 resetpass__form">
                    <input type={!seePassConfirm ? "text" : "password"} placeholder="Confirm new password" className="form-control resetpass__formInput" />
                  </div>
                  <div className="col-1">
                    <button className="resetpass__changeType" onClick={handleChangePasswordConfirm}>
                      {seePassConfirm ? "see" : "hide"}
                    </button>
                  </div>
                </div>
                <div className="resetpass__button">
                  <button className="resetpass__resetpass" onClick={handleReset}>
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
