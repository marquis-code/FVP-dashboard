import React, { useState } from "react";
import Logo from "../../Common/Logo";
import AuthCard from "../../Common/AuthCard";
// import AuthOption from "../../Common/Auth-options";
import { Link, useHistory } from "react-router-dom";
import getUrl from "../../Common/get-url";
import Input from "../../Common/Input";
import { useAuth } from "../../Context/Auth-context";
import ErrorMessage from "../../Common/ErrorMessage";
import Spiner from "../../Common/Sign-in-spinner";
import { Mixpanel } from "../../mixPanel";

function Login() {
  const { setAuthTokens } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let TOKEN;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);
    try {
      await fetch(getUrl("users/token"), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setSpinner(false);
            Mixpanel.identify(form.email);
            Mixpanel.track("Successful login");
            Mixpanel.people.set({
              $email: form.email,
            });
          } else if (res.status === 400) {
            setSpinner(false);
          }
          if (!res.ok) throw res;
          return res.json();
        })

        .then((data) => {
          TOKEN = data.token;
          setAuthTokens(TOKEN);
          localStorage.setItem("tokens", TOKEN);
          history.push("/dashboard");
          TOKEN = null;
        });
      // await EmailVerification(TOKEN, history, setAuthTokens);
    } catch (err) {
      console.log(err);
      err.text().then((text) => {
        const parseError = JSON.parse(text);
        const setError = { email: parseError.non_field_errors };
        setFormError((prevState) => ({
          ...prevState,
          ...setError,
        }));
      });
      Mixpanel.track("Unsuccessful login");
    }
  };

  return (
    <>
      <Logo />
      <AuthCard cardname="Login-card">
        <h3 className="card-title"> Sign in to your account</h3>
        <ErrorMessage errorText={formError.email || formError.password} />
        <form onSubmit={handleSubmit} id="form" className="text-grey">
          <div className="flex justify-between">
            <label for="email">Email / Phone Number</label>
            <div></div>
          </div>
          <Input
            type="text"
            onChange={handleChange}
            id="email"
            name="email"
            value={form.email}
            class="Auth-field"
          />

          <div className="flex justify-between">
            <label for="password">Password</label>
            <div></div>
          </div>

          <Input
            type="password"
            onChange={handleChange}
            id="password"
            name="password"
            value={form.password}
            class="Auth-field"
          />

          <button className="Auth-button" disabled={spinner ? true : false}>
            {spinner ? <Spiner /> : "Sign In"}
          </button>
        </form>

        <div className="forgotPassword">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Don't have an Account?</p>
          <Link to="/register">
            <span className="Auth-link" style={{ marginLeft: "3px" }}>
              Register
            </span>
          </Link>
        </div>
      </AuthCard>
    </>
  );
}

export default Login;
