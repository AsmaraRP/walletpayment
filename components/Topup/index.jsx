import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";

function Topup() {
  return (
    <div className="topup__main">
      <div className="container">
        <div className="topup__card">
          <div className="row">
            <div className="col-10">
              <h1 className="topup__tittle">Top Up</h1>
            </div>
            <div className="col-2">
              <button className="topup__close">
                <BsFillBookmarkXFill />
              </button>
            </div>
          </div>
          <p className="topup__des">Enter the amount of money, and click submit</p>
          <input type="text" className="topup__input" placeholder="__________" />
          <div className="topup__button">
            <button className="topup__submitButton"> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topup;
