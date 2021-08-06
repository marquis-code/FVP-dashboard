import React, { useState, useEffect } from "react";
import Input from "../../Common/Input";
import Spiner from "../../Common/Sign-in-spinner";
import url from "../../Common/get-url";
import { useAuth } from "../../Context/Auth-context";
import payStackScript from "../../Common/payStackScript";
import depositeFee from "../../Common/depositfee";
import { useHistory, Link } from "react-router-dom";
import { moneyFormat } from "../../Common/moneyFormat";

const Deposit = () => {
  let paymentProvider = {
    provider: "paystack",
  };
  const [form, setForm] = useState({
    amount: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { authTokens } = useAuth();
  const [profile, setProfile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(url(`users/me`), {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    }).then((res) => {
      res.json().then(function (data) {
        setProfile(data);
      });
    });
    payStackScript();
  }, [authTokens]);

  const handlePayment = (e) => {
    e.preventDefault();
    setSubmitted(true);
    fetch(url(`payments`), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${authTokens}`,
      },
      body: JSON.stringify(paymentProvider),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSubmitted(false);
        } else if (res.status === 400) {
          setSubmitted(false);
        } else if (res.status === 401) {
          // eraseCookie("tokens");
          history.push("/login");
        }
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        paymentProvider = {
          id: data.id,
          ref: data.ref,
        };
        return paymentProvider;
        // console.log(data);
      })
      .then(() => {
        let handler = window.PaystackPop.setup({
          key: "pk_live_17f1769303d7274eb1190d8b0a7c319982273d06",
          email: profile.email,
          amount: depositeFee(form.amount * 100),
          firstname: profile.first_name,
          lastname: profile.lastname,
          ref: paymentProvider.ref,

          // onClose: function () {},
          callback: function (response) {
            const payload = { verified: true };
            fetch(url(`payments/${paymentProvider.id}`), {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${authTokens}`,
              },
              body: JSON.stringify(payload),
            }).then((res) => {
              res.json().then(function (data) {
                window.location.reload();
              });
            });
          },
        });
        handler.openIframe();
      })
      .catch(function (data) {
        // console.log(data);
      })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw res;
        return res.json();
      })

      .then((data) => {
        // console.log(data);
      })

      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <>
      <div className="form-container">
        <div className="withdraw-header">
          <h2>Deposit</h2>
        </div>
        <form onSubmit={handlePayment}>
          <div className="input-contain">
            <label>Amount to Deposit</label>
            <Input
              type="number"
              placeHolder="0.00"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          <p>
            {form.amount > 0 && (
              <span style={{ fontWeight: "600" }} className="nira">
                &#8358;
              </span>
            )}
            {form.amount > 0 && (
              <span style={{ fontWeight: "600" }}>
                {moneyFormat(depositeFee(form.amount))}{" "}
              </span>
            )}
            {form.amount > 0 && <span>will be deducted due to </span>}
            {form.amount > 0 ? (
              <Link to="" style={{ color: "#298525" }}>
                transaction charges
              </Link>
            ) : (
              ""
            )}
          </p>
          <button className="withdraw-btn" type="submit">
            {submitted ? <Spiner /> : "Deposit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Deposit;
