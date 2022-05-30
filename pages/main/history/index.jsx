import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import cookies from "next-cookies";
import axios from "../../../utils/axiosServer";

export async function getServerSideProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const dataCookie = cookies(context);
  const result = await axios
    .get("transaction/history?page=1&limit=6&filter=MONTH", {
      headers: {
        Authorization: `Baerer ${dataCookie.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return {
    props: {
      data: result.data,
    },
  };
}

export default function History(props) {
  console.log(props.data.data);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="history__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className="history__content">
                <div className="row mb-2">
                  <div className="col-8">
                    <h1 className="history__transactionTittle">Transaction History</h1>
                  </div>
                  <div className="col-4">
                    <select className="history__filter" defaultValue="">
                      <option selected>---Select Filter---</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                {props.data.data.map((item) => (
                  <div className="home__cardHistory" key={item.id}>
                    <div className="row">
                      <div className="col-2">Img</div>
                      <div className="col-4">
                        <p className="home__historyName">{item.firstName + " " + item.lastName}</p>
                        <p className="home__historyStatus">{item.type === "send" ? "Transfer" : item.type === "topup" ? "topup" : "Accepted"}</p>
                      </div>
                      <div className="col-5">
                        <p className={item.type === "send" ? "home__historyOut" : "home__historyIn"}>{item.type === "send" ? "- " + item.amount : "+ " + item.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
