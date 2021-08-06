import React, { useState, useEffect } from "react";
import UserHeading from "../../Common/User-heading";
// import UserMenuBar from "../../Common/User-menu-bar";
// import CapitalBlock from "../../Common/Capital-block";
import { useHistory } from "react-router-dom";
import getUrl from "../../Common/get-url";
import { useAuth } from "../../Context/Auth-context";
import VerificationStatus from "../../Common/verification-status";
import Footer from "../../Common/Footer";

function Capital() {
  const [success, setSuccess] = useState(true);
  const [isGotPlans, setIsGotPlans] = useState(true);
  const [options, setOptions] = useState([]);
  const { authTokens } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const formatter = new Intl.NumberFormat("en");
  useEffect(() => {
    fetch(getUrl("plans"), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${authTokens}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setOptions(data);
          setDisabled(false);
        } else {
          setIsGotPlans(false);
        }
        setSuccess(false);
      });
  }, [authTokens]);

  const [ProduceId, setProduceId] = useState([]);
  const [produceDetails, setProduceDetails] = useState([]);
  useEffect(() => {
    setProduceId(options);
  }, [options]);

  const showProduceDetails = (i) => {
    const currentProduce = ProduceId.filter((item) => parseInt(i) === item.id);
    setProduceDetails(currentProduce);
  };

  const [planForm, setplanForm] = useState({
    produce: "",
  });

  const handleChange = (e) => {
    setplanForm({
      ...planForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    history.push(`/dashboard/capital/apply/${planForm.produce}`);
  };

  return (
    <>
      <main>
        {success ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="loader"></div>
          </div>
        ) : isGotPlans ? (
          <>
            <div className="m-left">
              <UserHeading title="Apply for capital" />
              <form className="plans_form" onSubmit={handleSubmit}>
                <label htmlFor="produce" className="select-title">
                  Choose a plan
                </label>

                <select
                  id="produce"
                  name="produce"
                  onChange={(e) => handleChange(e)}
                  className="select-option"
                  value={planForm.produce}
                  required
                  onClick={() => showProduceDetails(planForm.produce)}
                >
                  <option
                    value=""
                    disabled
                    defaultValue
                    style={{ color: "#aaaaaa" }}
                  >
                    Select a plan
                  </option>
                  {options.map((item) =>
                    item.produce.variety ? (
                      <option key={item.id} value={item.id}>
                        {item.id} - {item.produce.name} ({item.produce.variety})
                      </option>
                    ) : (
                      <option key={item.id} value={item.id}>
                        {item.id} - {item.produce.name}
                      </option>
                    )
                  )}
                </select>

                <button
                  type="submit"
                  className="planning-input-button"
                  style={
                    disabled
                      ? { opacity: "0.5", marginBottom: "1.5rem" }
                      : {
                          opacity: "1",
                          cursor: "pointer",
                          marginBottom: "1.5rem",
                        }
                  }
                  disabled={disabled ? true : false}
                >
                  Submit
                </button>
              </form>{" "}
              {produceDetails.length > 0 ? (
                <div className="farm-resources-box" style={{ paddingTop: "0" }}>
                  <div className="Farm_resources">
                    <h2 className="keys">{produceDetails[0].produce.name}</h2>
                    <div className="farm_resource_">
                      <div className="farm-resource farm-resource-1">
                        <div className="flex-container farm-resource-container_">
                          <div className="farm-resource-icon">
                            <img
                              src="/images/available-hectares-of-land.svg"
                              alt="pests"
                              className="key-block-sub-title-icon"
                            />
                          </div>
                          <div>
                            <p className="key-block-sub-paragraph">
                              Available hectares of land
                            </p>
                            <h3 className="farm-resources-number">
                              {produceDetails[0].landsize}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="farm-resource farm-resource-2">
                        <div className="flex-container farm-resource-container_">
                          <div className="farm-resource-icon">
                            <img
                              src="/images/available-capital.svg"
                              alt="pests"
                              className="key-block-sub-title-icon"
                            />
                          </div>
                          <div>
                            <p className="key-block-sub-paragraph">
                              Available capital
                            </p>
                            <h3 className="farm-resources-number">
                              {produceDetails[0].capital === "NAN"
                                ? "0"
                                : formatter.format(produceDetails[0].capital)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* <label htmlFor="capital" className="capital-label">
          Apply for capital
        </label>

        <div className="capital-block block capital-offered">
          <h3 className="capital-title capital-offered-title">
            Capital Provider
            <span className="capital-offered-subtitle">Produce Offered</span>
          </h3>
          </div>

          <CapitalBlock /> */}
            </div>{" "}
          </>
        ) : (
          <VerificationStatus
            icon="/images/dead-leaf.svg"
            title="No plans"
            description="You are yet to subscribe for a plan, please click on the link below to make a plan"
            button="Make a plan"
            styl={"#ce290a"}
            on_Click={() => {
              history.push("/dashboard");
            }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Capital;
