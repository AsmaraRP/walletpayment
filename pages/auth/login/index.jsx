import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsEnvelope, BsLock } from "react-icons/bs";

export default function Login() {
  const router = useRouter();
  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/auth/signup");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/createpin");
  };
  const handleForgot = (e) => {
    e.preventDefault();
    router.push("/auth/resetpassword");
  };
  const [seePass, setSeePass] = useState(true);
  const handleChangePassword = (e) => {
    e.preventDefault();
    setSeePass(!seePass);
  };
  return (
    <div className="login__main">
      <div className="container login__menu">
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
          <div className="col-5 login__content">
            <h1 className="login__info">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
            <h2 className="login__description">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h2>
            <form className="login__formMenu">
              <div className="row mt-5">
                <div className="col-2 login__icon">
                  <BsEnvelope />
                </div>
                <div className="col-8 login__form">
                  <input type="email" placeholder="Enter your email" className="form-control login__formInput" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-2 login__icon">
                  <BsLock />
                </div>
                <div className="col-7 login__form">
                  <input type={!seePass ? "text" : "password"} placeholder="Enter your password" className="form-control login__formInput" />
                </div>
                <div className="col-1">
                  <button className="login__changeType" onClick={handleChangePassword}>
                    {seePass ? "see" : "hide"}
                  </button>
                </div>
              </div>
              <div className="login__forgot">
                <button className="login__forgotPassword" onClick={handleForgot}>
                  Forgot Password?
                </button>
              </div>
              <div className="login__button">
                <button className="login__login" onClick={handleLogin}>
                  Log In
                </button>
              </div>
              <div className="login__switch">
                <p>
                  Dont have an account?{" "}
                  <button className="login__textbutton" onClick={handleSignup}>
                    Lets Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
