import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { transfer } from "../../../stores/actions/transaction";
import { getUserById } from "../../../stores/actions/user";
import Topup from "../../../components/Topup";
import Confirmpin from "../../../components/Confirmpin";

export default function Confirmation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const idUser = Cookies.get("id");
  const dataTransfer = Cookies.get("dataTransfer") ? JSON.parse(Cookies.get("dataTransfer")) : {};
  const doTransfer = { receiverId: dataTransfer.id, amount: dataTransfer.nominal, notes: dataTransfer.note };
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(true);
  const handleTransfer = async (e) => {
    try {
      e.preventDefault();
      const resultTransfer = await dispatch(transfer(doTransfer));
      console.log(resultTransfer.action.payload.data.data);
      await dispatch(getUserById(idUser));
      router.push("/main/status");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Confirmpin showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
      <Navbar />
      <div className="confirmation__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className="confirmation__content">
                <h1 className="confirmation__transactionTittle">Transfer To</h1>
                <div className="confirmation__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src={dataTransfer.image ? process.env.URL_CLOUDINARY + dataTransfer.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="home__Historyimage" />
                    </div>
                    <div className="col-8">
                      <p className="confirmation__nameCard">{dataTransfer.firstName + " " + dataTransfer.lastName}</p>
                      <p className="confirmation__numberCard">{dataTransfer.noTelp}</p>
                    </div>
                  </div>
                </div>
                <h1 className="confirmation__transactionTittle mt-2">Details</h1>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Amount</p>
                  <p className="confirmation__valueDetail">{"Rp " + dataTransfer.nominal}</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Balance Left</p>
                  <p className="confirmation__valueDetail">{"Rp " + dataTransfer.balance}</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Date and Time</p>
                  <p className="confirmation__valueDetail">{dataTransfer.date}</p>
                </div>
                <div className="confirmation__detailCard mb-1">
                  <p className="confirmation__tittleDetail">Notes</p>
                  <p className="confirmation__valueDetail">{dataTransfer.note}</p>
                </div>
                <button className="confirmation__button" onClick={handleTransfer}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
