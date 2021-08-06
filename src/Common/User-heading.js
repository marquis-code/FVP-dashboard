import React, { useState, useEffect } from "react";
import getUrl from "../Common/get-url";
import { useAuth } from "../Context/Auth-context";
import Popover from "react-popover";
import { useHistory } from "react-router-dom";

function UserHeading(props) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const [profile, setProfile] = useState();
  const { authTokens, setAuthTokens } = useAuth();
  useEffect(() => {
    fetch(getUrl("users/me/"), {
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    }).then((response) => {
      if (response.status === 401) {
        setAuthTokens(localStorage.removeItem("tokens"));
      }
      response.json().then((data) => setProfile(data));
    });
  }, [authTokens, setAuthTokens]);
  // useEffect(() => {
  //   getProduces();
  // }, []);

  const logOut = () => {
    setAuthTokens(localStorage.removeItem("tokens"));
  };
  const history = useHistory();
  const settings = () => {
    history.push("/dashboard/settings/personal");
  };

  return (
    <div className="grid-text tab capitalize pr-5 lg:pr-10">
      {props.title}

      <div className="ogun-farmz" onClick={togglePopover}>
        <i className="ogun-farmz-title">
          <p style={{ textTransform: "capitalize", marginRight: "1rem" }}>
            {profile ? profile.first_name : ""}
          </p>
          <Popover
            isOpen={isOpen}
            tipSize={0.1}
            place="below"
            onOuterAction={() => setIsOpen(false)}
            body={
              <div className="popover ">
                <div className="popover-item" onClick={settings}>
                  <div className="popover-img">
                    <img
                      src="/images/settings.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  Settings
                </div>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/help.svg"
                      alt="logo"
                      height="14px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  Help
                  <div></div>
                </div>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/faq.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  FAQ
                  <div></div>
                </div>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/log-out.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  <div className="" onClick={logOut}>
                    Logout
                  </div>
                  <div></div>
                </div>
              </div>
            }
          >
            <img
              src="/images/ogun-farmz.svg"
              alt="Ogun farmz"
              className="ogun-farmz-icon mr-5 lg:mr-10 cursor-pointer"
            />
          </Popover>
        </i>
      </div>
    </div>
  );
}

export default UserHeading;
