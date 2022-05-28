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

export async function getServerSideProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const dataCookie = cookies(context);
  const result = await axios
    .get("user?page=5&limit=4&search=&sort=firstName ASC", {
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

export default function Transfer(props) {
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  const dataListUser = props.data.data;
  const [doTransfer, setDoTransfer] = useState(false);
  const [dataTransfer, setDataTransfer] = useState({});
  const handleCard = async (item) => {
    try {
      setDataTransfer({ ...item });
      setDoTransfer(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDataTransfer = (e) => {
    e.preventDefault();
    e.preventDefault();
    setDataTransfer({ ...dataTransfer, balance: dataUser.balance, date: moment().format("MMMM Do YYYY, h:mm:ss a"), [e.target.name]: e.target.value });
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    Cookies.set("dataTransfer", JSON.stringify(dataTransfer));
    router.push("/main/confirmation");
  };
  return (
    <div>
      <Navbar />
      <div className="transfer__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Menu />
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
                      <input type="text" className="transfer__searchInput" placeholder="Search receiver here" />
                    </div>
                  </div>
                </div>
                {dataListUser.map((item) => (
                  <div className="transfer__receiverCard" onClick={() => handleCard(item)} key={item.id}>
                    <div className="row">
                      <div className="col-2">
                        <Image src="/auth__mockup.png" alt="user image" width={50} height={50} />
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
                      <Image src="/auth__mockup.png" alt="user image" width={50} height={50} />
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
                  <p className="transfer__saldo">{"Rp " + dataUser.balance + " Available"}</p>
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
