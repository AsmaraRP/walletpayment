import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsTelephone, BsTrash } from "react-icons/bs";
import Topup from "../../../components/Topup";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUserById } from "../../../stores/actions/user";

export default function ManageNumber() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const dataUser = useSelector((state) => state.user.data);
  const [number, setNumber] = useState(null);
  const handleInputNumber = (e) => {
    e.preventDefault();
    setNumber({ [e.target.name]: `+62${e.target.value}` });
  };
  const handleAddNumber = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateUser(dataUser.id, number));
      await dispatch(getUserById(dataUser.id));
      alert("SUCCESS UPDATING NUMBER");
      router.push(`/user/profile`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteNumber = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateUser(dataUser.id, { noTelp: "" }));
      await dispatch(getUserById(dataUser.id));
      alert("SUCCESS DELETING NUMBER");
      router.push(`/user/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="phone__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className={dataUser.noTelp == null ? "phone__content" : "phone__hide"}>
                <h1 className="phone__transactionTittle">Add Phone Number</h1>
                <p className="phone__detail">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                <form>
                  <div className="phone__formFormat mb-5">
                    <div className="row">
                      <div className="col-3  phone__icon">
                        <BsTelephone />
                      </div>
                      <div className="col-1 phone__code">
                        <p>+62</p>
                      </div>
                      <div className="col-8 phone__form">
                        <input type="text" placeholder="Enter your phone number" className="phone__formInput" name="noTelp" onChange={handleInputNumber} />
                      </div>
                    </div>
                  </div>
                  <div className="phone__buttonChange">
                    <button className="phone__button" onClick={handleAddNumber}>
                      Add Phone Number
                    </button>
                  </div>
                </form>
              </div>
              <div className={dataUser.noTelp != null ? "phone__content" : "phone__hide"}>
                <h1 className="phone__transactionTittle">Manage Phone Number</h1>
                <p className="phone__detail">You can only delete the phone number and then you must add another phone number.</p>
                <div className="phone__detailCard mb-1">
                  <div className="row">
                    <div className="col-11">
                      <p className="phone__tittleDetail">Primary</p>
                      <p className="phone__valueDetail">{dataUser.noTelp}</p>
                    </div>
                    <div className="col-1">
                      <button className="phone__delete" onClick={handleDeleteNumber}>
                        <BsTrash />
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
