import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import Topup from "../../../components/Topup";
import cookies from "next-cookies";
import axios from "../../../utils/axiosServer";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context);
    const params = context.query;
    const keyFilter = params.filter ? params.filter : " ";
    const keyPage = !params.page ? 1 : params.page <= 1 ? 1 : params.page;
    const result = await axios.get(`transaction/history?page=${keyPage}&limit=5&filter=${keyFilter}`, {
      headers: {
        Authorization: `Baerer ${dataCookie.token}`,
      },
    });
    return {
      props: {
        data: result.data ? result.data : {},
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

export default function History(props) {
  console.log(props.data.data);
  const router = useRouter();
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleFilter = async (e) => {
    setFilter(e.target.value);
    console.log(filter);
    router.push(`/main/history?page=${page}&filter=${filter}`);
  };
  const handlePageUp = (e) => {
    e.preventDefault();
    setPage(page + 1);
    if (page < 1) {
      setPage(1);
    }
    router.push(`/main/history?page=${page}&filter=`);
  };

  const handlePageDown = (e) => {
    e.preventDefault();
    setPage(page - 1);
    if (page < 1) {
      setPage(1);
    }
    router.push(`/main/history?page=${page}&filter=`);
  };

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
                    <select className="history__filter" defaultValue="" onClick={handleFilter}>
                      <option selected value="">
                        ---Select Filter---
                      </option>
                      <option value="WEEK">WEEKLY</option>
                      <option value="MONTH">MONTHLY</option>
                      <option value="YEAR">ANUAL</option>
                    </select>
                  </div>
                </div>
                {!props.data.data
                  ? null
                  : props.data.data.map((item) => (
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
                <div className="history__pagination">
                  <div className="row">
                    <div className="col-3">
                      <button className="history__buttonPagination" onClick={handlePageDown}>
                        <BiArrowFromRight />
                      </button>
                    </div>
                    <div className="col-3">
                      <button className="history__buttonPagination" onClick={handlePageUp}>
                        <BiArrowFromLeft />
                      </button>
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
