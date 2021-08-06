import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../Common/Logo";
import AuthCard from "../../Common/AuthCard";
import { Link } from "react-router-dom";
import getUrl from "../../Common/get-url";
import Input from "../../Common/Input";
import PasswordInput from "../../Common/PasswordInput";
import ErrorMessage from "../../Common/ErrorMessage";
import { useAuth } from "../../Context/Auth-context";
import Spiner from "../../Common/Sign-in-spinner";
import { Mixpanel } from "../../mixPanel";

const formErrorInitialState = {
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  first_name: "",
  last_name: "",
  otherError: "",
  referrer: ""
};

function Register() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const { setAuthTokens } = useAuth();
  const history = useHistory();

  const [formError, setFormError] = useState(formErrorInitialState);
  const [confirmed_password, setConfirmed_Password] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [referrer, setReferrer] = useState("")
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (e.target.value === "other") {
      setReferrer("other")
    }
  };
  let emails = {};
  let JWT;

  function submit(e) {
    e.preventDefault(e);
    if (form.password !== form.confirm_password) {
      setConfirmed_Password("Please enter a matching password");
    } else if (form.password === form.confirm_password) {
      handleSubmit();
      setSpinner(true);
    }
  }

  const handleSubmit = () => {
    fetch(getUrl("users"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 200) {
          setSpinner(false);
          Mixpanel.identify(form.email);
          Mixpanel.track("Successful Registration");
          Mixpanel.people.set({
            $first_name: form.first_name,
            $last_name: form.last_name,
            $email: form.email,
          });
        } else if (res.status === 400) {
          setSpinner(false);
        }
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        const payload = {
          email: form.email,
          password: form.password,
        };

        fetch(getUrl("users/token"), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              setSpinner(false);
            }
            if (!res.ok) throw res;
            return res.json();
          })

          .then((data) => {
            JWT = data.token;
            fetch(getUrl(`emails`), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${data.token}`,
              },
              body: JSON.stringify(emails),
            })
              .then((res) => {
                // console.log(res);
                if (!res.ok) throw res;
                return res.json();
              })

              .then((data) => {
                // setEmailId(data.id);
                localStorage.setItem("ID", data.id);

                localStorage.setItem("tokens", JWT);
                history.push("/email-verification");
                setAuthTokens(JWT);
                JWT = null;
              });
            // localStorage.setItem("tokens", data.token);
            // setAuthTokens(data.token);
            // history.push("/dashboard");
          });
      })
      .catch((err) => {
        err.text().then((text) => {
          const parseError = JSON.parse(text);
          const setError = { otherError: parseError.non_field_errors };
          setFormError((prevState) => ({
            ...prevState,
            ...parseError,
            ...setError,
          }));
        });
        Mixpanel.track("Unsuccessful Registration");
      });
  };

  return (
    <>
      <Logo />
      <AuthCard cardname="Register-card">
        <h3 className="text-left card-title">Personal Information</h3>
        <ErrorMessage
          errorText={
            formError.first_name ||
            formError.last_name ||
            formError.email ||
            formError.password ||
            confirmed_password ||
            formError.otherError
          }
        />
        <form className="">
          <div className="flex justify-between">
            <div>
              <p className="text-left" >First Name</p>

              <Input
                type="text"
                class={
                  formError.first_name ? "form-error Auth-field mr-5" : "Auth-field"
                }
                name="first_name"
                onChange={handleChange}
                value={form.first_name}
                id="first_name"
              />

            </div>
            <div className="w-6"></div>
            <div>
              <p className="text-left" >Last Name</p>
              <Input
                type="text"
                class={formError.last_name ? "form-error Auth-field" : "Auth-field"}
                name="last_name"
                onChange={handleChange}
                id="last_name"
                value={form.last_name}
              />
            </div>

          </div>

          <div className="flex justify-between">
            <label for="email">Email Address </label>
            <div></div>
          </div>

          <Input
            type="text"
            name="email"
            class={formError.email ? "form-error Auth-field" : "Auth-field"}
            onChange={handleChange}
            value={form.email}
            id="email"
          />

          <div className="flex justify-between">
            <label for="email">Phone Number </label>
            <div></div>
          </div>

          <Input
            type="tel"
            name="phone_number"
            class={formError.phone_number ? "form-error Auth-field" : "Auth-field"}
            onChange={handleChange}
            value={form.phone_number}
            id="phone_number"
          />

          <div className="flex justify-between">
            <label for="password">Password</label>
            <div></div>
          </div>

          <PasswordInput
            type="password"
            class={confirmed_password ? "form-error Auth-field" : "Auth-field"}
            onChange={handleChange}
            id="password"
            name="password"
            value={form.password}
          />

          <div className="flex justify-between">
            <label for="confirm_password">Confirm Password</label>
            <div></div>
          </div>
          <PasswordInput
            type="password"
            class={confirmed_password ? "form-error Auth-field" : "Auth-field"}
            onChange={handleChange}
            id="confirm_password"
            name="confirm_password"
            value={form.confirm_password}
          />

          <div className="flex justify-between">
            <label for="confirm_password">How did you hear about us?</label>
            <div></div>
          </div>

          <select className="Auth-field mt-0" name="referer" id="referer" onChange={handleChange}>
            <option value=""></option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="Blog">Blog</option>
            <option value="Twitter">Twitter</option>
            <option value="Other">Other</option>
          </select>
          {referrer === "other" && <Input
            type="text"
            class={referrer ? "form-error Auth-field" : "Auth-field"}
            onChange={handleChange}
            id="referrer"
            name="referrer"
            placeholder="please specify"
            value={form.referrer}
          />}
          <button
            className="Auth-button"
            onClick={submit}
            disabled={spinner ? true : false}
          >
            {spinner ? <Spiner /> : "Continue"}
          </button>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Have an Account?</p>
          <Link to="/login" style={{ zIndex: "2" }}>
            <span
              className="Auth-link"
              style={{ marginLeft: "3px", zIndex: "2" }}
            >
              Sign in
            </span>
          </Link>
        </div>
      </AuthCard>
    </>
  );
}
export default Register;
