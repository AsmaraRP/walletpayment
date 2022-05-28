import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { topup } from "../../stores/actions/transaction";
import { getUserById } from "../../stores/actions/user";

export default function Topup({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const idUser = Cookies.get("id");
  const [amount, setAmount] = useState(0);
  const handleAmount = (e) => {
    e.preventDefault();
    setAmount({ ...amount, [e.target.name]: e.target.value });
  };
  const handleTopup = async (e) => {
    try {
      e.preventDefault();
      const resultTopup = await dispatch(topup(amount));
      console.log(resultTopup.action.payload.data.data);
      window.open(resultTopup.action.payload.data.data.redirectUrl);
      await dispatch(getUserById(idUser));
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showModal ? null : (
        <div className="topup__main">
          <div className="container">
            <div className="topup__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="topup__tittle">Top Up</h1>
                </div>
                <div className="col-2">
                  <button className="topup__close" onClick={() => setShowModal(false)}>
                    <BsFillBookmarkXFill />
                  </button>
                </div>
              </div>
              <p className="topup__des">Enter the amount of money, and click submit</p>
              <input type="text" className="topup__input" name="amount" placeholder="__________" onChange={handleAmount} />
              <div className="topup__button">
                <button className="topup__submitButton" onClick={handleTopup}>
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
