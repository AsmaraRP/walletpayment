import React from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { BsArrowRight, BsBoxArrowRight } from "react-icons/bs";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-8">
              <div className="profile__content">
                <div className="profile__image">
                  <Image src="/auth__mockup.png" width={60} height={60} />
                </div>
                <h1 className="profile__name">Robert Chandler</h1>
                <p className="profile__number">+62 813-9387-7946</p>
                <div className="profile__buttonSet">
                  <button className="profile__navigateButton">
                    <div className="row">
                      <div className="col-10">Personal Information</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton">
                    <div className="row">
                      <div className="col-10">Change Password</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton">
                    <div className="row">
                      <div className="col-10">Change PIN</div>
                      <div className="col-2">
                        <BsArrowRight />
                      </div>
                    </div>
                  </button>
                  <button className="profile__navigateButton">
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
