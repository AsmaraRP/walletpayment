import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsPerson, BsEnvelope, BsLock } from "react-icons/bs";

export default function Signup() {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/auth/createpin");
  };
  const [seePass, setSeePass] = useState(true);
  const handleChangePassword = (e) => {
    e.preventDefault();
    setSeePass(!seePass);
  };
  return (
    <div className="signin__main">
      <div className="container signin__menu">
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
          <div className="col-5 signin__content">
            <h1 className="signin__info">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
            <h2 className="signin__description">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h2>
            <form className="signin__formMenu">
              <div className="row">
                <div className="col-2 signin__icon">
                  <BsPerson />
                </div>
                <div className="col-8 signin__form">
                  <input type="text" placeholder="Enter your firstname" className="form-control signin__formInput" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-2 signin__icon">
                  <BsPerson />
                </div>
                <div className="col-8 signin__form">
                  <input type="text" placeholder="Enter your lastname" className="form-control signin__formInput" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-2 signin__icon">
                  <BsEnvelope />
                </div>
                <div className="col-8 signin__form">
                  <input type="email" placeholder="Enter your email" className="form-control signin__formInput" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-2 signin__icon">
                  <BsLock />
                </div>
                <div className="col-7 signin__form">
                  <input type={!seePass ? "text" : "password"} placeholder="Create your password" className="form-control signin__formInput" />
                </div>
                <div className="col-1">
                  <button className="signin__changeType" onClick={handleChangePassword}>
                    {seePass ? "see" : "hide"}
                  </button>
                </div>
                <div className="signin__button">
                  <button className="signin__signIn" onClick={handleSignup}>
                    Sign Up
                  </button>
                </div>
                <div className="signin__switch">
                  <p>
                    Already have an account?
                    <button className="signin__textbutton" onClick={handleLogin}>
                      Lets Login
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
