import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Common/Input";
import { useAuth } from "../../Context/Auth-context";
import Errormsg from "../../Common/ErrorMessage";
import Spiner from "../../Common/Sign-in-spinner";
import getUrl from "../../Common/get-url";
import transferfee from "../../Common/transferfee";
import { moneyFormat } from "../../Common/moneyFormat";

const MakePayment = () => {
  const [form, setForm] = useState({
    amount: "",
    email: "",
    password: "",
  });

  const payLoad = {
    amount: transferfee(form.amount),
    email: form.email,
    password: form.password,
    base_currency: 1,
    qoute_currency: 1,
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [formError, setFormError] = useState({});
  const { authTokens } = useAuth();
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    setSubmited(true);
    setFormError("");
    e.preventDefault();
    fetch(getUrl(`transfers`), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${authTokens}`,
      },
      body: JSON.stringify(payLoad),
    })
      .then((res) => {
        if (res.status === 200) {
          setSubmited(false);
        } else if (res.status === 400) {
          setSubmited(false);
        }
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        setInterval(function () {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        err.text().then((text) => {
          const parseError = JSON.parse(text);
          const setError = {
            transferError: parseError.__all__ || parseError.email,
          };
          setFormError((prevState) => ({
            ...prevState,
            ...setError,
          }));
        });
      });
  };

  return (
    <>
      <div className="form-container">
        <div className="withdraw-header">
          <h2>Make Payment</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-contain">
            <label>Amount to withdraw</label>
            <Input
              type="number"
              placeHolder="0.00"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
          <div className="input-contain">
            <label>Service Provider's email</label>
            <Input
              type="text"
              placeHolder="0.00"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-contain">
            <label>Password</label>
            <Input
              type="password"
              placeHolder="0.00"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <Errormsg errorText={formError.transferError} />
          <p>
            {form.amount > 0 && (
              <span style={{ fontWeight: "600" }} className="nira">
                &#8358;
              </span>
            )}
            {form.amount > 0 && (
              <span style={{ fontWeight: "600" }}>
                {moneyFormat(transferfee(form.amount))}{" "}
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
          <button
            className="withdraw-btn"
            style={submited ? { opacity: "0.6" } : { opacity: "1" }}
            disabled={submited ? true : false}
          >
            {submited ? <Spiner /> : "Pay"}
          </button>
        </form>
      </div>
    </>
  );
};

export default MakePayment;
