import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserHeading from "../../Common/User-heading";
import Input from "../../Common/Input";
import PasswordInput from "../../Common/PasswordInput";

const ProfileSettings = () => {
  const formErrorInitialState = {
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
  };

  const [formError, setFormError] = useState(formErrorInitialState);
  const [confirmed_password, setConfirmed_Password] = useState("");
  const page = useLocation().pathname;
  const currentPage = page.split("/")[3];
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = async (e) => {
    encodeFileBase64(e.target.files[0])
  };

  const [fileBase64String, setFileBase64String] = useState("");
  const [inputLabel, setInputLabel] = useState("Click to add image here");
  const [isFormValid, setIsFormValid] = useState(true);



  const encodeFileBase64 = (file) => {

    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFileBase64String(file);
        setInputLabel(file.name);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };



  
  return (
    <main>
      <div className="m-left bg-white pb-40">
        <UserHeading title="Settings" />
        <div className="p-5">
          <div className=" md:p-0 flex mt-10">
            <NavLink
              exact
              to="/dashboard/settings/personal"
              className="sec-tab"
              activeClassName="active-sec-tab"
            >
              Personal
            </NavLink>
            <NavLink
              exact
              to="/dashboard/settings/security"
              className="sec-tab"
              activeClassName="active-sec-tab"
            >
              Security
            </NavLink>
            <NavLink
              exact
              to="/dashboard/settings/bank"
              className="sec-tab"
              activeClassName="active-sec-tab"
            >
              Bank
            </NavLink>
          </div>
          <div className="text-grey max-w-md mt-10">
            <div className="settings-title text-2xl mt-10 capitalize mb-10 font-normal">
              {currentPage === "personal"
                ? "Personal information"
                : currentPage === "bank"
                ? "bank information"
                : currentPage}
            </div>
            {currentPage === "personal" && (
              <form className="">


                <div className="flex items-center justify-between w-full max-w-xs mb-8">
                  <img
                    src="/images/ogun-farmz.svg"
                    alt="Ogun farmz"
                    className="ogun-farmz-icon mr-5 lg:mr-10 "
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <center>
                    
                      <p>{inputLabel}</p>
                    </center>
                  </label>
                  <input id="file-upload" type="file" onChange={handleChange} />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label for="first_name">First Name</label>
                    <Input
                      type="text"
                      class={
                        formError.first_name
                          ? "form-error Auth-field"
                          : "Auth-field"
                      }
                      name="first_name"
                      onChange={handleChange}
                      value={form.first_name}
                      id="first_name"
                    />
                  </div>
                  <div className="w-5"></div>
                  <div>
                    <label for="last_name">Last Name</label>

                    <Input
                      type="text"
                      class={
                        formError.last_name
                          ? "form-error Auth-field"
                          : "Auth-field"
                      }
                      name="last_name"
                      onChange={handleChange}
                      id="last_name"
                      value={form.last_name}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <label for="phone">Phone Number</label>
                  <div></div>
                </div>

                <Input
                  type="number"
                  name="phone"
                  class={
                    formError.phone
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  value={form.phone}
                  id="phone"
                />
                <div className="flex justify-between">
                  <label for="email">Email Address</label>
                  <div></div>
                </div>

                <Input
                  type="text"
                  name="email"
                  class={
                    formError.email
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  value={form.email}
                  id="email"
                />
              </form>
            )}
            {currentPage === "security" && (
              <form className="">
                <div className="flex justify-between">
                  <label for="password">Current Password</label>
                  <div></div>
                </div>

                <PasswordInput
                  type="password"
                  class={
                    confirmed_password
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  id="password"
                  name="password"
                  value={form.password}
                />

                <div className="flex justify-between">
                  <label for="confirm_password">New Password</label>
                  <div></div>
                </div>
                <PasswordInput
                  type="password"
                  class={
                    confirmed_password
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  id="confirm_password"
                  name="confirm_password"
                  value={form.confirm_password}
                />
                <div className="flex justify-between">
                  <label for="confirm_password">Confirm Password</label>
                  <div></div>
                </div>
                <PasswordInput
                  type="password"
                  class={
                    confirmed_password
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  id="confirm_password"
                  name="confirm_password"
                  value={form.confirm_password}
                />
              </form>
            )}
            {currentPage === "bank" && (
              <form className="">
                <div className="flex justify-between">
                  <label for="first_name">Account Number</label>
                  <div></div>
                </div>
                <Input
                  type="number"
                  class={
                    formError.first_name
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  name="first_name"
                  onChange={handleChange}
                  value={form.first_name}
                  id="first_name"
                />

                <div className="flex justify-between">
                  <label for="last_name">Bank</label>
                  <div></div>
                </div>

                <Input
                  type="text"
                  class={
                    formError.last_name
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  name="last_name"
                  onChange={handleChange}
                  id="last_name"
                  value={form.last_name}
                />

                <div className="flex justify-between">
                  <label for="email">Account Name</label>
                  <div></div>
                </div>

                <Input
                  type="text"
                  name="email"
                  class={
                    formError.email
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  value={form.email}
                  id="email"
                />

                <div className="flex justify-between">
                  <label for="password">Password</label>
                  <div></div>
                </div>

                <PasswordInput
                  type="password"
                  class={
                    confirmed_password
                      ? "form-error Auth-field"
                      : "Auth-field"
                  }
                  onChange={handleChange}
                  id="password"
                  name="password"
                  value={form.password}
                />
              </form>
            )}
            <div className="w-full flex justify-between">
              <div></div>
              <button type="submit" className="planning-input-button">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileSettings;
