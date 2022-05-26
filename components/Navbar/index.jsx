import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillPersonFill, BsBell } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const handleHome = (e) => {
    e.preventDefault();
    router.push("main/home");
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
              <div className="col-2 navbar__image">
                <BsFillPersonFill />
              </div>
              <div className="col-9 navbar__profile">
                <h3 className="navbar__name">Robert Chandler</h3>
                <h3 className="navbar__number">+62 8139 3877 7946</h3>
              </div>
              <div className="col-1 navbar__bell">
                <BsBell />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
