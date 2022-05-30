import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import Topup from "../../../components/Topup";
import { useSelector } from "react-redux";

export default function Informastion() {
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  const [showModal, setShowModal] = useState(false);
  const handleManage = (e) => {
    e.preventDefault();
    router.push("/user/managenumber");
  };

  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="information__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className="information__content">
                <h1 className="information__transactionTittle">Personal Information</h1>
                <p className="information__detail">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">First Name</p>
                  <p className="information__valueDetail">{dataUser.firstName}</p>
                </div>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">Last Name</p>
                  <p className="information__valueDetail">{dataUser.lastName}</p>
                </div>
                <div className="information__detailCard mb-1">
                  <p className="information__tittleDetail">Verified E-mail</p>
                  <p className="information__valueDetail">{dataUser.email}</p>
                </div>
                <div className="information__detailCard mb-1">
                  <div className="row">
                    <div className="col-10">
                      <p className="information__tittleDetail">Phone Number</p>
                      <p className="information__valueDetail">{dataUser.noTelp ? dataUser.noTelp : "Add your number"}</p>
                    </div>
                    <div className="col-1">
                      <button className="information__button" onClick={handleManage}>
                        Manage
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
