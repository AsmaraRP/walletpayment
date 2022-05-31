import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { updateUser, getUserById } from "../../stores/actions/user";

export default function Edit({ showEdit, setShowEdit }) {
  const dispatch = useDispatch();
  const idUser = Cookies.get("id");
  const [form, setForm] = useState({});
  const handleFormEdit = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateUser(idUser, form));
      await dispatch(getUserById(idUser));
      alert("SUCCESS UPDATING PROFILE");
      setShowEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showEdit ? null : (
        <div className="edit__main">
          <div className="container">
            <div className="edit__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="edit__tittle">Edit Profile</h1>
                </div>
                <div className="col-2">
                  <button className="edit__close" onClick={() => setShowEdit(false)}>
                    <BsFillBookmarkXFill />
                  </button>
                </div>
              </div>
              <p className="edit__des">Edit your profile name</p>
              <form>
                <h1 className="edit__label">First Name</h1>
                <input type="text" className="edit__input" name="firstName" placeholder="Edit your firstName" onChange={handleFormEdit} />
                <h1 className="edit__label">Last Name</h1>
                <input type="text" className="edit__input" name="lastName" placeholder="Edit your lastName" onChange={handleFormEdit} />
                <div className="edit__button">
                  <button className="edit__submitButton" onClick={handleEdit}>
                    Submit
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
