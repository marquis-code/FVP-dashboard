import React, { useEffect } from "react";
import { useState } from "react";
import { Link,useParams, useHistory, } from "react-router-dom";
import getUrl from "../../Common/get-url"

function VeridiedEmail() {
  const params = useParams();
  const userId = params["UserId"];
  const token = params["Token"];
  const history = useHistory();
  const form = {
    user_id: userId,
    token: token,
  };

  const[proceed, setProceed] = useState(false)

useEffect(()=>{
  fetch(getUrl(`emails/verify/`), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => {
      if (res.status === 201) {
        setProceed(true)
      } else if (res.status === 401) {
        history.push("/login");
      }
      if (!res.ok) throw res;
      return res.json();
    })

    .then((data) => {
      // console.log(data);
    })
    .catch((err) => {
      // console.log(err);
    });
}, [form, history])

if (proceed){
  setInterval(() => {
    history.push("/dashboard")
}, 3000);
}


  return (
    <>
      <div className="reset-grid">
        <Link to="/" className="reset-logo logo">
          <img
            src="/images/farmz2u-logo.svg"
            alt="Farmz2u"
            className="logo-img"
          />
        </Link>

        <div className="reset-link-grid block">
          <img
            src="/images/mail-verified.svg"
            alt="Succesful"
            className="reset-success-img"
          />
          <h3
            className="reset-msg"
            style={{
              color: "#838282",
              fontWeight: "400",
              fontSize: "large",
              marginTop: "6px",
            }}
          >
            Email Verified
          </h3>
          <p
            className="reset-chg-email"
            style={{ color: "#838282", marginTop: "0" }}
          >
            Your email has been verified, you will be Redirected in 3seconds
          </p>
        </div>
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
}

export default VeridiedEmail;
