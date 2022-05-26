import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGrid, BsArrowUp, BsPerson, BsPlusLg, BsArrowRightSquare } from "react-icons/bs";

export default function Menu() {
  const router = useRouter();
  const handleMenu = (menu) => {
    router.push(`main/${menu}`);
  };
  return (
    <div className="menu__main">
      <div className="row menu__optionActive">
        <div className="col-2 menu__iconActive">
          <BsGrid />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__buttonActive">Dashboard</button>
        </div>
      </div>
      <div className="row menu__option">
        <div className="col-2 menu__icon">
          <BsArrowUp />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__button">Transfer</button>
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
      <div className="row menu__option menu__spaceLogout">
        <div className="col-2 menu__icon">
          <BsPerson />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__button">Profile</button>
        </div>
      </div>
      <div className="row menu__option">
        <div className="col-2 menu__icon">
          <BsArrowRightSquare />
        </div>
        <div className="col-8 menu__text">
          <button className="menu__button">Log Out</button>
        </div>
      </div>
    </div>
  );
}
