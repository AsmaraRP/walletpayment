import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { BsLock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Topup from "../../../components/Topup";
import { updatePasswordUser } from "../../../stores/actions/user";

export default function ChangePassword() {
  const router = useRouter();
  const [seePass1, setSeePass1] = useState(true);
  const [seePass2, setSeePass2] = useState(true);
  const [seePass3, setSeePass3] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.data);
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

  const handleForm = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updatePasswordUser(dataUser.id, form));
      alert("SUCCESS UPDATING PASSWORD");
      router.push(`/user/profile`);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.msg);
      setIsError(true);
    }
  };
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="password__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
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
                        <input type={!seePass1 ? "text" : "password"} placeholder="Current password" className="password__formInput" onChange={handleForm} name="oldPassword" />
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
                        <input type={!seePass2 ? "text" : "password"} placeholder="New password" className="password__formInput" onChange={handleForm} name="newPassword" />
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
                        <input type={!seePass3 ? "text" : "password"} placeholder="Repeat new password" className="password__formInput" onChange={handleForm} name="confirmPassword" />
                      </div>
                      <div className="col-1">
                        <button className="password__changeType" onClick={handleChangePassword3}>
                          {seePass3 ? "see" : "hide"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {!isError ? null : (
                    <div className="login__alert" role="alert">
                      {msg}
                    </div>
                  )}
                  <div className="password__buttonChange mt-2">
                    <button className="password__button" onClick={handleSubmit}>
                      Change
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
