import React from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { BsArrowUp, BsPlusLg } from "react-icons/bs";
import cookies from "next-cookies";
import { useSelector } from "react-redux";
import axios from "../../../utils/axiosServer";
// import Topup from "../../../components/Topup";

export async function getServerSideProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const dataCookie = cookies(context);
  const result = await axios
    .get("transaction/history?page=1&limit=5&filter=MONTH", {
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
  console.log(result.data);
  return {
    props: {
      data: result.data,
    },
  };
}

export default function Home(props) {
  const router = useRouter();
  console.log(props.data.data);
  const dataUser = useSelector((state) => state.user.data);
  const handleSeeall = (e) => {
    e.preventDefault();
    router.push("/main/history");
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    router.push("/main/transfer");
  };
  return (
    <div>
      <Navbar />
      {/* <Topup /> */}
      <div className="home__main">
        <div className="container">
          <div className="home__content">
            <div className="row">
              <div className="col-3">
                <Menu />
              </div>
              <div className="col-8">
                <div className="home__balance">
                  <div className="row">
                    <div className="col-8">
                      <p className="home__balanceTittle">Balance</p>
                      <p className="home__balanceNominal">{"Rp. " + dataUser.balance}</p>
                      <p className="home__balancePhone">{dataUser.noTelp}</p>
                    </div>
                    <div className="col-4">
                      <div className="home__balanceButton">
                        <button className="home__balanceButtonSet" onClick={handleTransfer}>
                          <BsArrowUp /> Transfer
                        </button>
                      </div>
                      <div className="home__balanceButton">
                        <button className="home__balanceButtonSet">
                          <BsPlusLg /> Top Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__dashboard">
                  <div className="row">
                    <div className="col-6 home__chart">
                      <h3>Grafik</h3>
                    </div>
                    <div className="col-5 home__transaction">
                      <div className="row">
                        <div className="col-8">
                          <h1 className="home__transactionTittle">Transaction History</h1>
                        </div>
                        <div className="col-4">
                          <button className="home__seeAllButton" onClick={handleSeeall}>
                            see all
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
