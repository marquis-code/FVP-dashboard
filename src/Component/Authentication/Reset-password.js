import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Errormsg from "../../Common/ErrorMessage";
import getUrl from "../../Common/get-url";
import Input from "../../Common/Input";
import Logo from "../../Common/Logo";
import Spiner from "../../Common/Sign-in-spinner";

const PasswordReset = () => {

  const params = useParams();
  const userId = params["userId"];
  const token = params["token"];


  const [form, setForm] = useState({
    user_id: userId,
    token: token,
    password: "",
  });

  // const history = useHistory();

  const [confirmForm, setConfirmform] = useState({
    confirm_password: "",
  });

  const handlePassword = (e) => {
    
    setConfirmform({
      confirm_password: e.target.value,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [confirmed_password, setConfirmed_Password] = useState("");
  const [spinner, setSpinner] = useState(false);
  

  function submit(e) {
    e.preventDefault(e);

    setConfirmed_Password("");
   

    if (form.password !== confirmForm.confirm_password) {
      setConfirmed_Password("Please enter a matching password");
    } else if (form.password === confirmForm.confirm_password) {
      handleSubmit();
      setSpinner(true);
    }
  }

  const handleSubmit = () => {
    
    // e.preventDefault();
    
    fetch(getUrl(`users/password`), {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        
        if (res.status === 204) {
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
      });
  };

 

  return (
    <div className="reset-background reset-pwd-background">
      <div className="reset-grid">
        <div  className="reset-logo logo">
          <Logo />
        </div>
        <label htmlFor="reset-password" className="reset-label">
          Reset Password
        </label>
        <form className="reset-input" onSubmit={submit}>
        <Errormsg errorText={confirmed_password} />
          <Input
            type="password"
            onChange={handleChange}
            id="password"
            name="password"
            value={form.password}
            class="gen-info-input"
            placeholder="New Password"
          />
          <Input
            type="password"
            onChange={handlePassword}
            id="reset_password"
            name="reset_password"
            value={confirmForm.confirm_password}
            class="gen-info-input"
            placeholder="Retype Password"
          />
         <button className="reset-btn add-btn">{spinner ? <Spiner/> : "Change Password"}</button>
        </form>
        
      </div>
    </div>
  );
};

export default PasswordReset;
