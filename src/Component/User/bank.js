import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserHeading from "../../Common/User-heading";
import Input from "../../Common/Input";
import Options from "../../Common/Select_option";
import Spiner from "../../Common/Sign-in-spinner";
import getUrl from "../../Common/get-url";
import { useAuth } from "../../Context/Auth-context";
import Errormsg from "../../Common/ErrorMessage";

const Bank = ({ setSuccess }) => {
  const [lists, setLists] = useState();
  const [form, setForm] = useState({
    bank: "",
    nuban: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { setAuthTokens, authTokens } = useAuth();
  const [nubanError, setnubanError] = useState("");
  const [non_field_errors, setnon_field_errors] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    console.log(form);
    setnubanError("");
    setnon_field_errors("");
    e.preventDefault();
    setSpinner(true);
    fetch(getUrl(`bank-accounts`), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${authTokens}`,
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
          setSpinner(false);
        } else if (res.status === 400) {
          setSpinner(false);
        } else if (res.status === 401) {
          setAuthTokens(localStorage.removeItem("tokens"));
          history.push("/login");
        }
        if (!res.ok) throw res;
        return res.json();
      })

      .then((data) => {})
      .catch((err) => {
        console.log(err);
        err.text().then((text) => {
          const parseError = JSON.parse(text);

          if (parseError.nuban) {
            setnubanError(parseError.nuban);
          } else {
            const allError = parseError[0];
            setnubanError(allError[1]);
          }
        }
        );
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://api.paystack.co/bank", { signal: signal }).then((res) => {
      res.json().then(function (data) {
        setLists(data);
      });
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <div className="grid bank-info">
        <UserHeading title="Apply for capital" />
        <div className="capital-layout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns= {true}
            xlink="http://www.w3.org/1999/xlink"
            width="429.174"
            height="420.168"
            viewBox="0 0 429.174 420.168"
            className="capital-image"
          >
            <defs>
              <clipPath id="clipPath">
                <circle
                  id="Ellipse_76"
                  data-name="Ellipse 76"
                  cx="71.175"
                  cy="71.175"
                  r="71.175"
                  fill="#298525"
                />
              </clipPath>
              <filter
                id="Rectangle_555"
                x="96.904"
                y="258.206"
                width="229.572"
                height="63.069"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodOpacity="0.102" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Rectangle_556"
                x="96.904"
                y="317.671"
                width="229.572"
                height="63.069"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur-2" />
                <feFlood floodOpacity="0.102" />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Rectangle_557"
                x="104.697"
                y="201.14"
                width="305.374"
                height="122.269"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="40" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="10" result="blur-3" />
                <feFlood floodColor="#a5a5a5" floodOpacity="0.2" />
                <feComposite operator="in" in2="blur-3" />
                <feComposite in="SourceGraphic" />
              </filter>
              <linearGradient
                id="linear-gradient"
                x1="-0.24"
                y1="0.158"
                x2="1.334"
                y2="0.93"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#286240" />
                <stop offset="0.181" stopColor="#286a39" />
                <stop offset="0.474" stopColor="#298228" />
                <stop offset="0.839" stopColor="#2ca90c" />
                <stop offset="0.987" stopColor="#2dbb00" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.164"
                y1="-0.03"
                x2="1.033"
                y2="1.503"
                href="#linear-gradient"
              />
            </defs>
            <g
              id="personal-information-illustration"
              transform="translate(-193.01 -187.411)"
            >
              <rect
                id="Rectangle_554"
                data-name="Rectangle 554"
                width="256.641"
                height="333.007"
                rx="8.256"
                transform="translate(276.379 263.831)"
                fill="#fff"
              />
              <circle
                id="Ellipse_68"
                data-name="Ellipse 68"
                cx="71.175"
                cy="71.175"
                r="71.175"
                transform="translate(236.35 230.752)"
                fill="#a5a5a5"
                opacity="0.2"
              />
              <g
                id="Group_824"
                data-name="Group 824"
                transform="translate(-107.314 97.421)"
              >
                <g
                  id="Group_795"
                  data-name="Group 795"
                  transform="translate(-5110.136 -97.038)"
                >
                  <ellipse
                    id="Ellipse_75"
                    data-name="Ellipse 75"
                    cx="71.175"
                    cy="71.175"
                    rx="71.175"
                    ry="71.175"
                    transform="translate(5443.586 220.038)"
                    fill="#298525"
                  />
                  <g
                    id="Group_794"
                    data-name="Group 794"
                    transform="translate(5443.586 220.038)"
                    clipPath="url(#clipPath)"
                  >
                    <g
                      id="Group_793"
                      data-name="Group 793"
                      transform="translate(7.276 19.876)"
                    >
                      <g id="Group_792" data-name="Group 792">
                        <g
                          id="Group_778"
                          data-name="Group 778"
                          transform="translate(19.244)"
                        >
                          <g id="Group_776" data-name="Group 776">
                            <g
                              id="Group_771"
                              data-name="Group 771"
                              transform="translate(0 15.453)"
                            >
                              <g
                                id="Group_768"
                                data-name="Group 768"
                                transform="translate(0 19.881)"
                              >
                                <path
                                  id="Path_887"
                                  data-name="Path 887"
                                  d="M5511.855,309.529s-8.738,6.82-1.918,15.133,22.166,4.689,21.313-8.1S5511.855,309.529,5511.855,309.529Z"
                                  transform="translate(-5493.952 -308.238)"
                                  fill="#142230"
                                />
                                <path
                                  id="Path_888"
                                  data-name="Path 888"
                                  d="M5508.565,329.171s-8.344,3.628-5.441,10.52,14.692,3.265,13.967-5.26S5508.565,329.171,5508.565,329.171Z"
                                  transform="translate(-5492.147 -315.838)"
                                  fill="#142230"
                                />
                                <path
                                  id="Path_889"
                                  data-name="Path 889"
                                  d="M5497.891,348.235S5490,344.4,5485.955,352.5l3.836,4.476,4.263-4.476-2.558,5.542,3.2-3.624-2.345,4.9,2.558,1.918S5502.793,353.564,5497.891,348.235Z"
                                  transform="translate(-5485.955 -322.86)"
                                  fill="#142230"
                                />
                                <path
                                  id="Path_890"
                                  data-name="Path 890"
                                  d="M5493.787,340.614l3.836-5.115,3.2,8.312,9.378,2.984-6.607,5.328-2.771-8.312Z"
                                  transform="translate(-5488.884 -318.435)"
                                  fill="#ffa755"
                                />
                              </g>
                              <g
                                id="Group_770"
                                data-name="Group 770"
                                transform="translate(59.259)"
                              >
                                <g
                                  id="Group_769"
                                  data-name="Group 769"
                                  transform="translate(0 20.766)"
                                >
                                  <path
                                    id="Path_891"
                                    data-name="Path 891"
                                    d="M5582.3,329.421s7.187,8.44,15.2,1.271,3.74-22.346-9-20.949S5582.3,329.421,5582.3,329.421Z"
                                    transform="translate(-5580.626 -309.653)"
                                    fill="#142230"
                                  />
                                  <path
                                    id="Path_892"
                                    data-name="Path 892"
                                    d="M5602.176,337.519s3.98,8.182,10.743,4.988,2.636-14.818-5.851-13.73S5602.176,337.519,5602.176,337.519Z"
                                    transform="translate(-5588.404 -316.779)"
                                    fill="#142230"
                                  />
                                  <path
                                    id="Path_893"
                                    data-name="Path 893"
                                    d="M5621.716,348.053s-3.5,8.043,4.768,11.743l4.309-4.024-4.653-4.068,5.646,2.319-3.756-3.04,5,2.134,1.807-2.637S5626.831,342.928,5621.716,348.053Z"
                                    transform="translate(-5595.721 -323.349)"
                                    fill="#142230"
                                  />
                                  <path
                                    id="Path_894"
                                    data-name="Path 894"
                                    d="M5614.379,350.607l-5.274-3.615,8.168-3.548,2.582-9.5,5.6,6.374-8.187,3.123Z"
                                    transform="translate(-5591.279 -318.74)"
                                    fill="#ffa755"
                                  />
                                </g>
                                <path
                                  id="Path_895"
                                  data-name="Path 895"
                                  d="M5595.56,276.478s4.831,17.9-3.694,27.282-9.662-17.335-9.662-17.335Z"
                                  transform="translate(-5581.216 -276.478)"
                                  fill="#142230"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_774"
                              data-name="Group 774"
                              transform="translate(21.072 8.245)"
                            >
                              <g
                                id="Group_772"
                                data-name="Group 772"
                                transform="translate(3.45 40.668)"
                              >
                                <path
                                  id="Path_896"
                                  data-name="Path 896"
                                  d="M5536.232,351.4c1.283-1.47-2.842-21.47-2.842-21.47l19.685,1.428s-.082,19.133,2.473,19.42c1.048.118,5.008,1.81,9.313,3.764-1.385,5.013-5.047,11.633-7.132,16.384-13.181-.928-25.3-3.812-32.6-16.221C5529.81,353.663,5535.491,352.251,5536.232,351.4Z"
                                  transform="translate(-5525.13 -329.933)"
                                  fill="#a9534f"
                                />
                                <path
                                  id="Path_897"
                                  data-name="Path 897"
                                  d="M5559.427,349.274c-1.472-4.559-1.416-17.913-1.416-17.913l-19.686-1.428s2.285,11.084,2.924,17.355C5547.086,349,5553.749,349.276,5559.427,349.274Z"
                                  transform="translate(-5530.065 -329.933)"
                                  fill="#853f38"
                                />
                              </g>
                              <g id="Group_773" data-name="Group 773">
                                <path
                                  id="Path_898"
                                  data-name="Path 898"
                                  d="M5530.426,274.671s9.886-12.544,22.255-9.115c15.705,4.354,18.252,16.188,20.115,29.484s-2.847,25.288-15.442,26.7C5546.412,322.959,5527.337,320.9,5530.426,274.671Z"
                                  transform="translate(-5523.536 -264.963)"
                                  fill="#a9534f"
                                />
                                <path
                                  id="Path_899"
                                  data-name="Path 899"
                                  d="M5526.47,303.4s-.879-2.4-4.778.19c-4.946,3.28-.234,15.587,5.686,14.4S5526.47,303.4,5526.47,303.4Z"
                                  transform="translate(-5519.619 -278.962)"
                                  fill="#a9534f"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_775"
                              data-name="Group 775"
                              transform="translate(13.418)"
                            >
                              <path
                                id="Path_900"
                                data-name="Path 900"
                                d="M5536.375,262.493s5.385,15.838-8.553,24.074c0,0,.95,8.552-2.851,9.5,0,0,1.451-8.138-3.075-10.4s-8.329,4.7-6.111,9.454c0,0-12.987-10.453-6.652-26.925C5515.948,250.475,5535.424,252.673,5536.375,262.493Z"
                                transform="translate(-5507.392 -252.982)"
                                fill="#142230"
                              />
                              <path
                                id="Path_901"
                                data-name="Path 901"
                                d="M5542.964,259s6.252-10.8,21.03-5.968,16.482,14.493,15.346,27-6.813-4.139-6.813-4.139-6.729-17.038-26.045-8.139C5528.172,276.189,5542.964,259,5542.964,259Z"
                                transform="translate(-5518.586 -251.791)"
                                fill="#142230"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_777"
                            data-name="Group 777"
                            transform="translate(23.175 33.753)"
                          >
                            <path
                              id="Path_902"
                              data-name="Path 902"
                              d="M5579.676,316.816l-.467.255c-.723.4-1.455.767-2.2,1.129-.749.344-1.508.688-2.3.97a23.546,23.546,0,0,1,1.825-1.711c.458-.4.935-.785,1.42-1.155a26.4,26.4,0,0,1-1.95-4.877,25.155,25.155,0,0,1-.661-2.812,16.677,16.677,0,0,1-.265-2.9,43.128,43.128,0,0,1,2.425,5.194c.714,1.755,1.357,3.51,1.966,5.3Z"
                              transform="translate(-5542.326 -305.714)"
                              fill="#7f3b37"
                            />
                            <path
                              id="Path_903"
                              data-name="Path 903"
                              d="M5527.456,317.407a4.292,4.292,0,0,1-.988-.705,2.87,2.87,0,0,1-.758-1.023,1.617,1.617,0,0,1,.053-1.393,2.36,2.36,0,0,1,.758-.82c.018-.846.009-1.71-.053-2.539a7.506,7.506,0,0,0-.511-2.521c-.177-.353-.371-.512-.671-.494a3.044,3.044,0,0,0-1.111.449,2.717,2.717,0,0,0-1.084,2.275,2.71,2.71,0,0,1,.706-2.733,3.158,3.158,0,0,1,1.375-.741,1.249,1.249,0,0,1,.943.168,1.853,1.853,0,0,1,.608.652,6.909,6.909,0,0,1,.679,2.875,17.114,17.114,0,0,1-.061,2.848l-.027.212-.186.115a2.138,2.138,0,0,0-.767.6,1.063,1.063,0,0,0-.15.891A4.463,4.463,0,0,0,5527.456,317.407Z"
                              transform="translate(-5522.978 -306.244)"
                              fill="#7f3b37"
                            />
                            <path
                              id="Path_904"
                              data-name="Path 904"
                              d="M5558.33,331.99s7.839,7.311,16.364.491Z"
                              transform="translate(-5536.201 -315.542)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_779"
                          data-name="Group 779"
                          transform="translate(31.178 70.727)"
                        >
                          <path
                            id="Path_905"
                            data-name="Path 905"
                            d="M5569.525,389.445l-.914.178c.052-2.555.036-4.651-.075-6.086-.853-11.082-4.263-13.214-4.263-13.214l-9.378-4.263s.426,7.247-11.083,10.657-17.477-11.936-17.477-11.936l-9.8,1.279-11.51,21.314s-.426,14.067,11.51,30.265c0,0-7.673,13.641-6.395,26.855s54.563.426,54.563.426,1.783-19.124,2.949-36.387C5576.846,397.351,5569.525,389.445,5569.525,389.445Z"
                            transform="translate(-5505.02 -364.781)"
                            fill="#ffa755"
                          />
                          <path
                            id="Path_906"
                            data-name="Path 906"
                            d="M5550.028,408.517c-9.509,1.043-19.027-1.627-27.9-4.876-5.3-1.939-11.153-4.392-15.142-8.571l-1.962,3.634s-.426,14.067,11.51,30.265c0,0-7.673,13.641-6.395,26.855s54.563.426,54.563.426,1.783-19.124,2.949-36.387c7.235-8.8,4.247-15.567,2.644-18.054C5563.873,405.084,5556.878,407.766,5550.028,408.517Z"
                            transform="translate(-5505.02 -376.111)"
                            fill="#ff9451"
                          />
                        </g>
                        <g
                          id="Group_781"
                          data-name="Group 781"
                          transform="translate(22.119 107.051)"
                        >
                          <g id="Group_780" data-name="Group 780">
                            <path
                              id="Path_907"
                              data-name="Path 907"
                              d="M5490.548,506.77a145.942,145.942,0,0,1,11.789-45.879c-.564-4.541,15.378,2.107,13.183-35.324-.221-3.792,45.438-2.566,45.438-2.566,11.093,24.311,15.81,54.379,17.15,83.769Z"
                              transform="translate(-5490.548 -422.812)"
                              fill="#438584"
                            />
                            <path
                              id="Path_908"
                              data-name="Path 908"
                              d="M5543.838,440.373l34.955.426s8.525,29.839-17.477,30.265C5543.223,471.361,5543.838,440.373,5543.838,440.373Z"
                              transform="translate(-5510.48 -429.381)"
                              fill="#519694"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_786"
                          data-name="Group 786"
                          transform="translate(81.054 71.153)"
                        >
                          <g
                            id="Group_783"
                            data-name="Group 783"
                            transform="translate(9.184 10.975)"
                          >
                            <g id="Group_782" data-name="Group 782">
                              <path
                                id="Path_909"
                                data-name="Path 909"
                                d="M5646.621,420.613c-7.262-14.982-25.346-37.617-25.346-37.617l-13.2,13.262s17.524,19.378,21.306,24.883Z"
                                transform="translate(-5602.626 -382.996)"
                                fill="#a9534f"
                              />
                              <path
                                id="Path_910"
                                data-name="Path 910"
                                d="M5627.614,440.944l-1.491,1.49-10.774,29.209s-1.89-5.811-3.348-5.522-22.407,10.957.075,2.443c0,0-29.128,15.076.83,3.154,0,0-25.027,13.238.1,3.175,0,0-22.118,12.416-.177,2.206,0,0,1.149,5.59,5.983,3.729s27.192-35.114,24.558-38.924S5627.614,440.944,5627.614,440.944Z"
                                transform="translate(-5599.372 -404.289)"
                                fill="#a9534f"
                              />
                            </g>
                            <path
                              id="Path_911"
                              data-name="Path 911"
                              d="M5635.42,402.141c-7.074-10.3-14.145-19.145-14.145-19.145l-13.2,13.262s9.61,10.627,16.133,18.379A65.82,65.82,0,0,0,5635.42,402.141Z"
                              transform="translate(-5602.626 -382.996)"
                              fill="#954745"
                            />
                          </g>
                          <path
                            id="Path_912"
                            data-name="Path 912"
                            d="M5608.145,406.042c-3.105-3.623-10.6-13.442-12.5-14.778-6.021-4.233-10.941-24.44-10.941-24.44s18.33,2.558,25.434,7.674c1.459,1.05,12.277,12.283,14.661,16.94C5620.627,397.178,5616.306,401.977,5608.145,406.042Z"
                            transform="translate(-5584.7 -365.972)"
                            fill="#ffa755"
                          />
                          <g
                            id="Group_785"
                            data-name="Group 785"
                            transform="translate(2.7)"
                          >
                            <g
                              id="Group_784"
                              data-name="Group 784"
                              transform="translate(4.547 33.037)"
                            >
                              <path
                                id="Path_913"
                                data-name="Path 913"
                                d="M5596.694,418.241l-.272,7.392,3.873.471.538-7.508"
                                transform="translate(-5596.331 -418.241)"
                                fill="none"
                                stroke="#fd9250"
                                strokeMiterlimit="10"
                                strokeWidth="0.967"
                              />
                              <path
                                id="Path_914"
                                data-name="Path 914"
                                d="M5596.281,427.477a2.335,2.335,0,0,0,2.205,2.459h0a2.336,2.336,0,0,0,2.459-2.206h0a2.336,2.336,0,0,0-2.206-2.459h0a2.335,2.335,0,0,0-2.458,2.205Z"
                                transform="translate(-5596.278 -420.87)"
                                fill="#ffa755"
                              />
                            </g>
                            <path
                              id="Path_915"
                              data-name="Path 915"
                              d="M5589.013,365.462,5593.276,399l6.252,1.705-.284-32.965Z"
                              transform="translate(-5589.013 -365.462)"
                              fill="#438584"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_791"
                          data-name="Group 791"
                          transform="translate(0 70.016)"
                        >
                          <g
                            id="Group_788"
                            data-name="Group 788"
                            transform="translate(0 11.743)"
                          >
                            <g
                              id="Group_787"
                              data-name="Group 787"
                              transform="translate(0 0.001)"
                            >
                              <path
                                id="Path_916"
                                data-name="Path 916"
                                d="M5455.434,422.345c5.746-15.626,21.5-39.937,21.5-39.937l14.45,11.893s-15.523,21.014-18.742,26.866Z"
                                transform="translate(-5455.294 -382.408)"
                                fill="#a9534f"
                              />
                              <path
                                id="Path_917"
                                data-name="Path 917"
                                d="M5470.931,442.023l1.631,1.336,13.606,28s1.307-5.97,2.786-5.826,23.38,8.689.167,2.439c0,0,30.474,12.124-.515,3.22,0,0,26.212,10.7.216,3.17,0,0,23.236,10.169.395,2.178,0,0-.591,5.676-5.585,4.3s-30.529-32.255-28.283-36.306S5470.931,442.023,5470.931,442.023Z"
                                transform="translate(-5455.211 -404.6)"
                                fill="#a9534f"
                              />
                            </g>
                            <path
                              id="Path_918"
                              data-name="Path 918"
                              d="M5470.325,402.856c6.022-10.944,12.183-20.449,12.183-20.449l14.45,11.893s-8.513,11.525-14.237,19.882A65.8,65.8,0,0,1,5470.325,402.856Z"
                              transform="translate(-5460.864 -382.407)"
                              fill="#954745"
                            />
                          </g>
                          <path
                            id="Path_919"
                            data-name="Path 919"
                            d="M5491.271,404.12c2.732-3.912,15.205-16.95,16.963-18.466,5.573-4.808-1.027-20.913-1.027-20.913s-14.761,3.227-19.15,6.419c-6.252,4.548-13.563,15.4-15.475,20.27A44.768,44.768,0,0,0,5491.271,404.12Z"
                            transform="translate(-5461.709 -364.056)"
                            fill="#ffa755"
                          />
                          <g
                            id="Group_790"
                            data-name="Group 790"
                            transform="translate(39.705)"
                          >
                            <g
                              id="Group_789"
                              data-name="Group 789"
                              transform="translate(7.313 33.661)"
                            >
                              <path
                                id="Path_920"
                                data-name="Path 920"
                                d="M5530.326,417.853l1.125,7.311,3.893-.267-.886-7.475"
                                transform="translate(-5530.326 -417.422)"
                                fill="none"
                                stroke="#fd9250"
                                strokeMiterlimit="10"
                                strokeWidth="0.967"
                              />
                              <path
                                id="Path_921"
                                data-name="Path 921"
                                d="M5531.738,427a2.337,2.337,0,0,0,2.629,2h0a2.336,2.336,0,0,0,2-2.63h0a2.335,2.335,0,0,0-2.629-2h0a2.335,2.335,0,0,0-2,2.629Z"
                                transform="translate(-5530.846 -420.014)"
                                fill="#ffa755"
                              />
                            </g>
                            <path
                              id="Path_922"
                              data-name="Path 922"
                              d="M5518.643,365.067l5.684,33.818,7.389-.568-4.832-34.67Z"
                              transform="translate(-5518.643 -363.646)"
                              fill="#438584"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="Group_738"
                data-name="Group 738"
                transform="translate(226.136 220.421)"
              >
                <circle
                  id="Ellipse_69"
                  data-name="Ellipse 69"
                  cx="71.175"
                  cy="71.175"
                  r="71.175"
                  fill="#298525"
                />
                <g
                  id="Group_737"
                  data-name="Group 737"
                  clipPath="url(#clipPath)"
                >
                  <g
                    id="Group_736"
                    data-name="Group 736"
                    transform="translate(-50.793 16.343)"
                  >
                    <g
                      id="Group_711"
                      data-name="Group 711"
                      transform="translate(82.425)"
                    >
                      <path
                        id="Path_832"
                        data-name="Path 832"
                        d="M326.544,259.755s8.069-16.792,24.516-13.071S364.5,273.247,364.5,273.247Z"
                        transform="translate(-296.233 -246.146)"
                        fill="#ff9451"
                      />
                      <path
                        id="Path_833"
                        data-name="Path 833"
                        d="M365.485,294.184c-2.272,9.5-23.186,11.5-47.414,5.706S276.044,281.7,278.315,272.2s23.754-12.514,47.982-6.723S367.757,284.68,365.485,294.184Z"
                        transform="translate(-278.12 -252.273)"
                        fill="#ffa755"
                      />
                    </g>
                    <path
                      id="Path_834"
                      data-name="Path 834"
                      d="M314.989,347.776s1.46,15.631-1.217,16.008-23.777,8.285-23.777,8.285,13.985,24.681,32.72,25.246,33.492-28.662,33.492-28.662-20.538-4.3-22-5.434,1.46-17.7,1.46-17.7Z"
                      transform="translate(-200.137 -283.315)"
                      fill="#a9534f"
                    />
                    <path
                      id="Path_835"
                      data-name="Path 835"
                      d="M328.715,363.536c6.944-.275,13.76-1.169,19.594-3.651.22-5.156,1.843-14.369,1.843-14.369l-20.681,2.26S330.752,361.489,328.715,363.536Z"
                      transform="translate(-214.62 -283.315)"
                      fill="#853f38"
                    />
                    <g
                      id="Group_712"
                      data-name="Group 712"
                      transform="translate(103.178 21.326)"
                    >
                      <path
                        id="Path_836"
                        data-name="Path 836"
                        d="M345.768,289.485s-6.035-12.24-19.315-8.59-14.285,17.4-15.09,29.422S315.2,332.8,325.849,333.3C335.1,333.725,351,330.718,345.768,289.485Z"
                        transform="translate(-311.274 -280.215)"
                        fill="#a9534f"
                      />
                      <path
                        id="Path_837"
                        data-name="Path 837"
                        d="M365.606,316.586s.64-2.268,4.148-.081c4.45,2.774.992,14.433-4.195,13.65S365.606,316.586,365.606,316.586Z"
                        transform="translate(-330.722 -293.433)"
                        fill="#a9534f"
                      />
                    </g>
                    <path
                      id="Path_838"
                      data-name="Path 838"
                      d="M364.348,276.08c-.289-.024-6.149,1.92-1.892,2.02-3.553,4.513-3.094,5.508-8.38,6.924-2.163,8.944,3.785,13.849,3.785,13.849l-.719,10.632,4.057.123s-.6-7.3,2.414-8.161,4.225,2.792,4.225,2.792C373.673,295.669,378.4,277.234,364.348,276.08Z"
                      transform="translate(-223.929 -257.343)"
                      fill="#a9534f"
                    />
                    <path
                      id="Path_839"
                      data-name="Path 839"
                      d="M317.3,283.106a45.828,45.828,0,0,1,39.091,10.6s11.5-5.749,9.581-13.414-37.686-14.947-48.672-8.815S317.3,283.106,317.3,283.106Z"
                      transform="translate(-208.525 -254.765)"
                      fill="#ffa755"
                    />
                    <path
                      id="Path_840"
                      data-name="Path 840"
                      d="M326.36,311.944a28.229,28.229,0,0,1-.307,3.564q-.256,1.769-.679,3.51a31.145,31.145,0,0,1-1.038,3.437,18.546,18.546,0,0,1-1.541,3.288l-.216-.668c.73.392,1.451.8,2.167,1.224s1.425.859,2.112,1.34c-.807-.228-1.59-.51-2.374-.788s-1.553-.587-2.319-.9l-.446-.185.23-.485a33.679,33.679,0,0,0,1.269-3.219q.559-1.652,1.059-3.339l1.011-3.38C325.63,314.209,325.977,313.077,326.36,311.944Z"
                      transform="translate(-212.003 -270.758)"
                      fill="#7f3b37"
                    />
                    <path
                      id="Path_841"
                      data-name="Path 841"
                      d="M368.363,328.891a7.066,7.066,0,0,0,.608-.958,2.908,2.908,0,0,0,.341-.982,1.044,1.044,0,0,0-.193-.787,1.925,1.925,0,0,0-.713-.5l-.234-.127-.044-.27a16.779,16.779,0,0,1-.241-2.754,7.263,7.263,0,0,1,.458-2.859,2.211,2.211,0,0,1,.516-.736,1.27,1.27,0,0,1,1.005-.322,2.809,2.809,0,0,1,.784.27l.337.2.3.247a2.7,2.7,0,0,1,.716,2.7,2.819,2.819,0,0,0-1.182-2.106,3.357,3.357,0,0,0-.52-.233,2.056,2.056,0,0,0-.5-.1.319.319,0,0,0-.223.121,1.266,1.266,0,0,0-.2.389,9.039,9.039,0,0,0-.284,2.441c0,.863.011,1.753.067,2.617l-.277-.4a2.609,2.609,0,0,1,.992.97,1.722,1.722,0,0,1,.088,1.407,2.957,2.957,0,0,1-.674,1.047A4.48,4.48,0,0,1,368.363,328.891Z"
                      transform="translate(-229.272 -273.24)"
                      fill="#7f3b37"
                    />
                    <path
                      id="Path_842"
                      data-name="Path 842"
                      d="M339.967,342.8c.021-.006.048-.021.075,0s.006.06,0,.083a.872.872,0,0,1-.069.134c-.053.083-.112.161-.172.238-.124.15-.258.291-.395.428a10.161,10.161,0,0,1-.877.762,12.513,12.513,0,0,1-1.974,1.234,12.373,12.373,0,0,1-4.509,1.3,10.216,10.216,0,0,1-4.67-.7,9.654,9.654,0,0,1-3.748-2.7,16.489,16.489,0,0,0,4.052,1.811,12.172,12.172,0,0,0,4.268.384,16.131,16.131,0,0,0,4.231-.955,20.264,20.264,0,0,0,2.036-.871c.337-.16.662-.339.987-.526.162-.093.322-.192.475-.3.078-.052.155-.106.227-.164a.735.735,0,0,0,.1-.1C340.04,342.823,340.028,342.787,339.967,342.8Z"
                      transform="translate(-212.717 -282.294)"
                      fill="#7f3b37"
                    />
                    <g
                      id="Group_735"
                      data-name="Group 735"
                      transform="translate(0 43.886)"
                    >
                      <g
                        id="Group_715"
                        data-name="Group 715"
                        transform="translate(87.142 31.857)"
                      >
                        <g
                          id="Group_713"
                          data-name="Group 713"
                          transform="translate(0 3.623)"
                        >
                          <path
                            id="Path_843"
                            data-name="Path 843"
                            d="M311.218,373.816,321.809,395s9.34-14.369,11.308-22.062c0,0,8.27.868,27.6,7.332,4.079,1.363-6.074,78.063-10.535,83.118s-58.472,2.024-61.633-8.1c-.447-1.287,1.9-2.4,1.58-6.578-1.569-20.474-4.477-69.962-4.477-69.962Z"
                            transform="translate(-285.655 -372.937)"
                            fill="#ff6a59"
                          />
                          <path
                            id="Path_844"
                            data-name="Path 844"
                            d="M344.639,437.117c-12.205,6.817-24.143,14.191-37.868,17.929a122.931,122.931,0,0,1-15.707,3.107c.275,4.022.536,7.669.767,10.684.321,4.181-2.027,5.291-1.58,6.578,3.16,10.121,57.171,13.153,61.633,8.1,2.756-3.123,7.69-33.612,10.094-56.771A191.035,191.035,0,0,1,344.639,437.117Z"
                            transform="translate(-287.353 -393.062)"
                            fill="#001624"
                            opacity="0.2"
                          />
                        </g>
                        <g
                          id="Group_714"
                          data-name="Group 714"
                          transform="translate(19.451)"
                        >
                          <path
                            id="Path_845"
                            data-name="Path 845"
                            d="M333.433,393.049l-11.5-25.325-5.209,3.592,3.413,21.374,7.544-5.209Z"
                            transform="translate(-316.729 -367.364)"
                            fill="#ff8a73"
                          />
                          <path
                            id="Path_846"
                            data-name="Path 846"
                            d="M355.628,367.15l-12.214,25.685,6.825-5.568,9.34,6.107,1.976-22.631Z"
                            transform="translate(-326.71 -367.15)"
                            fill="#ff8a73"
                          />
                        </g>
                      </g>
                      <g id="Group_720" data-name="Group 720">
                        <g
                          id="Group_717"
                          data-name="Group 717"
                          transform="translate(19.967 51.731)"
                        >
                          <g id="Group_716" data-name="Group 716">
                            <path
                              id="Path_847"
                              data-name="Path 847"
                              d="M254.72,450.534c11.571-15.006,25.442-44.92,25.442-44.92L259.948,398.9s-10.837,27.69-14.525,34.338Z"
                              transform="translate(-203.432 -398.9)"
                              fill="#a9534f"
                            />
                            <path
                              id="Path_848"
                              data-name="Path 848"
                              d="M228.515,446.282,187.082,439.6c-2.712-12.1-4.444-5.008-3.069-.855-10.35-2.767-3.329,2.142-3.329,2.142-5.112-.069.035,3.095.035,3.095-4.377-.315-.522,2.3-.522,2.3-12.879.774,45.276,21.073,49.43,16.962,1.781-1.763,7.739-11.12,11.5-18.005Z"
                              transform="translate(-178.339 -411.606)"
                              fill="#a9534f"
                            />
                          </g>
                          <path
                            id="Path_849"
                            data-name="Path 849"
                            d="M263.579,426.583c2.525,1.132,5.063,2.1,7.622,2.975,6.844-12.364,12.214-23.944,12.214-23.944L263.2,398.9s-4.787,12.229-9.081,22.385C256.824,423.672,260.623,425.258,263.579,426.583Z"
                            transform="translate(-206.685 -398.9)"
                            fill="#954745"
                          />
                        </g>
                        <g
                          id="Group_718"
                          data-name="Group 718"
                          transform="translate(67.713 40.345)"
                        >
                          <path
                            id="Path_850"
                            data-name="Path 850"
                            d="M273.272,418.123c3.547-4.23,7.742-11.533,9.943-13.119,6.976-5.026-4.487-24.295-4.487-24.295s-9.049,1.169-13.2,5.885a142.452,142.452,0,0,0-10.908,17.277C259.761,410.257,263.461,413.785,273.272,418.123Z"
                            transform="translate(-254.616 -380.71)"
                            fill="#ff6a59"
                          />
                        </g>
                        <g id="Group_719" data-name="Group 719">
                          <path
                            id="Path_851"
                            data-name="Path 851"
                            d="M189.854,317.859a1.669,1.669,0,0,0-3.336.131l1.4,35.477a12.865,12.865,0,0,1-3,8.9,10.833,10.833,0,0,1-6.366,3.714l-1.882-47.705a1.669,1.669,0,0,0-3.336.131l1.886,47.813-10.92.431-1.886-47.813a1.669,1.669,0,0,0-3.336.131l1.878,47.611c-5.324-.815-9.541-5.7-9.781-11.767l-1.4-35.477a1.669,1.669,0,0,0-3.336.131l1.4,35.477c.334,8.447,6.86,15.107,14.671,15.107.046,0,.093,0,.14,0,.016,0,.031.005.046.005h.067c.016,0,.03-.006.046-.007.081,0,.163,0,.244-.005l6.277-.247,10.331,261.856a1.668,1.668,0,0,0,1.666,1.6h.067a1.669,1.669,0,0,0,1.6-1.734L172.668,369.765l4.351-.172h0l.254-.01a14.026,14.026,0,0,0,10.184-5.047,16.2,16.2,0,0,0,3.793-11.2Z"
                            transform="translate(-146.441 -316.256)"
                            fill="#232323"
                          />
                          <path
                            id="Path_852"
                            data-name="Path 852"
                            d="M182.776,442.5s5.553,1.909,5.206,3.211-5.38-.868-5.38-.868,6.248,2.95,6.074,4.078-5.987-.868-5.987-.868,6.161,2.083,5.813,3.3-6.42-1.215-6.42-1.215,5.206,1.822,5.292,2.95-6.681-1.475-6.681-1.475l.781-2.17.521-3.731Z"
                            transform="translate(-159.253 -363.476)"
                            fill="#a9534f"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_727"
                        data-name="Group 727"
                        transform="translate(87.098 37.162)"
                      >
                        <g
                          id="Group_722"
                          data-name="Group 722"
                          transform="translate(0 31.944)"
                        >
                          <path
                            id="Path_853"
                            data-name="Path 853"
                            d="M294.154,427.54s-6.723,32.617-6.715,38.1c.038,26.719-2.424,138.027-.782,198.522,0,0,12.108,4.4,15.961,1.1,3.3-20.914,3.919-61.437,8.873-91.708,4.663-28.5,9.909-62.214,9.909-62.214l2.4.407s13.064,142.982,15.265,153.439c12.659,3.3,17.062-2.2,17.062-2.2s-2.3-165.06,1.176-192.882c.557-4.451-12.8-.279-11.406-41.451C346.024,424.944,294.154,427.54,294.154,427.54Z"
                            transform="translate(-285.775 -426.657)"
                            fill="#5996bf"
                          />
                          <g
                            id="Group_721"
                            data-name="Group 721"
                            transform="translate(0 74.049)"
                          >
                            <path
                              id="Path_854"
                              data-name="Path 854"
                              d="M286.871,544.955c-1.252,44.65-1.939,106.853-.4,163.456,0,0,12.108,4.4,15.961,1.1,3.3-20.914,3.919-61.437,8.873-91.708,4.36-26.644,9.228-57.839,9.844-61.792C311.2,554.524,295.638,549.618,286.871,544.955Z"
                              transform="translate(-285.585 -544.955)"
                              fill="#0d1122"
                              opacity="0.2"
                            />
                            <path
                              id="Path_855"
                              data-name="Path 855"
                              d="M364.023,747.8c1.937,19.2,3.542,33.925,4.195,37.023,12.659,3.3,17.062-2.2,17.062-2.2s-.04-14.7-.188-36.121Q374.561,747.2,364.023,747.8Z"
                              transform="translate(-314.924 -620.343)"
                              fill="#0d1122"
                              opacity="0.2"
                            />
                          </g>
                          <path
                            id="Path_856"
                            data-name="Path 856"
                            d="M306.389,443.452l38.822.44s3.739,29.151-17.545,29.94C301.564,474.8,306.389,443.452,306.389,443.452Z"
                            transform="translate(-293.235 -432.939)"
                            fill="#67b3dc"
                          />
                        </g>
                        <g
                          id="Group_724"
                          data-name="Group 724"
                          transform="translate(6.402 0.03)"
                        >
                          <g
                            id="Group_723"
                            data-name="Group 723"
                            transform="translate(1.946 29.803)"
                          >
                            <path
                              id="Path_857"
                              data-name="Path 857"
                              d="M298.921,423.285l.127,7.24,3.811.254.127-7.367"
                              transform="translate(-298.921 -423.285)"
                              fill="none"
                              stroke="#fd9250"
                              strokeMiterlimit="10"
                              strokeWidth="0.967"
                            />
                            <path
                              id="Path_858"
                              data-name="Path 858"
                              d="M298.921,432.268a2.287,2.287,0,0,0,2.287,2.287h0a2.286,2.286,0,0,0,2.286-2.287h0a2.287,2.287,0,0,0-2.286-2.287h0a2.287,2.287,0,0,0-2.287,2.287Z"
                              transform="translate(-298.921 -425.79)"
                              fill="#ffa755"
                            />
                          </g>
                          <path
                            id="Path_859"
                            data-name="Path 859"
                            d="M295.812,377.29l.707,29.368,6.009.269,2.828-31.255Z"
                            transform="translate(-295.812 -375.673)"
                            fill="#5996bf"
                          />
                        </g>
                        <g
                          id="Group_726"
                          data-name="Group 726"
                          transform="translate(54.53)"
                        >
                          <g
                            id="Group_725"
                            data-name="Group 725"
                            transform="translate(0 29.2)"
                          >
                            <path
                              id="Path_860"
                              data-name="Path 860"
                              d="M374.1,422.274l-1.376,7.11,3.675,1.038,1.651-7.181"
                              transform="translate(-372.71 -422.274)"
                              fill="none"
                              stroke="#fd9250"
                              strokeMiterlimit="10"
                              strokeWidth="0.967"
                            />
                            <path
                              id="Path_861"
                              data-name="Path 861"
                              d="M372.75,431.315a2.287,2.287,0,0,0,1.763,2.71h0a2.286,2.286,0,0,0,2.71-1.763h0a2.286,2.286,0,0,0-1.763-2.71h0a2.287,2.287,0,0,0-2.711,1.763Z"
                              transform="translate(-372.7 -424.978)"
                              fill="#ffa755"
                            />
                          </g>
                          <path
                            id="Path_862"
                            data-name="Path 862"
                            d="M376.419,375.625l-2.782,30.045,6.12,1.669,5.564-30.323Z"
                            transform="translate(-373.05 -375.625)"
                            fill="#5996bf"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_732"
                        data-name="Group 732"
                        transform="translate(65.25 275.796)"
                      >
                        <g
                          id="Group_729"
                          data-name="Group 729"
                          transform="translate(70.49 0.15)"
                        >
                          <path
                            id="Path_863"
                            data-name="Path 863"
                            d="M363.294,758.361l3.45,41.618s70.5,18.74,18.039-8.121l2.844-34.762Z"
                            transform="translate(-363.294 -757.097)"
                            fill="#ffa755"
                          />
                          <g
                            id="Group_728"
                            data-name="Group 728"
                            transform="translate(3.284 41.546)"
                          >
                            <path
                              id="Path_864"
                              data-name="Path 864"
                              d="M406.18,829.017c6.985,7.559-37.527-3.9-37.527-3.9l-.113-1.644C372.088,824.376,404.181,832.465,406.18,829.017Z"
                              transform="translate(-368.54 -823.47)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g id="Group_731" data-name="Group 731">
                          <path
                            id="Path_865"
                            data-name="Path 865"
                            d="M295.26,759.4l-5.641,41.379s-71.387,14.995-17.585-9.062l-1.007-34.863Z"
                            transform="translate(-251.16 -756.858)"
                            fill="#ffa755"
                          />
                          <g
                            id="Group_730"
                            data-name="Group 730"
                            transform="translate(0 42.599)"
                          >
                            <path
                              id="Path_866"
                              data-name="Path 866"
                              d="M251.5,828.465c-7.374,7.18,37.68-1.917,37.68-1.917l.2-1.636C285.787,825.63,253.312,832.014,251.5,828.465Z"
                              transform="translate(-250.682 -824.912)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_734"
                        data-name="Group 734"
                        transform="translate(141.685 39.918)"
                      >
                        <g
                          id="Group_733"
                          data-name="Group 733"
                          transform="translate(0 6.677)"
                        >
                          <path
                            id="Path_867"
                            data-name="Path 867"
                            d="M403.932,390.694l-8.514,8.044c-.869,3.86-1.816,7.7-2.794,11.536,5.9,7.036,16.3,19.594,19.194,24.1h19.636C423.714,417.074,403.932,390.694,403.932,390.694Z"
                            transform="translate(-380.21 -390.694)"
                            fill="#a9534f"
                          />
                          <path
                            id="Path_868"
                            data-name="Path 868"
                            d="M404.511,390.694l-9.463,8.94a68.343,68.343,0,0,1-.875,11.8c3.671,4.389,8.631,10.38,12.567,15.359a74.9,74.9,0,0,0,13.194-13.824C412.246,401.008,404.511,390.694,404.511,390.694Z"
                            transform="translate(-380.79 -390.694)"
                            fill="#954745"
                          />
                          <path
                            id="Path_869"
                            data-name="Path 869"
                            d="M406.148,457.329l-1.748,1.644-13.274,32.853s-1.947-6.676-3.617-6.4-25.872,11.684,0,2.782c0,0-33.662,16.135.834,3.616,0,0-28.932,14.188,0,3.617,0,0-25.594,13.353-.278,2.5,0,0,1.113,6.4,6.676,4.451s32.158-39,29.293-43.424S406.148,457.329,406.148,457.329Z"
                            transform="translate(-372.792 -415.296)"
                            fill="#a9534f"
                          />
                        </g>
                        <path
                          id="Path_870"
                          data-name="Path 870"
                          d="M405.25,386.339c-1.793-2.119-8.215-4.419-14.745-6.312-.238,1.817-2.58,24.474-2.248,24.722,2.114,1.586,6.144,8.889,9.551,13.119,9.426-4.338,12.98-7.866,17.922-14.252A143.383,143.383,0,0,0,405.25,386.339Z"
                          transform="translate(-378.565 -380.027)"
                          fill="#ff6a59"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="Group_748"
                data-name="Group 748"
                transform="translate(437.562 284.018)"
              >
                <g
                  id="Group_742"
                  data-name="Group 742"
                  transform="translate(46.321 7.1)"
                >
                  <g id="Group_739" data-name="Group 739">
                    <path
                      id="Path_871"
                      data-name="Path 871"
                      d="M660.1,335.47H639.439a.939.939,0,0,1,0-1.878H660.1a.939.939,0,0,1,0,1.878Z"
                      transform="translate(-638.5 -333.592)"
                      fill="#9b9b9b"
                    />
                  </g>
                  <g
                    id="Group_740"
                    data-name="Group 740"
                    transform="translate(3.262 7.61)"
                  >
                    <path
                      id="Path_872"
                      data-name="Path 872"
                      d="M662.045,347.628H644.65a.939.939,0,0,1,0-1.878h17.395a.939.939,0,0,1,0,1.878Z"
                      transform="translate(-643.711 -345.75)"
                      fill="#9b9b9b"
                    />
                  </g>
                  <g
                    id="Group_741"
                    data-name="Group 741"
                    transform="translate(9.785 15.221)"
                  >
                    <path
                      id="Path_873"
                      data-name="Path 873"
                      d="M665.943,359.786H655.071a.939.939,0,0,1,0-1.878h10.872a.939.939,0,0,1,0,1.878Z"
                      transform="translate(-654.132 -357.908)"
                      fill="#9b9b9b"
                    />
                  </g>
                </g>
                <g
                  id="Group_747"
                  data-name="Group 747"
                  transform="translate(0 0)"
                >
                  <g id="Group_743" data-name="Group 743">
                    <path
                      id="Path_874"
                      data-name="Path 874"
                      d="M580.149,353.548A15.649,15.649,0,1,1,595.8,337.9,15.667,15.667,0,0,1,580.149,353.548Zm0-29.42A13.771,13.771,0,1,0,593.92,337.9,13.786,13.786,0,0,0,580.149,324.128Z"
                      transform="translate(-564.5 -322.25)"
                      fill="#9b9b9b"
                    />
                  </g>
                  <g
                    id="Group_746"
                    data-name="Group 746"
                    transform="translate(7.694 7.01)"
                  >
                    <g
                      id="Group_744"
                      data-name="Group 744"
                      transform="translate(4.118)"
                    >
                      <path
                        id="Path_875"
                        data-name="Path 875"
                        d="M587.207,341.122a3.836,3.836,0,1,1,3.836-3.837A3.84,3.84,0,0,1,587.207,341.122Zm0-5.8a1.959,1.959,0,1,0,1.959,1.959A1.961,1.961,0,0,0,587.207,335.327Z"
                        transform="translate(-583.371 -333.449)"
                        fill="#9b9b9b"
                      />
                    </g>
                    <g
                      id="Group_745"
                      data-name="Group 745"
                      transform="translate(0 9.283)"
                    >
                      <path
                        id="Path_876"
                        data-name="Path 876"
                        d="M591.761,356.274a.939.939,0,0,1-.929-.812,6.143,6.143,0,0,0-12.171,0,.939.939,0,1,1-1.86-.253,8.02,8.02,0,0,1,15.892,0,.939.939,0,0,1-.8,1.057A.981.981,0,0,1,591.761,356.274Z"
                        transform="translate(-576.792 -348.279)"
                        fill="#9b9b9b"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1, 0, 0, 1, 193.01, 187.41)"
                filter="url(#Rectangle_555)"
              >
                <rect
                  id="Rectangle_555-2"
                  data-name="Rectangle 555"
                  width="211.572"
                  height="45.069"
                  rx="5.535"
                  transform="translate(105.9 264.21)"
                  fill="#fff"
                />
              </g>
              <g
                transform="matrix(1, 0, 0, 1, 193.01, 187.41)"
                filter="url(#Rectangle_556)"
              >
                <rect
                  id="Rectangle_556-2"
                  data-name="Rectangle 556"
                  width="211.572"
                  height="45.069"
                  rx="5.535"
                  transform="translate(105.9 323.67)"
                  fill="#fff"
                />
              </g>
              <g
                id="Group_751"
                data-name="Group 751"
                transform="translate(478.976 307.022)"
              >
                <g id="Group_750" data-name="Group 750">
                  <path
                    id="Path_877"
                    data-name="Path 877"
                    d="M760.691,450.744h0a115.769,115.769,0,0,1,15.47,44.525L781,532.482l-13.14-35.151A115.767,115.767,0,0,1,760.691,450.744Z"
                    transform="translate(-679.239 -393.317)"
                    fill="#c4c4c4"
                  />
                  <g id="Group_749" data-name="Group 749">
                    <path
                      id="Path_878"
                      data-name="Path 878"
                      d="M760.7,416.212h0a115.765,115.765,0,0,0,37.353-28.749L822.509,359l-30.264,22.187A115.764,115.764,0,0,0,760.7,416.212Z"
                      transform="translate(-679.302 -359)"
                      fill="#c4c4c4"
                    />
                    <path
                      id="Path_879"
                      data-name="Path 879"
                      d="M712.059,437.475h0a115.76,115.76,0,0,1-46.465-7.921l-34.933-13.706,37.13,5.441A115.754,115.754,0,0,1,712.059,437.475Z"
                      transform="translate(-630.661 -380.264)"
                      fill="#c4c4c4"
                    />
                  </g>
                  <path
                    id="Path_880"
                    data-name="Path 880"
                    d="M762.85,445.562a5.766,5.766,0,1,1-6.986-4.205A5.766,5.766,0,0,1,762.85,445.562Z"
                    transform="translate(-675.855 -389.741)"
                    fill="#c4c4c4"
                  />
                </g>
                <path
                  id="Path_881"
                  data-name="Path 881"
                  d="M764.472,681.389H739.1L751.47,446.082h1.556Z"
                  transform="translate(-671.222 -391.573)"
                  fill="#c4c4c4"
                />
              </g>
              <g
                id="Group_756"
                data-name="Group 756"
                transform="translate(327.707 388.551)"
              >
                <g
                  transform="matrix(1, 0, 0, 1, -134.7, -201.14)"
                  filter="url(#Rectangle_557)"
                >
                  <rect
                    id="Rectangle_557-2"
                    data-name="Rectangle 557"
                    width="245.374"
                    height="52.269"
                    rx="5.535"
                    transform="translate(134.7 201.14)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="Group_755"
                  data-name="Group 755"
                  transform="translate(17.786 11.615)"
                >
                  <g id="Group_753" data-name="Group 753">
                    <circle
                      id="Ellipse_71"
                      data-name="Ellipse 71"
                      cx="14.519"
                      cy="14.519"
                      r="14.519"
                      fill="#f2a133"
                    />
                    <g
                      id="Group_752"
                      data-name="Group 752"
                      transform="translate(6.186 6.548)"
                    >
                      <path
                        id="Path_882"
                        data-name="Path 882"
                        d="M440.2,534.208a.941.941,0,0,1-.437-.107l-4.133-2.173L431.5,534.1a.939.939,0,0,1-1.362-.991l.789-4.6-3.343-3.259a.939.939,0,0,1,.52-1.6l4.621-.671,2.066-4.187a.939.939,0,0,1,1.684,0l2.066,4.187,4.621.671a.939.939,0,0,1,.52,1.6l-3.344,3.259.79,4.6a.939.939,0,0,1-.926,1.1Zm-4.57-4.28a.943.943,0,0,1,.437.108l2.886,1.517-.551-3.213a.94.94,0,0,1,.27-.831l2.335-2.275-3.227-.469a.938.938,0,0,1-.707-.513l-1.443-2.924-1.442,2.924a.939.939,0,0,1-.707.513l-3.226.469,2.334,2.275a.939.939,0,0,1,.27.831l-.551,3.213,2.886-1.517A.947.947,0,0,1,435.63,529.928Z"
                        transform="translate(-427.297 -518.266)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_754"
                    data-name="Group 754"
                    transform="translate(36.941 3.971)"
                  >
                    <rect
                      id="Rectangle_558"
                      data-name="Rectangle 558"
                      width="172.861"
                      height="8.755"
                      rx="4.378"
                      fill="#e8e8e8"
                    />
                    <rect
                      id="Rectangle_559"
                      data-name="Rectangle 559"
                      width="93.732"
                      height="8.755"
                      rx="4.378"
                      transform="translate(0 12.341)"
                      fill="#e8e8e8"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Group_757"
                data-name="Group 757"
                transform="translate(225.136 404.045)"
              >
                <rect
                  id="Rectangle_560"
                  data-name="Rectangle 560"
                  width="7.235"
                  height="108.293"
                  transform="translate(23.779 84.873)"
                  fill="#863524"
                />
                <path
                  id="Path_883"
                  data-name="Path 883"
                  d="M269.671,514c-7.235,0-16.672,8.494-14.785,20.762,1.41,9.165-2.891,12.109-7.864,18.874-3.772,5.133-15.01,12.589-8.468,30.262,3.12,8.431-1.231,14.8-5.688,20.07-10.381,12.269-17.189,54.819,26.641,45.3,39.106-8.494,17.626-36.037,21.49-50.333,3.145-11.639,14.3-20.447,9.582-33.03s-14.667-17-10.577-28.958S279.109,514,269.671,514Z"
                  transform="translate(-225.136 -514)"
                  fill="url(#linear-gradient)"
                />
              </g>
              <g
                id="Group_762"
                data-name="Group 762"
                transform="translate(312.557 459.556)"
              >
                <g id="Group_760" data-name="Group 760">
                  <circle
                    id="Ellipse_72"
                    data-name="Ellipse 72"
                    cx="14.519"
                    cy="14.519"
                    r="14.519"
                    fill="#f2a133"
                  />
                  <g
                    id="Group_759"
                    data-name="Group 759"
                    transform="translate(7.939 7.941)"
                  >
                    <g id="Group_758" data-name="Group 758">
                      <path
                        id="Path_884"
                        data-name="Path 884"
                        d="M390.638,621.949a.938.938,0,0,1-.939.939H385v4.7a.939.939,0,0,1-1.878,0v-4.7h-4.7a.939.939,0,0,1,0-1.878h4.7v-4.7a.939.939,0,0,1,1.878,0v4.7h4.7A.938.938,0,0,1,390.638,621.949Z"
                        transform="translate(-377.48 -615.37)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
                <g
                  id="Group_761"
                  data-name="Group 761"
                  transform="translate(36.941 3.971)"
                >
                  <rect
                    id="Rectangle_561"
                    data-name="Rectangle 561"
                    width="147.345"
                    height="8.755"
                    rx="4.378"
                    fill="#e8e8e8"
                  />
                  <rect
                    id="Rectangle_562"
                    data-name="Rectangle 562"
                    width="109.66"
                    height="8.755"
                    rx="4.378"
                    transform="translate(0 12.341)"
                    fill="#e8e8e8"
                  />
                </g>
              </g>
              <g
                id="Group_766"
                data-name="Group 766"
                transform="translate(312.557 519.098)"
              >
                <g
                  id="Group_764"
                  data-name="Group 764"
                  transform="translate(0 0)"
                >
                  <circle
                    id="Ellipse_73"
                    data-name="Ellipse 73"
                    cx="14.519"
                    cy="14.519"
                    r="14.519"
                    fill="#f2a133"
                  />
                  <g
                    id="Group_763"
                    data-name="Group 763"
                    transform="translate(8.659 7.093)"
                  >
                    <path
                      id="Path_885"
                      data-name="Path 885"
                      d="M390.335,709.765a.647.647,0,0,0-.551-.495,14.278,14.278,0,0,0-4.857.156A9.479,9.479,0,0,0,380.17,712a5.266,5.266,0,0,0,0,7.443,5.451,5.451,0,0,0,.538.47v3.437a.642.642,0,0,0,1.283,0v-2.717a5.313,5.313,0,0,0,1.9.351,5.226,5.226,0,0,0,3.724-1.54c1.458-1.465,1.271-3.443,1.158-4.626l-.019-.238c-.156-1.753-.275-3.136,1.289-4.131a.632.632,0,0,0,.3-.545A.512.512,0,0,0,390.335,709.765Zm-2.823,2.153a9.152,9.152,0,0,0-.031,2.773c.125,1.452.25,2.823-.77,3.843a3.958,3.958,0,0,1-2.817,1.164,4.027,4.027,0,0,1-1.89-.469,9.67,9.67,0,0,1,2.629-6.159,8.935,8.935,0,0,1,2.516-1.872c.25-.119.5-.225.745-.313A4.33,4.33,0,0,0,387.512,711.918Zm-6.7,6.322a3.995,3.995,0,0,1,.269-5.339,8.348,8.348,0,0,1,4.538-2.3,10.468,10.468,0,0,0-1.915,1.59A10.852,10.852,0,0,0,380.808,718.24Z"
                      transform="translate(-378.63 -709.137)"
                      fill="#fff"
                    />
                  </g>
                </g>
                <g
                  id="Group_765"
                  data-name="Group 765"
                  transform="translate(36.941 3.971)"
                >
                  <rect
                    id="Rectangle_563"
                    data-name="Rectangle 563"
                    width="124.057"
                    height="8.755"
                    rx="4.378"
                    fill="#e8e8e8"
                  />
                  <rect
                    id="Rectangle_564"
                    data-name="Rectangle 564"
                    width="150.973"
                    height="8.755"
                    rx="4.378"
                    transform="translate(0 12.341)"
                    fill="#e8e8e8"
                  />
                </g>
              </g>
              <path
                id="Path_886"
                data-name="Path 886"
                d="M612.935,801.5c-.563-.407-1.446-.751-1.915-1.164-1.984-1.79-3.875-3.6-5.8-5.4,1.415,2.322,3.355,4.563,4.97,6.835.476.676-.006,1.458-.056,2.185l-1.033.019c-.438-.513-.876-1.027-1.427-1.665-.451.332-.732.545-.833.62q-7.54-5.878-15.148-11.824c-.282.05-.563.1-.839.157.939.77,1.809,1.559,2.854,2.31.914.645.951,1.12-.595,1.69-2.479.908-5.4,1.671-6.792,2.986a15.4,15.4,0,0,1-2.6,1.44c-3.111-2.059-5.677-3.756-8.231-5.446a64.376,64.376,0,0,0,5.49,4.92c.313.269.532.751.156.908-1.734.751-3.693,1.427-5.671,2.166-.538-.513-.92-.876-1.308-1.239l-.438.207c.106.526.219,1.052.332,1.6-2.3-.275-3.161-.789-2.955-1.659.57-2.366.989-4.738,1.484-7.1a8.021,8.021,0,0,1,.5-1.189c-.282-.013-.563-.025-.839-.044q-1.615,4.272-3.217,8.538a11.106,11.106,0,0,1-1.6-3.468c-.419-1.214-.826-2.429-1.377-3.637-.513-1.1-1.2-2.2-1.8-3.293l-.138.038c.757,3.167,1.534,6.335,2.372,9.827-3.217-.632-5.339-1.114-7.587-1.471-1.646-.257-1.9-.645-1.69-1.246.557-1.628,1.02-3.255,1.515-4.882l-.532-.038c-1.759,3.656-3.524,7.317-5.352,11.111-1.233-.8-2.16-1.408-3.1-2.022.9.939,1.07,1.822-1.7,2.729.363-1,.626-1.765.9-2.535-.638.5-1.277,1-2.1,1.634-.864-.419-1.615-.782-2.022-.983,3.03-4.494,7.655-8.55,11.812-12.676-4.382,3.418-8.375,6.9-12.475,10.353a6.494,6.494,0,0,1-2.235.864c-1.371-.376-2.61-.839-1.415-1.609a9.126,9.126,0,0,0,1.315-1.2l-.488-.094c-.876.513-1.746,1.027-2.635,1.534l-.945-.075c.138-.488-.019-1.026.488-1.446,2.3-1.915,4.789-3.8,7.211-5.69-.163-.038-.319-.075-.488-.113-3.073,2.016-6.147,4.025-9.252,6.059-3.468-1.283-7.08-2.629-10.691-3.969,2.961,1.358,6,2.692,8.857,4.088.67.319.757.826,1.108,1.252-.282.05-.57.094-.851.144-1.859-.6-3.731-1.2-5.59-1.8-.1.038-.207.075-.313.119,1.878.613,3.768,1.227,5.54,1.8-2.729,1.709-4.9,3.055-7.092,4.426l-.225-.15.908-3.023-.394-.038q-.77,1.211-1.552,2.41c-.263.019-.369.031-.632.05-1.221-1.271-2.385-2.554-3.693-3.818a10.285,10.285,0,0,0-1.759-1.02c-1.484-.832-1.828-1.646,0-2.491,1.515-.714,2.911-1.465,4.363-2.2.782-.582,1.559-1.158,2.347-1.734-.144-.044-.3-.088-.444-.131-2.629,1.283-5.258,2.566-8.056,3.925-.4-.732-.739-1.34-1.1-1.953l-.325.019c.1.607.2,1.221.357,2.178l-6.328-4.206a29.316,29.316,0,0,0,4.5,4c1.027.77,1.246,1.4-.1,2.21-1.584.951-2.385,2.084-3.749,3.1-1.252.926-2.8,1.79-4.213,2.685-.257-.056-.519-.106-.782-.156,1.709-1.7,3.418-3.405,5.2-5.164-2.811.826-5.815,1.715-9.158,2.7-1.052-2.961-2.053-5.74-3.055-8.519-.426.714-.156,1.39-.106,2.072.182,2.31,1.991,4.645-.4,6.929a11.569,11.569,0,0,1-2.2,1.133l-1.033-.207c.357-1.446.707-2.886,1.139-4.6-3.086,2.291-2.773,4.776-5.158,7h-.745c-1.027-1.34-1.915-2.5-2.779-3.662-.15-.213-.257-.457-.113-.657.607-.851,1.308-1.69,2-2.573-1.915.545-3.85,1.089-6.335,1.79.369-.845.638-1.458.883-2.016a5.956,5.956,0,0,1-1.271-.15,3.313,3.313,0,0,1-.407-1.014c-.926-2.235-1.865-4.469-2.8-6.7a7.92,7.92,0,0,0,.5,3.681c.326,1.264.469,2.529.795,3.787.682,2.71.676,2.867-.92,3.436-.457-.413-.914-.807-1.69-1.5.163,1.114,1.978,2.041-1.865,2.717v-6.541c-.507-.031-.3-.019-.807-.044-.363,2.6-.714,5.2-1.07,7.806-.469.012-.933.025-1.39.031-.326-.739-.645-1.471-.964-2.21-.294-.632-.595-1.258-.889-1.89-.326.044-.294.038-.613.081-.219,1.6-.426,3.2-.676,5.1-3.155-3.261-6.022-6.216-9.014-9.3.213,1.277.4,2.36.576,3.443h.025a7.359,7.359,0,0,1,1.584.244,18.337,18.337,0,0,1,.745,2.629,7.784,7.784,0,0,1,1.246.1c.626,1.133,1.227,2.279,1.8,3.418h-4.344a21.317,21.317,0,0,1,.983-3.136c-.889,1.039-1.79,2.072-2.7,3.136h-.263c-1.5-2.185-3.192-4.35.939-6.391-1.959.883-3.925,1.765-6.022,2.717-4.763-3.825-5.02-7.662,1-11.511-.382-.025-.77-.056-1.171-.088q-6.094,5.483-12.169,10.96c-.419-.125-.5-.144-.914-.269-.15-.77-.288-1.527-.407-2.1-.526,1.2-1.133,2.573-1.728,3.956-.638.188-1.277.376-2.009.588-.826-1.446-1.615-2.829-2.4-4.213-.294.025-.582.044-.883.063.069.382.113.757.213,1.139s.269.751.438,1.2c-4.094-1.465-4.388-1.947-2.51-3.743.469-.444.858-.9,1.277-1.346-.138-.019-.288-.044-.426-.063-.945.657-1.89,1.308-3.073,2.128-1.991-1.246-3.756-2.341-5.515-3.437,1.233,1.4,3.825,2.735,3.918,4.1.1,1.339-2.335,2.7-3.649,4.05-.319-.031-.632-.063-.945-.088q-1.117-1.9-2.241-3.787c-.113.006-.238.019-.363.031q.61,1.831,1.214,3.649c-1.853-.776-2.817-1.7-4.357-2.46-2.354-1.171-2.516-2.4-2.022-3.787a30.532,30.532,0,0,0,.9-4.3c-.125-.006-.257-.012-.388-.012q-2.028,4.864-4.05,9.721c-.394-.006-.789-.006-1.171-.006-.876-1.628-1.759-3.249-2.71-5.008-.682,1.471-1.321,2.829-2.041,4.375l-1.565-.889c.25.851.52,1.784.789,2.723-.469.369-.545.426-1.02.795-4.638-1.746-6-4.294-7.58-6.491-1.634-2.26-.156-4.864-.056-7.18-.776,1.6-1.646,3.374-2.591,5.339q-4.638-2.864-8.538-5.271c-.044.044-.138.131-.238.219-.864-.313-1.59-.576-2.3-.839,2.134,1.515,2.141,1.515,1.509,3.462a5.2,5.2,0,0,1-.77,1.928,21.272,21.272,0,0,1-2.541,2.116c-.275-.069-.369-.088-.645-.15-.726-1.828-1.433-3.662-2.191-5.577-.451.538-.8.958-1.146,1.383.382.169,1,.319,1.108.513,1.371,2.548-.388,4.97-2.141,7.4v-3.092c-2.948,1.9-5.5,3.537-8.475,5.446.451-1.634.807-2.961,1.158-4.288-.325-.025-.645-.05-.976-.069-.764,1.12-1.54,2.241-2.31,3.368-.275,0-.557,0-.833.006,0-.6-.576-1.333.1-1.784,3.4-2.322,7.123-4.569,10.735-6.842-2.767,1.227-5.677,2.41-8.269,3.687a46.984,46.984,0,0,0-4.488,2.785c-4.113-2.247-3.08-4.882-5.214-7.224.181,1.008.363,2.009.557,3.017-.175.094-.182.1-.351.194l-7.405-5.152c-.113.463.307.826.739,1.189,2.322,1.947,5.3,3.818,6.8,5.853,1.709,2.31,2.6,4.776-.914,7.123a17.2,17.2,0,0,1-1.784-3.624c-.081-.219-.031-.469-.294-.657-.751-.538-1.79-1.014-2.416-1.565-1.89-1.659-3.643-3.349-5.446-5.026,1.452,2.372,3.4,4.651,5.058,6.961.388.532-.081,1.177-.413,1.746a5.957,5.957,0,0,1-2,.131,8.93,8.93,0,0,1-2.109-1.333c-2.235-1.859-4.281-3.762-6.616-5.6-2.422-1.922-5.089-3.793-7.662-5.69l-.651.131c1.014.82,1.965,1.646,3.061,2.447.745.545.7.908-.532,1.4-2.5.989-5.59,1.771-7.111,3.13a13.089,13.089,0,0,1-2.986,1.133c-2.341-1.559-4.507-3-6.666-4.438-.15.432.213.77.6,1.1,1.327,1.07,2.723,2.122,3.937,3.211a.54.54,0,0,1-.225.9c-1.684.72-3.58,1.365-5.49,2.072-.545-.526-.939-.908-1.34-1.308-.194.081-.175.075-.369.163.113.563.232,1.12.344,1.7-2.8-.269-3.061-1.027-2.923-1.884q.545-3.455,1.064-6.917l-.382-.081c-.92,2.473-1.834,4.958-2.76,7.443h-.388q-2.047-5.23-4.094-10.466c-.288.019-.576.031-.851.05,1.177,3.186,2.76,6.36,2.147,9.74-2.322-.438-4.106-.858-6.028-1.12-2.573-.344-3.136-.951-2.66-1.94a40.183,40.183,0,0,0,1.59-4.388c-.188-.006-.382-.025-.57-.031-1.778,3.656-3.555,7.317-5.383,11.1-1.2-.782-2.122-1.39-3.042-2,.908.939.889,1.8-1.759,2.723.351-1.008.613-1.771.883-2.541-.651.495-1.283.989-2.1,1.615-.876-.426-1.627-.789-1.984-.97,2.723-4.175,6.936-7.906,10.616-11.724-4.025,3.1-7.612,6.285-11.324,9.439a6.167,6.167,0,0,1-2.26.8c-1.271-.344-2.479-.782-1.452-1.521a10.18,10.18,0,0,0,1.346-1.283c-.163-.025-.332-.05-.482-.081l-2.491,1.5c-.313-.013-.638-.019-.945-.031.106-.476-.106-1,.369-1.415,1.915-1.671,4.031-3.311,6.078-4.964l-.645-.131c-2.6,1.771-5.227,3.543-8.213,5.577a10.226,10.226,0,0,0-1.7-.958c-3.268-1.183-6.623-2.335-9.946-3.5l1.678-1.565c-.138-.038-.288-.075-.432-.113-2.441,1.208-4.876,2.416-7.5,3.718-.426-.795-.77-1.452-1.12-2.1-.1,0-.188.006-.294.013.106.67.2,1.333.357,2.316-2.585-1.728-4.782-3.2-6.979-4.676,1.678,1.7,3.749,3.33,5.659,4.989a.738.738,0,0,1,.113,1.146,56.461,56.461,0,0,1-4.726,3.906c-1.133.833-2.635,1.59-3.975,2.385-.244-.056-.482-.106-.726-.156l5.327-5.308c-1.834.532-3.787,1.089-5.759,1.659v5.026H243.71v14.873H613.2V801.791A.976.976,0,0,0,612.935,801.5Zm-354.54,4.563h-1.7c.188-.958.977-1.909,3.161-2.823C259.346,804.226,258.864,805.159,258.395,806.06Zm-1.884-2.2c-1.052-1.809,1.221-3.192,3.149-4.926C261.112,801.046,260.4,802.58,256.511,803.857Zm6.842,2.2a9.754,9.754,0,0,1-.557-4.444c1.358,1.477,2.8,2.948,4.031,4.444Zm9.5,0h-2.2c.595-1.365,3.487-2.466,5.083-3.712Q274.294,804.2,272.854,806.06Zm4.2-5.558c-1.853-.6-3.718-1.2-5.571-1.809-.113.05-.232.1-.357.144,1.915.607,3.825,1.208,5.671,1.79-2.735,1.69-4.9,3.036-7.43,4.6.238-.939.394-1.609.557-2.272l-.507-.056c-.351.457-.7.92-1.221,1.584-1.515-1.308-2.879-2.466-4.213-3.631-.463-.407-.864-.826-1.264-1.239-.57-.582-1.978-1.34-1.49-1.715a44.361,44.361,0,0,1,5.533-3.067c3.393,1.427,6.829,2.836,10.1,4.307.676.3.72.814,1.052,1.233Zm2.372,5.558h-.689a1.839,1.839,0,0,1,.689-.476Zm2.823,0h-1.8c-.106-.6.156-1.2,2.942-1.659C282.97,805.015,282.594,805.553,282.25,806.06Zm11.53,0c-1.9-.676-1.571-.97.376-1.991l1.058,1.991Zm13.408,0h-4.357c-.182-.526,1.327-.876,5-2.172C307.6,804.658,307.388,805.378,307.188,806.06Zm.106-2.591c-1.277.507-2.811.914-4.77,1.54v-2.7l-.444-.056c-.526.526-1.058,1.045-1.59,1.571l-.582-.019v-4.507c2.735.613,4.989,1.077,7.123,1.615C308.665,801.309,308.847,802.849,307.294,803.469Zm10.441,2.591a4.5,4.5,0,0,1-2.98,2.435c-1.158-.77-1.465-1.634-1.02-2.435.413-.789,1.546-1.515,3.3-2.028A1.712,1.712,0,0,1,317.735,806.06Zm2.084-3.637c1.778-.676,3.349-1.433,5.008-2.153.225.081.457.156.682.238q-2.347,1.756-4.707,3.53C318.443,803.619,317.817,803.168,319.82,802.423Zm1.164,3.637c0-.006-.006-.006-.006-.013.463-.069.926-.131,1.39-.2.081.069.163.144.257.213Zm4.72,0H325.7c-.983-.626-1.621-1.033-2.579-1.653.707-.52,1.978-1.446,3.249-2.372l1.108.131C326.931,803.375,326.38,804.57,325.7,806.06Zm2.954,0v-1.315c.207-.013.413-.019.613-.025.056.444.119.9.175,1.34Zm19.023,0a7.82,7.82,0,0,1-1.746,2.986c-2.341-.908-3.086-1.922-3.28-2.986-.232-1.346.419-2.773-.169-4.15-.363.983-.682,1.84-1,2.692h-.419c-.219-1.271-.432-2.548-.645-3.775-.77.613-1.69,1.333-2.6,2.059-.232-.038-.457-.069-.682-.106-.369-.732-.739-1.458-1.1-2.191-.244,1.333.807,2.729-1.634,3.918a.047.047,0,0,0,.025-.006l-.019.019c1.471-.357,1.878.031,1.74.495a8.79,8.79,0,0,1-.382,1.045H333.44a2.879,2.879,0,0,1,.97-1.54c-.025.013-.056.013-.081.025a.157.157,0,0,1,.044-.025c-.545.182-1.083.357-1.621.532-4.375-3.011-4.175-4.519.77-6.81-.745.225-1.484.451-2.329.714.069-1,2.241-2.241,6.986-4.019.595.457,1.2.864,1.665,1.3a62.18,62.18,0,0,0,5.634,5.3C347.506,803.049,348.05,804.539,347.681,806.06Zm6.228,0-.488-1.2,1.559-.094c.138.432.282.864.426,1.3Zm10.272,0c.119-.332.232-.664.351-1a3.013,3.013,0,0,1,1.421,1Zm9.64-.6c-2.66-.57-3.887-1.152-2.191-2.216a26.128,26.128,0,0,0,2.66-2.109c.257.031.513.069.77.094C374.653,802.6,374.253,803.988,373.821,805.459Zm15.73-1.2c-.056.194-1.114.344-1.721.513-.457-.319-1.365-.67-1.252-.958.2-.494,1.052-.945,1.621-1.415.426,0,.851.006,1.264.006A5.014,5.014,0,0,1,389.551,804.257Zm-.739-6.109c-.063.244-.113.476-.163.714-.213.044-.419.088-.645.131a9.8,9.8,0,0,1-1.89-1.264c-.3-.344-.025-.764.063-1.145.288-1.289.6-2.579.908-3.875,3.086,1.465,5.7,2.848,6.817,4.526-.313.094-.626.188-.939.288-.4-.282-.795-.563-1.346-.951C392.111,797.96,391.21,798.423,388.812,798.148Zm3.868,2.723v-1.953l1.221-.019c.125.676.244,1.352.369,2.028Zm2.955,5.189c-.081-.182-.169-.369-.257-.551.344-.038.689-.069,1.033-.106.2.219.407.438.613.657Zm1.8-1.865c-.607-.757-1.214-1.521-1.828-2.278l.951-.113c.676.751,1.358,1.5,2.034,2.253C398.208,804.1,397.82,804.151,397.432,804.195Zm12.8.851c-2.867-1.565-1.452-3.142-.7-4.7C409.75,801.885,412.43,803.368,410.232,805.046Zm9,1.014h-3.405v-5.646C419.9,801.735,420.561,803.938,419.234,806.06Zm12.475,0a6.358,6.358,0,0,1-3.142,2.917,3.362,3.362,0,0,1-2.1-2.917c-.019-1.79,1.577-3.774,4.544-4.895C431.709,802.855,432.379,804.483,431.709,806.06Zm8.644-.682H439.32c-.05-.376-.244-.77-.113-1.145.1-.3.545-.576.851-.864.407.207,1.127.413,1.1.607A4.35,4.35,0,0,1,440.353,805.378Zm7.58.682h-.169c-.782-.463-1.283-.77-1.778-1.07l.563,1.07h-2.9c-.494-.7-1.227-1.515,1.252-2.028a4.467,4.467,0,0,1,.488-1.746c.845-1.2,1.928-2.372,2.923-3.555.438.025.876.05,1.321.081C449.085,801.146,448.541,803.494,447.934,806.06Zm3.1-.1v-5.552C453.786,801.785,453.786,804.239,451.038,805.96Zm5.02.1c-.257-.607-.513-1.221-.757-1.828.338-.031.676-.056,1.008-.081l.563,1.909Zm23.054,0H476.6c-.613-.782-.15-1.458,1.346-2.2C480.2,804.558,479.707,805.315,479.112,806.06Zm6.022-5.026c.351.031.695.063,1.052.088q-.723,1.267-1.452,2.523l-.951-.075C483.563,802.674,482.474,801.71,485.134,801.034Zm-.451,5.026c-.595-.945.682-1.953,2.16-2.967q.357,1.484.732,2.967Zm22.2-4.457c-1.421,1.008-2.779,1.972-4.119,2.917C500.977,803.049,502.291,802.066,506.886,801.6Zm.269,4.457h-1.4c.645-.332,1.515-.645,2.153-.983C507.656,805.409,507.405,805.735,507.155,806.06Zm8.25,0H513.7c.15-.92.889-1.834,3.1-2.7C516.313,804.3,515.85,805.19,515.405,806.06Zm-1.721-2.278c-.357-.044-.72-.088-1.1-.131q1.728-2.244,3.43-4.482c.3.031.6.069.908.1C518.065,801,517.508,802.561,513.684,803.782Zm6.86,2.278c-.494-1.5-.976-2.955-1.471-4.438,2.629,1.221,4.169,2.836,4.394,4.438Zm9.333,0h-2.1c.3-.933,1.922-2.116,5-3.7C531.811,803.581,530.854,804.8,529.877,806.06Zm7.055,0h-1.465a2.358,2.358,0,0,1,.507-.482c.344.006.682.019,1.02.025C536.976,805.753,536.951,805.91,536.932,806.06Zm2.4,0h-1.853c-.25-.595-.131-1.17,2.228-1.577C540.137,805.071,539.849,805.584,539.335,806.06Zm11.424,0c-1.7-.507-1.446-.939.344-2.066.426.764.776,1.4,1.152,2.066Zm13.414,0h-4.407c-.063-.52,1.377-.87,4.976-2.109C564.549,804.689,564.355,805.39,564.173,806.06Zm.119-2.635c-.72.6-2.823.958-4.7,1.546v-2.685c-.169-.019-.35-.044-.538-.063-.507.532-1.02,1.058-1.534,1.59l-.588-.019v-4.519c2.911.676,5.809,1.083,7.555,1.865C565.469,801.578,565.081,802.761,564.292,803.425Zm10.478,2.635h-4.056c.426-.826,1.615-1.565,3.455-2.016A1.809,1.809,0,0,1,574.771,806.06Zm2.166-3.656c1.621-.72,3.267-1.427,4.907-2.141l.682.2c-1.534,1.171-3.073,2.341-4.6,3.512C574.865,803.387,574.833,803.331,576.936,802.4Zm1.646,3.656a2.644,2.644,0,0,1,.275-.169l.432.169Zm4.169-.081c-1.052-.532-1.778-.9-2.81-1.427.889-.657,2.147-1.584,3.405-2.51.376.044.745.081,1.127.125C583.928,803.375,583.384,804.577,582.751,805.979Zm3.468.081h-.495v-1.427c.169-.006.326-.006.495-.013Zm6.691,0h-2.516c.019-.595.607-1.158,1.84-1.709C593.2,804.9,593.474,805.065,592.911,806.06Zm11.8,0h-5.02c-.25-1.321.351-2.7-.182-4.044-.394.964-.739,1.784-1.083,2.6-.138-.006-.275-.006-.413-.006-.169-1.3-.325-2.591-.5-3.906-.82.7-1.665,1.433-2.516,2.172l-.807-.075c-.388-.751-.789-1.5-1.171-2.253h-.225a6.833,6.833,0,0,1,.182,1.584,2.142,2.142,0,0,1-.6,1.534,20.829,20.829,0,0,1-3.142,1.753c-.939-1.527-2.485-2.8-2.279-4.019.188-1.158,2.2-2.279,4.025-3.336-.9.282-1.8.563-2.7.845-.307-.094-.607-.194-.92-.288,2.41-1.221,4.814-2.429,7.624-3.85.839.651,1.515,1.1,2,1.565,2.41,2.347,4.7,4.707,7.167,7.042C605.092,804.276,605.461,805.109,604.71,806.06Zm6.178,0a2.009,2.009,0,0,1,1.089-1.289c.138.432.275.858.419,1.289Z"
                transform="translate(-6.948 -213.353)"
                fill="url(#linear-gradient-2)"
              />
            </g>
          </svg>

          <div className="capital-details">
            <div className="information-menu">
              <Link to="#" className="capital-link current-capital-link">
                <i className="capital-link-number current-number">1</i> Bank
                Information
              </Link>

              {/* <hr className="capital-link-line" /> */}

              <Link to="capital-1.html" className="capital-link ">
                <i className="capital-link-number current-number">2</i> BVN
              </Link>
            </div>
            
            
            <form onSubmit={handleSubmit}>
              <div className="capital-information block">
              <Errormsg errorText={nubanError || non_field_errors}/>
                <select
                  className="bankName"
                  name="bank"
                  value={form.bank}
                  onChange={handleChange}
                  id="bank"
                  required
                  style={{marginTop:"0"}}
                >
                  <option value="Bank Name">Bank Name</option>
                  {lists ? (
                    lists.data.map((item, index) => {
                      return (
                        <Options
                          key={item.id}
                          value={item.code}
                          item={item.name}
                        />
                      );
                    })
                  ) : (
                    <></>
                  )}
                </select>
                <Input
                  type="number"
                  class="act-num-input"
                  placeholder="Account Number"
                  onChange={handleChange}
                  value={form.nuban}
                  name="nuban"
                  id="nuban"
                />

                <button
                  className="ci-apply-btn primary-btn"
                  disabled={spinner ? true : false}
                >
                  {spinner ? <Spiner /> : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bank;
