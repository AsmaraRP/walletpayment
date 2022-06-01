import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import { BsArrowRight, BsBoxArrowRight, BsPencil, BsTrash, BsUpload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../utils/axios";
import Edit from "../../../components/Edit";
import { getUserById } from "../../../stores/actions/user";
import Upload from "../../../components/upload";

export default function Profile() {
  const dispatch = useDispatch;
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  console.log(dataUser.id);
  useEffect(() => {
    getDataByUserId(), [];
  });
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(dataUser.id));
      s;
    } catch (error) {
      console.log(error);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handleNavigate = (target) => {
    router.push(`/user/${target}`);
  };
  const handleDeleteImage = async (e) => {
    try {
      e.preventDefault();
      await axios.delete(`/user/image/${dataUser.id}`);
      alert("SUCCESS DELETING IMAGE, PLEASE RE-LOGIN FOR UPDATING IMAGE");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    setShowImage(true);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      Cookies.remove("token");
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Edit showEdit={showEdit} setShowEdit={setShowEdit} />
      <Upload showImage={showImage} setShowImage={setShowImage} />
      <Navbar />
      <div className="profile__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className="profile__content">
                <div className="profile__image">
                  <Image src={dataUser.image ? process.env.URL_CLOUDINARY + dataUser.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="home__Historyimage" />
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-3">
                    <p className="profile__number">
                      <button className="profile__editButton" onClick={() => setShowEdit(true)}>
                        <BsPencil /> Edit
                      </button>
                    </p>
                  </div>
                  <div className="col-3">
                    <p className="profile__number">
                      <button className="profile__editButton" onClick={dataUser.image ? handleDeleteImage : handleUploadImage}>
                        {dataUser.image ? <BsTrash /> : <BsUpload />} {dataUser.image ? "Delete Image" : "Upload Image"}
                      </button>
                    </p>
                  </div>
                </div>

                <h1 className="profile__name">{dataUser.firstName + " " + dataUser.lastName}</h1>
                <p className="profile__number">{dataUser.noTelp ? dataUser.noTelp : "number is not added yet"}</p>
                <div className="profile__buttonSet">
                  <button className="profile__navigateButton" onClick={() => handleNavigate("information")}>
                    <div className="row">
                      <div className="col-10">Personal Information</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton" onClick={() => handleNavigate("changepassword")}>
                    <div className="row">
                      <div className="col-10">Change Password</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton" onClick={() => handleNavigate("changepin")}>
                    <div className="row">
                      <div className="col-10">Change PIN</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton" onClick={handleLogout}>
                    <div className="row">
                      <div className="col-10">Logout</div>
                      <div className="col-2">
                        <BsBoxArrowRight />
                      </div>
                    </div>
                  </button>
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
