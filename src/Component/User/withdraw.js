import React, {useState} from "react"
import Errormsg from "../../Common/ErrorMessage";
import Input from "../../Common/Input"
import Spiner from "../../Common/Sign-in-spinner";
import url from "../../Common/get-url"
import {useAuth} from "../../Context/Auth-context"


const Withdraw = () =>{

    const [form, setForm] = useState({
        amount: "",
        password:""
      });

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const withdrawPyaload = {
        amount: -1 * form.amount,
        transaction_type: "Withdrawal",
        currency:1
      };

      const [formError, setFormError] = useState({});
      const [valid, setValid] = useState(false);
      const { authTokens } = useAuth();
      const [assurance, setAssurance] = useState(false);
      const [initialError, setInitialError] = useState("");
      const formatter = new Intl.NumberFormat("en");
      const [submitted, setSubmitted] = useState(false);

      const withdraw = (e) => {
        e.preventDefault(e);
        if (form.amount === "") {
          setInitialError("Please type a valid number");
        } else {
          setAssurance(true);
          setInitialError("");
          setFormError("");
        }
      };

      const handleSubmit = (e) => {
        setSubmitted(true);
        fetch(url(`transactions`), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${authTokens}`,
          },
          body: JSON.stringify(withdrawPyaload),
        })
          .then((res) => {
            if (res.status === 200) {
              setSubmitted(false);
            } else if (res.status === 400) {
              setSubmitted(false);
            }
            if (!res.ok) throw res;
            return res.json().then(function (data) {
              window.location.reload();
            });
          })
    
          .then((data) => {
            // console.log(data);
            setValid(true);
          })
          .catch((err) => {
            // console.log(err);
            err.text().then((text) => {
              const parseError = JSON.parse(text);
              const setError = { withdrawError: parseError.__all__ };
              setFormError((prevState) => ({
                ...prevState,
                ...setError,
              }));
            });
          });
          if (valid) {
            setForm({
              amount: "",
            });
          }
        };


    return(
        <>
         <div className="form-container">
        <div className="withdraw-header">
          <h2>Withdraw</h2>
        </div>
        <form>
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
          <Errormsg errorText={formError.withdrawError || initialError} />
          <button className="withdraw-btn" 
          onClick={withdraw}
          >
            Withdraw
          </button>
        </form>
      </div>
      <div
        className="assurance-container"
        style={assurance ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={() => setAssurance(!assurance)}
      >
        <div className="assurance">
          <p>
            Are you sure you want to withdraw the sum of{" "}
            <span style={{ marginLeft: "3px" }}>
              &#8358;{formatter.format(form.amount)}?
            </span>
          </p>
          <button
            className="withdraw-btn"
            onClick={handleSubmit}
            disabled={submitted ? true : false}
          >
            {submitted ? <Spiner /> : "Confirm"}
          </button>
        </div>
      </div>
    </>
    )
}

export default Withdraw