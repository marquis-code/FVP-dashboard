import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Common/Input";
import getUrl from "../../Common/get-url";
import Spiner from "../../Common/Sign-in-spinner";
import ErrorMessage from "../../Common/ErrorMessage";

const ResetLink = () => {
  const [form, setForm] = useState({
    email: "",
  });
  const [formError, setFormError] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    fetch(getUrl(`users/password/`), {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 202) {
          setSuccess(true);
          setSpinner(false);
        } else if (res.status === 400) {
          setSpinner(false);
        }
        if (!res.ok) throw res;
        return res.json();
      })

      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
        err.text().then((text) => {
          const parseError = JSON.parse(text);
          const error = { email: parseError.email };
          console.log(error);
          setFormError((prevState) => ({
            ...prevState,
            ...error,
          }));
        });
      });
  };
  return (
    <>
      <div className="reset-grid">
        <Link to="/" className="reset-logo logo">
          <img
            src="images/farmz2u-logo.svg"
            alt="Farmz2u"
            className="logo-img"
          />
        </Link>
        {success ? (
          <div className="reset-link-grid block">
            <img
              src="images/successful-check.svg"
              alt="Succesful"
              className="reset-success-img"
            />
            <p className="reset-msg">
              A reset link has been sent to your email address
            </p>
            <hr className="reset-msg-line" />
            <i className="reset-chg-email">
              Didn't get a mail?{" "}
              <span style={{cursor:"pointer"}} to="/forgot-password" className="current" onClick= {() =>  window.location.reload()}>
                Change email address
              </span>
            </i>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reset-link-grid reset-email-address block"
          >
            <label
              htmlFor="reset-password"
              className="reset-label reset-link-address"
            >
              Enter Email Address
            </label>

            <div className="reset-input">
              <Input
                type="text"
                name="email"
                class="gen-info-input"
                placeholder="Email Address"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <ErrorMessage errorText={formError.email} stylecss="forgot-password-error" />
            <button
              className="reset-btn add-btn"
              style={{ cursor: "pointer" }}
              disabled={spinner ? true : false}
            >
              {spinner ? <Spiner /> : "Send Reset Link"}
            </button>
          </form>
        )}
      </div>
      <div className="background-illustration">
        <img
          src="/images/login-in-illustration.svg"
          alt="logo"
          className="ill"
        />
      </div>
    </>
  );
};

export default ResetLink;
