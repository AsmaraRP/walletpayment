import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";

function Confirmpin() {
  return (
    <div className="confirmpin__main">
      <div className="container">
        <div className="confirmpin__card">
          <div className="row">
            <div className="col-10">
              <h1 className="confirmpin__tittle">Enter PIN to Transfer</h1>
            </div>
            <div className="col-2">
              <button className="confirmpin__close">
                <BsFillBookmarkXFill />
              </button>
            </div>
          </div>
          <p className="confirmpin__des">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
          <form className="confirmpin__setForm">
            <div className="row">
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
              <div className="col-2 confirmpin__form">
                <input type="text" placeholder="_" className="confirmpin__formInput" maxLength="1" />
              </div>
            </div>
            <div className="confirmpin__button">
              <button className="confirmpin__submitButton"> Continue </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Confirmpin;
