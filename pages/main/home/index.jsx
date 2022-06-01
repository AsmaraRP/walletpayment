import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import { useRouter } from "next/router";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";
import Image from "next/image";
import { BsArrowUp, BsPlusLg, BsArrowDown } from "react-icons/bs";
import cookies from "next-cookies";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../../utils/axiosServer";
import { dashboard } from "../../../stores/actions/transaction";

export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context);
    const result = await axios.get("transaction/history?page=1&limit=4&filter=MONTH", {
      headers: {
        Authorization: `Baerer ${dataCookie.token}`,
      },
    });
    return {
      props: {
        data: result.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
}

export default function Home(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.data);
  const [dataDashboard, setDataDashboard] = useState({});
  const [dataIncome, setDataIncome] = useState([]);
  const [dataExpense, setDataExpense] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    getDataDashboard();
    Cookies.set("history", JSON.stringify(props.data.data));
  }, props.data.data);
  useEffect(() => {
    getDataDashboard();
    Cookies.set("history", JSON.stringify(props.data.data));
  }, isUpdate);

  const getDataDashboard = async () => {
    try {
      const resultDashboard = await dispatch(dashboard(dataUser.id));
      setDataDashboard(resultDashboard.action.payload.data.data);
      setDataIncome(dataDashboard.listIncome.map((item) => item.total));
      setDataExpense(dataDashboard.listExpense.map((item) => item.total));
      setIsUpdate(!isUpdate);
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

  // CHART SETTING
  // const incomeDefault = [1300000, 2000000, 200000, 0, 0, 0, 0];
  // const expenseDefault = [320000, 10001, 1570000, 0, 0, 0, 0];
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data: dataIncome,
        // data: dataIncome[3] ? dataIncome : {incomeDefault},
        // yAxisID: "y-axis-1",
      },
      {
        label: "Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: dataExpense,
        // data: dataExpense[3] ? dataExpense : expenseDefault,
        // yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
                      <p className="home__balanceNominal">
                        {dataUser.balance.toLocaleString("en-US", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
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
                      <div className="home__dashboardDes">
                        <div className="row mb-4">
                          <div className="col-6">
                            <div className="home__dashboardArrowDown">
                              <BsArrowDown size={30} />
                            </div>
                            <p className="home__dashboardTypeTransaction">Income</p>
                            <p className="home__dashboardAmount">
                              {dataDashboard.totalIncome
                                ? dataDashboard.totalIncome.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "IDR",
                                  })
                                : "IDR 0"}
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="home__dashboardArrowUp">
                              <BsArrowUp size={30} />
                            </div>
                            <p className="home__dashboardTypeTransaction">Expense</p>
                            <p className="home__dashboardAmount">
                              {dataDashboard.totalExpense
                                ? dataDashboard.totalExpense.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "IDR",
                                  })
                                : "IDR 0"}
                            </p>
                          </div>
                        </div>
                        <button className="home__dashboardChartTittle" onClick={() => getDataDashboard()}>
                          Refresh Chart
                        </button>

                        <Line data={data} options={options} />
                      </div>
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
                              <p className={item.type === "send" ? "home__historyOut" : "home__historyIn"}>
                                {item.type === "send"
                                  ? "- " +
                                    item.amount.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "IDR",
                                    })
                                  : "+ " +
                                    item.amount.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "IDR",
                                    })}
                              </p>
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
