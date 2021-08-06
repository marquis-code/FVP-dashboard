import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import NavDrawer from "./nav-drawer";
import { useAuth } from "../Context/Auth-context";
import getUrl from "../Common/get-url";

const Header = () => {
  const [profile, setProfile] = useState();
  const { authTokens } = useAuth();
  useEffect(() => {
    fetch(getUrl("users/me/"), {
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [authTokens]);

  // useEffect(() => {
  //   getProduces();
  // }, []);

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    if (!sideDrawerOpen) {
      setSideDrawerOpen(true);
    } else {
      setSideDrawerOpen(false);
    }
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <>
      <header>
        <div className="header-box">
          <div className="header-content">
            {/* <Link to="/dashboard" className="logo">
        <img
          src="/images/farmz2u-logo.svg"
          alt="Farmz2u"
          className="logo-img"
        />
      </Link> */}
            <div className="grid-text">
              {" "}
              <img
                src="/images/farmz2u-logo.svg"
                alt="Farmz2u"
                className="logo-img"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <div className="ogun-farmz " style={{ marginRight: "2.5rem" }}>
                <i className="ogun-farmz-title">
                  <p
                    className="header-ogun-farmz"
                    style={{ textTransform: "capitalize", marginRight: "1rem" }}
                  >
                    {profile ? profile.first_name : ""}
                  </p>
                  <img
                    src="/images/ogun-farmz.svg"
                    alt="Ogun farmz"
                    className="ogun-farmz-icon"
                  />
                </i>
              </div>
              <button
                className="open-navigation"
                onClick={drawerToggleClickHandler}
              >
                <img
                  src="/images/menu.svg"
                  alt="open navigation"
                  className="menu-btn"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <NavDrawer show={sideDrawerOpen} click={backdropClickHandler} />
      {backdrop}
    </>
  );
};

export default Header;
