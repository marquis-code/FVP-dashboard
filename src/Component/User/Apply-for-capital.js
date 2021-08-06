import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context";
import getUrl from "../../Common/get-url";
import VerificationStatus from "../../Common/verification-status";

// import Bank from "./bank";
// import BvnForm from "./bvn";
import Footer from "../../Common/Footer";
import Kyc from "../Kyc/Kyc";

const ApplyForCapital = () => {
  const params = useParams();
  const capitalId = params["capitalId"];
  const [initialize, setInitialize] = useState(true);
  const [acceptedLoan, setacceptedLoan] = useState(false);
  const [declinedLoan, setdeclinedLoan] = useState(false);

  const { authTokens, setAuthTokens } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(getUrl(`bank-accounts`), {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) {
          setSuccess(false);
          setInitialize(false);
        } else {
          fetch(getUrl(`/users/me`), {
            method: "GET",
            headers: {
              Authorization: `Token ${authTokens}`,
            },
          })
            .then((res) => {
              if (!res.ok) throw res;
              return res.json();
            })
            .then((data) => {
              if (data.bvn === null) {
                setSuccess(true);
                setInitialize(false);
              } else {
                fetch(getUrl(`loans`), {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token ${authTokens}`,
                  },
                  body: JSON.stringify({
                    plan: capitalId,
                  }),
                })
                  .then((res) => {
                    // console.log(res);
                    if (res.status === 201) {
                      setacceptedLoan(true);
                      setSuccess(true);
                      setInitialize(false);
                    } else if (res.status === 400) {
                      setdeclinedLoan(true);
                      setSuccess(true);
                      setInitialize(false);
                    } else if (res.status === 401) {
                      setAuthTokens(localStorage.removeItem("tokens"));
                      history.push("/login");
                    }
                    if (!res.ok) throw res;
                    return res.json();
                  })
                  .then((data) => {
                    // console.log(data);
                  });
              }
            });
        }
      });
  }, [authTokens, history, capitalId, setAuthTokens]);

  const [success, setSuccess] = useState(false);

  return (
    <>
      <main>
        {initialize ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="loader"></div>
          </div>
        ) : success ? (
          acceptedLoan ? (
            <VerificationStatus
              icon="/images/Success-leaf.svg"
              title="Success"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo rem
        alias recusandae, sapiente et voluptas omnis Repellat,
        doloribus maiores."
              button="View Loan status"
              styl={"#298525"}
            />
          ) : declinedLoan ? (
            <VerificationStatus
              icon="/images/dead-leaf.svg"
              title="Failed"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo rem
        alias recusandae, sapiente et voluptas omnis Repellat,
        doloribus maiores."
              button="Go back"
              styl={"#ce290a"}
            />
          ) : (
            <Kyc />
          )
        ) : (
          <Kyc />
        )}
      </main>
      <Footer />
    </>
  );
};

export default ApplyForCapital;
