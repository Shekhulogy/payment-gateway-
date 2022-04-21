import React from "react";
import "./Donation.css";
import Charity from "../assets/Charity.jpg";
import logo from "../assets/green tree.png";
import { useState } from "react";
import axios from "axios";

function Donation() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    amount: "",
    phone: "",
  });

  function inputChange(event) {
    const { name, value } = event.target;

    setInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    showRazorPay(info);
    e.target.reset();
  }

  console.log(info);

  const showRazorPay = async (displayInfo) => {
    const name = displayInfo.name;
    const email = displayInfo.email;
    const amount = Math.floor(displayInfo.amount);
    const contact = displayInfo.phone;

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
      name,
      email,
      amount,
      contact
    );

    console.log(res);

    if (!res) {
      alert("faild to load !.... please check your internet connection");
    }

    const options = {
      key: "rzp_test_hqK62Jo0VWyt6Y",
      amount: amount * 100,
      currency: "INR",
      name: "Save wildlife",
      description: "Thank you for your contribution",
      image: logo,
      handler: function () {
        alert("Payment Successful !");
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
      theme: {
        color: "#3399cc",
      },
    };
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const loadScript = (src, name, email, amount, contact) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = async () => {
        resolve(true);
        await axios.post("http://localhost:8080/invoice", {
          name,
          email,
          amount,
          contact,
        });
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <>
      <div className="imgContainer">
        <img src={Charity} alt="" id="img-1" />
      </div>
      <div className="content">
        <section className="sec-1">
          <img src={logo} alt="" id="img-2" />
        </section>
        <section className="sec-2">
          <h1> Donate for wildlife</h1>
          <h3>Please give us your helping hand to save wildlife animals</h3>
          <form onSubmit={onSubmit}>
            <div>
              <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
              <input
                onChange={inputChange}
                name="name"
                type="text"
                placeholder="Enter name"
                id="input-1"
              />
            </div>
            <div>
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
              <input
                onChange={inputChange}
                name="email"
                type="email"
                placeholder="Enter email"
                id="input-2"
              />
            </div>

            <section className="sec-3">
              <div>
                <i
                  className="fa fa-rupee-sign fa-lg fa-fw"
                  aria-hidden="true"
                />
                <input
                  onChange={inputChange}
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  id="input-3"
                />
              </div>
              <div>
                <i
                  className="fa fa-phone fa-lg fa-fw"
                  aria-hidden="true"
                  id="phone-icon"
                />
                <input
                  onChange={inputChange}
                  name="phone"
                  type="number"
                  placeholder="Phone no."
                  id="input-4"
                />
              </div>
            </section>

            <button className="donation-btn">Donate Now</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Donation;
