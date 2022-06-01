import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";
import { BsBell } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function Navbar() {
  const [bell, setBell] = useState(true);
  const dataHistory = Cookies.get("history") ? JSON.parse(Cookies.get("history")) : {};
  const dataUser = useSelector((state) => state.user);
  const { firstName, lastName, noTelp, image } = dataUser.data;
  const router = useRouter();
  const handleHome = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };
  return (
    <div className="navbar__main">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h1 className="navbar__tittle" onClick={handleHome}>
              Zwallet
            </h1>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-3">
                <Image src={image ? process.env.URL_CLOUDINARY + image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="navbar__image" />
              </div>
              <div className="col-8 navbar__profile">
                <h3 className="navbar__name">{firstName + " " + lastName}</h3>
                <h3 className="navbar__number">{noTelp}</h3>
              </div>
              <div className="col-1 navbar__bell" name="bell" onClick={() => setBell(!bell)}>
                <BsBell />
              </div>
            </div>
          </div>
        </div>
        {bell ? null : (
          <>
            <div className="navbar__bellCard">
              {dataHistory.map((item) => (
                <div className="navbar__cardHistory mb-2" key={item.id}>
                  <div className="row">
                    <div className={item.type === "send" ? "col-2 navbar__arrowUp" : "col-2 navbar__arrowDown"}>{item.type === "send" ? <BsArrowUp size={40} /> : <BsArrowDown size={40} />}</div>
                    <div className="col-7">
                      <p className="navbar__historyName">{item.type == "topup" ? "Top Up" : item.type === "send" ? "Transfer to " + item.firstName : "Accept from " + item.firstName}</p>
                      <p className="navbar__historyAmount">
                        {item.amount.toLocaleString("en-US", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
