import React from "react";
import Logo from "../Common/Logo.js";
import getUrl from "../Common/get-url";
import { useAuth } from "../Context/Auth-context";
import Spiner from "../Common/Sign-in-spinner";
import { useState } from "react";

function Emailverification() {
  let ID;
  const { authTokens } = useAuth();
  const [spinner, setSpinner] = useState(false);
  let emails = {};
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSpinner(true);
    fetch(getUrl(`emails/`), {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        ID = data[0].id;
        fetch(getUrl(`emails/${ID}/`), {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${authTokens}`,
          },
        })
          .then((res) => {
            // console.log(res);
            // if (!res.ok) throw res;
            // return res.json();
          })
          .then((data) => {
            fetch(getUrl(`emails/`), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${authTokens}`,
              },
              body: JSON.stringify(emails),
            })
              .then((res) => {
                // console.log(res);
                if (res.status === 201) {
                  setSpinner(false);
                  setSubmitted(true);
                }
                if (!res.ok) throw res;
                return res.json();
              })

              .then((data) => {});
          });
      })

      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <>
      <Logo />
      <center>
        <div className="card box" style={{position:"relative", zIndex:"2"}}>
          <div className="card-body">
            <h3>Email Verification</h3>
            <img
              src="images/plane-icon.svg"
              alt="email"
              className="email-plane"
            />
            <p>
              {" "}
              To confirm your email address, tap the button in the email we sent
              to you. Remember to look in your spam folder, where automated
              messages sometimes filter.
            </p>
            <div className="change-email">
              <button
                type="button"
                className="resend-btn"
                onClick={handleSubmit}
                disabled={spinner ? true : false}
              >
                {spinner ? (
                  <Spiner />
                ) : submitted ? (
                  "Sent ✔️"
                ) : (
                  "Resend verification link"
                )}
              </button>
            </div>
          </div>
        </div>
      </center>
      <div className="background-illustration">
        <img
          src="/images/login-in-illustration.svg"
          alt="logo"
          className="ill"
        />
      </div>
    </>
  );
}

export default Emailverification;
