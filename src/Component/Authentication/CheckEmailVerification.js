import getUrl from "../../Common/get-url";

function EmailVerification(TOKEN, history, setAuthTokens) {
  let emails;

  return fetch(getUrl(`emails`), {
    method: "GET",
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  })
    .then((res) => {
      //console.log(res);
      if (!res.ok) throw res;
      return res.json();
    })
    .then((data) => {
    console.log(data);
      if (data.length === 0) {
        fetch(getUrl(`emails`), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${TOKEN}`,
          },
          body: JSON.stringify(emails),
        })
          .then((res) => {
            //console.log(res);
            if (!res.ok) throw res;
            return res.json();
          })

          .then((data) => {
            history.push("/email-verification");
            setAuthTokens(TOKEN);
            localStorage.setItem("tokens", TOKEN);
            TOKEN = null
          });
      } else if (data[0].verified === false) {
        localStorage.setItem("tokens", TOKEN);
        history.push("email-verification");
        setAuthTokens(TOKEN);
        TOKEN = null
      }
        else {
          setAuthTokens(TOKEN);
          localStorage.setItem("tokens", TOKEN);
          history.push("/dashboard")
          TOKEN = null
        }
      // setBank_details(true);
    });
  //   console.log(checkBankAcc);
  //   if (!checkBankAcc.ok) throw new Error("no banck account");
}
export default EmailVerification;
