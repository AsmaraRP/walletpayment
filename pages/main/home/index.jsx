import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import { useRouter } from "next/router";
import Image from "next/dist/client/image";
import { BsArrowUp, BsPlusLg, BsArrowDown } from "react-icons/bs";
import cookies from "next-cookies";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../../utils/axiosServer";
import { dashboard } from "../../../stores/actions/transaction";

export async function getServerSideProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const dataCookie = cookies(context);
  const result = await axios
    .get("transaction/history?page=1&limit=4&filter=MONTH", {
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

export default function Home(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.data);
  useEffect(() => {
    getDataDashboard();
    Cookies.set("history", JSON.stringify(props.data.data));
  }, props.data.data);

  const getDataDashboard = async () => {
    try {
      const dataDashboard = await dispatch(dashboard(dataUser.id));
      // console.log(dataDashboard.action.payload.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [showModal, setShowModal] = useState(false);
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
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="home__main">
        <div className="container">
          <div className="home__content">
            <div className="row">
              <div className="col-3">
                <Menu setShowModal={setShowModal} />
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
                        <button className="home__balanceButtonSet" onClick={() => setShowModal(true)}>
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
                      {props.data.data.map((item) => (
                        <div className="home__cardHistory" key={item.id}>
                          <div className="row">
                            <div className="col-2">
                              <Image src={item.image ? process.env.URL_CLOUDINARY + item.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="home__Historyimage" />
                            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
