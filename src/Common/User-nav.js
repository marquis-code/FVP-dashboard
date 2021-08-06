import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ReactJoyride from "react-joyride";
import PropTypes from 'prop-types';
import Flip from "react-reveal/Flip";
import RatingComponent from "../Common/Ratingcomponent"

function UserNav() {
  // const { setAuthTokens } = useAuth();
  const [fmp, setFmp] = useState(true);
  const [fvp, setFvp] = useState(false);
  const toggleFmp = () => {
    setFmp(!fmp);
    setFvp(false);
  };
  const toggleFvp = () => {
    setFvp(!fvp);
    setFmp(false);
  };


  const [run, setRun] = useState(true)
  const steps = [
    {
      content: (
        <React.Fragment>
          <div className="text-left">
            This is the farming management platform. Get high quality inputs, information and resources to manage  your farm here
          </div>
        </React.Fragment>
      ),
      placement: 'right',
      hideCloseButton: true,
      // placement: 'center',
      locale: { skip: 'Skip' },
      target: '.joyride',
    },
    {
      content: (
        <React.Fragment>
          This is the farming vendor platform- Get access to customers and live data on your produce that's being sold on here
        </React.Fragment>
      ),
      placement: 'right',
      hideCloseButton: true,
      target: '.fvp-demo',
      title: 'Our projects',
    },
    {
      content: (
        <RatingComponent />
      ),
      placement: 'center',
      target: 'body',
      hideCloseButton: true,

    }
  ]

  UserNav.propTypes = {
    joyride: PropTypes.shape({
      callback: PropTypes.func,
    }),
  };

  UserNav.defaultProps = {
    joyride: {},
  };

  const handleClickStart = (e) => {
    e.preventDefault();

    setRun(
      true
    )

  };


  return (
    <nav>
      <ReactJoyride
        tooltipComponent={false}
        continuous
        scrollToFirstStep
        showSkipButton
        hideCloseButton
        run={run}
        steps={steps}
        styles={{
          options: {
            // overlayColor: 'rgba(79, 26, 0, 0.4)',
            primaryColor: 'orange',
            // textColor: '#004a14',
            textAlign: "left",
            font: "normal normal medium 13px/22px Montserrat",
            letterSpacing: "0px",
            color: "#545454",
            padding: "0",
            zIndex: 1000,
            beaconSize: 1,
            spotlightShadow: '0 0 15px red',
          }
        }}
      />
      <div className="w-full flex justify-center">
        <Link to="/dashboard" className="logo">
          <img src="/images/farmz2u-logo.svg" alt="Farmz2u" className="pr-12" />
        </Link>
      </div>
      <ul className="nav-bar">
        <li className="nav-bar-list joyride" onClick={handleClickStart}>

          <a
            onClick={toggleFmp}
            href="#"
            className={
              fmp && !fvp
                ? "fmp-current-link link-list first-link"
                : " link-list first-link"
            }
          >
            <img
              src={fmp ? "/images/fmp-active.svg" : "/images/fmp-grey.svg"}
              alt="logo"
              className="plan-img user-svg"
              data-test="button-icon"
            />
            <div className="w-full flex justify-between items-center">
              FMP
              <img
                src={
                  !fmp ? "/images/arrow-grey.svg" : "/images/arrow-white.svg"
                }
                alt="logo"
                height="10px"
                className="plan-img user-svg"
                data-test="button-icon"
              />
            </div>
          </a>
        </li>

        {fmp && (
          <Flip top>
            <li className="nav-bar-list mr-2 ">
              <NavLink
                exact
                to="/dashboard/"
                className="link-list first-link"
                activeClassName="current-link"
              >
                <div className="flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23.46}
                    height={23.46}
                    className="plan-img user-svg"
                    viewBox="0 0 23.46 23.46"
                  >
                    <defs>
                      <style>{".prefix__a{fill:#8f8f8f}"}</style>
                    </defs>
                    <path
                      className="prefix__a"
                      d="M9.042 7.82H1.711A1.712 1.712 0 010 6.109v-4.4A1.712 1.712 0 011.711 0h7.331a1.712 1.712 0 011.711 1.711v4.4A1.713 1.713 0 019.042 7.82zM1.711 1.466a.245.245 0 00-.244.244v4.4a.245.245 0 00.244.244h7.331a.245.245 0 00.244-.244v-4.4a.245.245 0 00-.244-.244zm0 0M9.042 23.46H1.711A1.712 1.712 0 010 21.75V11.486a1.712 1.712 0 011.711-1.711h7.331a1.713 1.713 0 011.711 1.711V21.75a1.712 1.712 0 01-1.711 1.71zM1.711 11.243a.245.245 0 00-.244.244v10.264a.245.245 0 00.244.244h7.331a.245.245 0 00.244-.244V11.486a.245.245 0 00-.244-.244zm0 0M21.749 23.46h-7.331a1.713 1.713 0 01-1.711-1.711v-4.4a1.713 1.713 0 011.711-1.711h7.331a1.712 1.712 0 011.711 1.711v4.4a1.712 1.712 0 01-1.711 1.711zm-7.331-6.354a.245.245 0 00-.244.245v4.4a.245.245 0 00.244.244h7.331a.245.245 0 00.244-.244v-4.4a.245.245 0 00-.244-.245zm0 0M21.749 13.685h-7.331a1.713 1.713 0 01-1.711-1.711V1.711A1.713 1.713 0 0114.418 0h7.331a1.712 1.712 0 011.711 1.711v10.264a1.712 1.712 0 01-1.711 1.71zM14.418 1.466a.245.245 0 00-.244.244v10.265a.245.245 0 00.244.244h7.331a.245.245 0 00.244-.244V1.711a.245.245 0 00-.244-.244zm0 0"
                    />
                  </svg>
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li className="nav-bar-list mr-2">
              <NavLink
                exact
                to="/dashboard/planning"
                className="link-list first-link"
                activeClassName="current-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="plan-img user-svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <path
                    id="puzzle-grey"
                    className="plan-img user-svg"
                    d="M18.966,0H1.034A1.035,1.035,0,0,0,0,1.034V18.966A1.035,1.035,0,0,0,1.034,20H18.966A1.035,1.035,0,0,0,20,18.966V1.034A1.035,1.035,0,0,0,18.966,0Zm.345,1.034V9.655h-3.2a.345.345,0,0,0-.276.552,1.948,1.948,0,0,1,.372,1.172A1.583,1.583,0,0,1,14.828,13.1a1.583,1.583,0,0,1-1.379-1.724,1.948,1.948,0,0,1,.372-1.172.345.345,0,0,0-.276-.552h-3.2V7.042a2.753,2.753,0,0,0,1.034.2,2.264,2.264,0,0,0,2.414-2.069A2.264,2.264,0,0,0,11.379,3.1a2.753,2.753,0,0,0-1.034.2V.69h8.621a.345.345,0,0,1,.345.345ZM.69,1.034A.345.345,0,0,1,1.034.69H9.655v3.2a.345.345,0,0,0,.552.276,1.952,1.952,0,0,1,1.172-.372A1.583,1.583,0,0,1,13.1,5.172a1.583,1.583,0,0,1-1.724,1.379,1.952,1.952,0,0,1-1.172-.372.345.345,0,0,0-.552.276v3.2H7.042a2.753,2.753,0,0,0,.2-1.034A2.264,2.264,0,0,0,5.172,6.207,2.264,2.264,0,0,0,3.1,8.621a2.753,2.753,0,0,0,.2,1.034H.69Zm0,17.931V10.345h3.2a.345.345,0,0,0,.276-.552,1.948,1.948,0,0,1-.372-1.172A1.583,1.583,0,0,1,5.172,6.9,1.583,1.583,0,0,1,6.552,8.621,1.948,1.948,0,0,1,6.18,9.793a.345.345,0,0,0,.276.552h3.2v2.613a2.753,2.753,0,0,0-1.034-.2,2.264,2.264,0,0,0-2.414,2.069A2.264,2.264,0,0,0,8.621,16.9a2.753,2.753,0,0,0,1.034-.2V19.31H1.034a.345.345,0,0,1-.345-.345Zm18.621,0a.345.345,0,0,1-.345.345H10.345v-3.2a.345.345,0,0,0-.552-.276,1.952,1.952,0,0,1-1.172.372A1.583,1.583,0,0,1,6.9,14.828a1.583,1.583,0,0,1,1.724-1.379,1.952,1.952,0,0,1,1.172.372.345.345,0,0,0,.552-.276v-3.2h2.613a2.753,2.753,0,0,0-.2,1.034,2.264,2.264,0,0,0,2.069,2.414A2.264,2.264,0,0,0,16.9,11.379a2.753,2.753,0,0,0-.2-1.034H19.31Zm0,0"
                    transform="translate(0.5 0.5)"
                    fill="#fff"
                    stroke="#8f8f8f"
                    strokeWidth="1"
                  />
                </svg>
                Planning
              </NavLink>
            </li>
            <li className="nav-bar-list mr-2">
              <NavLink
                to="/dashboard/capital/plans"
                className="link-list first-link"
                activeClassName="current-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="plan-img user-svg"
                  width="21.729"
                  height="21.839"
                  viewBox="0 0 21.729 21.839"
                >
                  <g id="capital-grey" transform="translate(0.1 0.22)">
                    <g id="XMLID_281_" transform="translate(0 0.001)">
                      <path
                        id="XMLID_283_"
                        className="plan-img user-svg"
                        d="M251.648,188.716a.71.71,0,0,1,.763.639.579.579,0,1,0,1.158,0,1.818,1.818,0,0,0-1.342-1.713v-.08a.579.579,0,1,0-1.158,0v.08a1.818,1.818,0,0,0-1.342,1.713,1.864,1.864,0,0,0,1.921,1.8.649.649,0,1,1-.763.639.579.579,0,0,0-1.158,0,1.818,1.818,0,0,0,1.342,1.713v.08a.579.579,0,1,0,1.158,0v-.08a1.818,1.818,0,0,0,1.342-1.713,1.864,1.864,0,0,0-1.921-1.8.649.649,0,1,1,0-1.277Z"
                        transform="translate(-239.759 -180.108)"
                        fill="#8f8f8f"
                        stroke="#8f8f8f"
                        strokeWidth="0.2"
                      />
                      <path
                        id="XMLID_1217_"
                        className="plan-img user-svg"
                        d="M21.454,14.04a1.607,1.607,0,0,0-2.3-.972,7.405,7.405,0,0,0-.3-3.572.42.42,0,0,0-.8.273,6.561,6.561,0,0,1,.013,4.2l-3.349,2.975a3.377,3.377,0,0,1-.674.465,1.613,1.613,0,0,0-.869-1.843l-2.967-1.421a5.393,5.393,0,0,0-4.165-.2l-.3.111A6.491,6.491,0,0,1,7.28,7.28l2.967-2.967h3.285l2.514,2.514a.42.42,0,0,0,.594-.594l-2.4-2.4.868-2.5A.756.756,0,0,0,13.857.549l-.005.005a.446.446,0,0,1-.63,0,1.894,1.894,0,0,0-2.675,0,.446.446,0,0,1-.63,0,.756.756,0,0,0-1.248.784L9.54,3.831,6.686,6.686A7.361,7.361,0,0,0,4.952,14.35l-.663.243a1.2,1.2,0,0,0-.955-.472H1.2a1.206,1.206,0,0,0-1.2,1.2v4.987a1.206,1.206,0,0,0,1.2,1.2H12.282a6.613,6.613,0,0,0,4.633-1.88l4.115-4A1.6,1.6,0,0,0,21.454,14.04ZM10.232,1.526a1.278,1.278,0,0,0,.909-.377,1.052,1.052,0,0,1,1.487,0,1.287,1.287,0,0,0,1.589.183l-.744,2.141H10.305L9.557,1.335A1.278,1.278,0,0,0,10.232,1.526ZM.841,20.314V15.326a.365.365,0,0,1,.364-.364H3.334a.365.365,0,0,1,.364.364v4.987a.365.365,0,0,1-.364.364H1.2a.365.365,0,0,1-.364-.364Zm19.6-5.278-4.115,4a5.777,5.777,0,0,1-4.047,1.643h-7.8a1.2,1.2,0,0,0,.056-.364V15.4l1.794-.659a4.548,4.548,0,0,1,3.513.167l2.967,1.421a.774.774,0,0,1,.325,1.1.772.772,0,0,1-.894.333L8.3,16.507a.42.42,0,0,0-.255.8l3.942,1.253a1.618,1.618,0,0,0,.491.076l.059,0a4.21,4.21,0,0,0,2.738-1.062L19.4,13.912a.77.77,0,0,1,.669-.177.767.767,0,0,1,.375,1.3Z"
                        transform="translate(0 -0.001)"
                        fill="#8f8f8f"
                        stroke="#8f8f8f"
                        strokeWidth="0.2"
                      />
                      <path
                        id="XMLID_1298_"
                        className="plan-img user-svg"
                        d="M409.159,179.831a.42.42,0,1,0-.3-.123A.421.421,0,0,0,409.159,179.831Z"
                        transform="translate(-391.561 -171.468)"
                        fill="#8f8f8f"
                        stroke="#8f8f8f"
                        strokeWidth="0.5"
                      />
                    </g>
                  </g>
                </svg>
                Capital
              </NavLink>
            </li>
            <li className="nav-bar-list mr-2" data-test="nav-component">
              <NavLink
                to="/dashboard/wallet"
                className="link-list first-link"
                activeClassName="current-link"
                data-test="nav-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.96"
                  height="25.118"
                  viewBox="0 0 24.96 25.118"
                  className="plan-img user-svg"
                  data-test="button-icon"
                >
                  <path
                    id="wallet"
                    d="M-9.576-836.543a.478.478,0,0,1-.478-.478.478.478,0,0,1,.478-.478h6.354a1.817,1.817,0,0,0,1.815-1.815v-3.344H-4.942a2.583,2.583,0,0,1-2.58-2.58,2.583,2.583,0,0,1,2.58-2.58h3.535v-3.344a1.817,1.817,0,0,0-1.815-1.815H-20.229a1.817,1.817,0,0,0-1.815,1.815v11.847a1.817,1.817,0,0,0,1.815,1.815h6.354a.478.478,0,0,1,.478.478.478.478,0,0,1-.478.478h-6.354A2.774,2.774,0,0,1-23-839.313V-851.16a2.774,2.774,0,0,1,2.771-2.771h1.364l6.372-6.371a2.389,2.389,0,0,1,3.374,0l1.581,1.581a2.371,2.371,0,0,1,1.3-.019,2.37,2.37,0,0,1,1.449,1.112l2.174,3.766a2.775,2.775,0,0,1,2.161,2.7v3.344H.027a1.435,1.435,0,0,1,1.433,1.433v2.293a1.435,1.435,0,0,1-1.433,1.433H-.451v3.344a2.774,2.774,0,0,1-2.771,2.771Zm3.01-8.694a1.626,1.626,0,0,0,1.624,1.624H.027A.478.478,0,0,0,.5-844.09v-2.293a.478.478,0,0,0-.478-.478H-4.942A1.626,1.626,0,0,0-6.566-845.237Zm-1-12.438-6.484,3.743h10.3l-1.859-3.22a1.421,1.421,0,0,0-.869-.666,1.436,1.436,0,0,0-.373-.049A1.422,1.422,0,0,0-7.568-857.674Zm-4.25-1.952-5.7,5.7h1.551l7.522-4.342L-9.8-859.627a1.421,1.421,0,0,0-1.012-.419A1.421,1.421,0,0,0-11.819-859.627Zm-.245,22.944a.481.481,0,0,1-.14-.338.481.481,0,0,1,.14-.338.481.481,0,0,1,.338-.14.481.481,0,0,1,.338.14.481.481,0,0,1,.14.338.481.481,0,0,1-.14.338.481.481,0,0,1-.338.14A.482.482,0,0,1-12.064-836.683Zm6.7-8.217a.481.481,0,0,1-.14-.338.481.481,0,0,1,.14-.338.481.481,0,0,1,.338-.14.48.48,0,0,1,.338.14.479.479,0,0,1,.14.338.479.479,0,0,1-.14.338.48.48,0,0,1-.338.14A.482.482,0,0,1-5.359-844.9Z"
                    transform="translate(23.25 861.41)"
                    fill="#8f8f8f"
                    stroke="#8f8f8f"
                    strokeWidth="0.5"
                    className="plan-img user-svg"
                  />
                </svg>
                Wallet
              </NavLink>
            </li>
          </Flip>
        )}

        <li className="nav-bar-list fvp-demo">
          <a
            onClick={toggleFvp}
            href="#"
            className={
              fvp
                ? "fmp-current-link link-list first-link"
                : "  link-list first-link"
            }
          >
            <img
              src={fvp ? "/images/fvp-active.svg" : "/images/fvp-grey.svg"}
              alt="logo"
              className="plan-img user-svg"
              data-test="button-icon"
            />
            <div className="w-full flex justify-between items-center">
              FVP
              <img
                src={
                  !fvp ? "/images/arrow-grey.svg" : "/images/arrow-white.svg"
                }
                alt="logo"
                height="10px"
                className="plan-img user-svg"
                data-test="button-icon"
              />
            </div>
          </a>
        </li>

        {fvp && (
          <Flip top>
            <li className="nav-bar-list mr-2 ">
              <NavLink
                exact
                to="/dashboard/fvp/home"
                className="link-list first-link"
                activeClassName="current-link"
              >
                <div className="flex justify-between">Home</div>
              </NavLink>
            </li>
            {/* <li className="nav-bar-list mr-2">
              <NavLink
                exact
                to="/dashboard/fvp/order"
                className="link-list first-link"
                activeClassName="current-link"
              >
                Order
              </NavLink>
            </li> */}
            <li className="nav-bar-list mr-2">
              <NavLink
                to="/dashboard/fvp/products"
                className="link-list first-link"
                activeClassName="current-link"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-bar-list mr-2 mb-3" data-test="nav-component">
              <NavLink
                to="/dashboard/wallet"
                className="link-list first-link"
                activeClassName="current-link"
                data-test="nav-button"
              >
                Stock
              </NavLink>
            </li>
            <li className="nav-bar-list mr-2" data-test="nav-component">
              <NavLink
                to="/dashboard/fvp/report"
                className="link-list first-link"
                activeClassName="current-link"
                data-test="nav-button"
              >
                Report
              </NavLink>
            </li>
          </Flip>
        )}
      </ul>
    </nav>
  );
}
export default UserNav;

