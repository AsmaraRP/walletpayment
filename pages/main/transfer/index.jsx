import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from "../../../components/Menu";
import Navbar from "../../../components/Navbar";
import { BsSearch, BsPen } from "react-icons/bs";
import cookies from "next-cookies";
import { useSelector } from "react-redux";
import axios from "../../../utils/axiosServer";
import Cookies from "js-cookie";
import moment from "moment";
import Topup from "../../../components/Topup";

export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context);
    const params = context.query;
    const keySearch = params.search ? params.search : "";
    // const page = !params?.page ? 1 : params.page;
    const result = await axios.get(`user?page=1&limit=4&search=${keySearch}&sort=firstName ASC`, {
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

export default function Transfer(props) {
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  const dataListUser = props.data.data;
  const [showModal, setShowModal] = useState(false);
  const [doTransfer, setDoTransfer] = useState(false);
  const [search, setSearch] = useState({});
  const [dataTransfer, setDataTransfer] = useState("");
  const handleCard = async (item) => {
    try {
      setDataTransfer({ ...item });
      setDoTransfer(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
    router.push(`/main/transfer?search=${search}`);
  };
  const handleDataTransfer = (e) => {
    e.preventDefault();
    setDataTransfer({ ...dataTransfer, balance: dataUser.balance, date: moment().format("MMMM Do YYYY, h:mm:ss a"), [e.target.name]: e.target.value });
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    if (dataTransfer.nominal <= 1000) {
      alert("Amout Must Be More Than 1000");
    } else {
      Cookies.set("dataTransfer", JSON.stringify(dataTransfer));
      router.push("/main/confirmation");
    }
  };
  return (
    <div>
      <Topup showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <div className="transfer__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu setShowModal={setShowModal} />
            </div>
            <div className="col-8">
              <div className={doTransfer ? "transfer__contentHide" : "transfer__content"}>
                <h1 className="transfer__transactionTittle">Search Receiver</h1>
                <div className="transfer__search">
                  <div className="row">
                    <div className="col-2">
                      <BsSearch />
                    </div>
                    <div className="col-8">
                      <input type="text" className="transfer__searchInput" placeholder="Search receiver here" name="search" onKeyPress={handleSearch} />
                    </div>
                  </div>
                </div>
                {dataListUser.map((item) => (
                  <div className="transfer__receiverCard" onClick={() => handleCard(item)} key={item.id}>
                    <div className="row">
                      <div className="col-2">
                        <Image src={item.image ? process.env.URL_CLOUDINARY + item.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="home__Historyimage" />
                      </div>
                      <div className="col-8">
                        <p className="transfer__nameCard">{item.firstName + " " + item.lastName}</p>
                        <p className="transfer__numberCard">{item.noTelp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Transaction card */}
              <div className={!doTransfer ? "transfer__contentHide" : "transfer__content"}>
                <h1 className="transfer__transactionTittle">Transfer Money</h1>
                <div className="transfer__receiverCard">
                  <div className="row">
                    <div className="col-2">
                      <Image src={dataTransfer.image ? process.env.URL_CLOUDINARY + dataTransfer.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="home__Historyimage" />
                    </div>
                    <div className="col-8">
                      <p className="transfer__nameCard">{dataTransfer.firstName + " " + dataTransfer.lastName}</p>
                      <p className="transfer__numberCard">{dataTransfer.noTelp}</p>
                    </div>
                  </div>
                </div>
                <p className="transfer__information">Type the amount you want to transfer and then press continue to the next steps.</p>
                <form>
                  <input type="text" className="transfer__nominal" placeholder="0.00" name="nominal" onChange={handleDataTransfer} />
                  <p className="transfer__saldo">
                    {dataUser.balance.toLocaleString("en-US", {
                      style: "currency",
                      currency: "IDR",
                    }) + " Available"}
                  </p>
                  <div className="transfer__note">
                    <div className="row">
                      <div className="col-2">
                        <BsPen />
                      </div>
                      <div className="col-8">
                        <input type="text" className="transfer__noteInput" placeholder="add some notes" name="note" onChange={handleDataTransfer} />
                      </div>
                    </div>
                  </div>
                  <button className="transfer__button" onClick={handleTransfer}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
