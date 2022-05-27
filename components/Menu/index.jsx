import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGrid, BsArrowUp, BsPerson, BsPlusLg, BsBoxArrowRight } from "react-icons/bs";

export default function Menu() {
  const [destination, setDestination] = useState("");
  const router = useRouter();
  const handleMenu = (menu) => {
    router.push(`/${menu}`);
    setDestination(menu);
  };
  return (
    <div className="menu__main">
      <div className={destination === "main/home" ? "row menu__optionActive" : "row menu__option"}>
        <div className={destination === "main/home" ? "col-2 menu__iconActive" : "col-2 menu__icon"}>
          <BsGrid />
        </div>
        <div className="col-8 menu__text">
          <button className={destination === "main/home" ? "menu__buttonActive" : "menu__button"} onClick={() => handleMenu("main/home")}>
            Dashboard
          </button>
        </div>
      </div>
      <div className={destination === "main/transfer" ? "row menu__optionActive" : "row menu__option"}>
        <div className={destination === "main/transfer" ? "col-2 menu__iconActive" : "col-2 menu__icon"}>
          <BsArrowUp />
        </div>
        <div className="col-8 menu__text">
          <button className={destination === "main/transfer" ? "menu__buttonActive" : "menu__button"} onClick={() => handleMenu("main/transfer")}>
            Transfer
          </button>
        </div>
      </div>
      <div className="row menu__option">
        <div className="col-2 menu__icon">
          <BsPlusLg />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__button">Top Up</button>
        </div>
      </div>
      <div className={destination === "user/profile" ? "row menu__optionActive menu__spaceLogout" : "row menu__option menu__spaceLogout"}>
        <div className={destination === "user/profile" ? "col-2 menu__iconActive" : "col-2 menu__icon"}>
          <BsPerson />
        </div>
        <div className="col-8 menu__text">
          <button className={destination === "user/profile" ? "menu__buttonActive" : "menu__button"} onClick={() => handleMenu("user/profile")}>
            Profile
          </button>
        </div>
      </div>
      <div className="row menu__option">
        <div className="col-2 menu__icon">
          <BsBoxArrowRight />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__button">Log Out</button>
        </div>
      </div>
    </div>
  );
}
