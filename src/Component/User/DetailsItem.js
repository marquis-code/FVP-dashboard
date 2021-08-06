import React, { useState, useEffect } from "react";
import Dialoguebox from "../../Component/Dialogue-Box/dialogue-box";
import { useHistory, useParams } from "react-router-dom";

import UserHeading from "../../Common/User-heading";

function DetailsItem(props) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const formatter = new Intl.NumberFormat("en");
  const params = useParams();
  const history = useHistory();
  const ID = params["detailsId"];

  useEffect(() => {
    if (props.data["produce"]) {
      var Capital_per_hectar = props.data["produce"].capital_per_hectare;
      var Land_size = props.data.landsize;
      var Available_capital = props.data.capital;
      const Capital = Math.abs(Capital_per_hectar * Land_size);
      if (Capital <= Available_capital) {
        setSuccess(true);
      } else if (Capital > Available_capital) {
        setFail(true);
      }
    }

    // var produce = props.data["produce"]
  }, [props.data]);


  const produceInput = (prop) => {
    if (props.data.produce) {
      var i;
      for (i = 0; i < props.data.produce.inputs.length; i++) {
        if (props.data["produce"].inputs[i].input_type.toLowerCase() === prop.item) {
          return props.data["produce"].inputs[i].name;
        }
      }
    }
  };



  return (
    <>
      {props.data["produce"] ? (
        <>
          <Dialoguebox
            id="dialog"
            style={fail ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            <div className="dialogue-cancel" onClick={() => setFail(!fail)}>
              {" "}
              &#10005;
            </div>
            <img src="/images/broken-heart-emoji.svg" alt="failed" className="mx-auto" />
            <h3 className="dialog-box-title">
              Looks like you don't have enough capital
            </h3>
            <p>
              To grow {props.data["produce"].name} (
              {props.data["produce"].variety
                ? props.data["produce"].variety
                : ""}

              ) you need about {props.data["produce"].capital_per_hectare === "NAN" ? "0" : formatter.format(props.data["produce"].capital_per_hectare)} NGN
              for each hectare of land.
            </p>
            <button
              className="dialog-box-button"
              onClick={() => history.push(`/dashboard/capital/apply/${ID}`)}
            >
              Apply for capital
            </button>
          </Dialoguebox>

          <Dialoguebox
            id="dialog-success"
            style={
              success ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            <div className="dialog-img">
              <img src="/images/thumbs-up.svg" alt="thumbs-up" />
            </div>
            <h3 className="dialog-box-title" style={{ color: "#298525" }}>
              You are all set
            </h3>
            <p>
              To grow {props.data["produce"].name} (
              {props.data["produce"].variety
                ? props.data["produce"].variety
                : ""}
              ) you have all the Capital you need
            </p>
            <button
              className="dialog-box-button"
              onClick={() => setSuccess(!success)}
            >
              Get started
            </button>
          </Dialoguebox>
          <div className="grid plan_ning">
            <UserHeading title="Planning" />

            <div>
              <div className="user-sud-heading">
                <h2>Produce Details</h2>
                <h3>
                  {props.data["produce"].name} (
                  {props.data["produce"].variety
                    ? props.data["produce"].variety
                    : ""}
                  )
                </h3>
              </div>
              <div className="product-info block">
                <img
                  src={props.data["produce"].image.link}
                  alt="cocoa beans"
                  className="product-info-img"
                />
                <p className="product-info-paragraph">
                  {props.data["produce"].description}
                </p>
              </div>
              <div className="key-vulnerabilitie-2 left-key">
                <h2 className="keys">Key Vulnerabilities</h2>

                <div className="key-block-sub-1 block">
                  <h3 className="key-block-sub-title">
                    Pests
                    <img
                      src="/images/pest.svg"
                      alt="pests"
                      className="key-block-sub-title-icon"
                    />
                  </h3>
                  <>
                    {" "}
                    {props.data["produce"].pests.map((item, index) => {
                      return (
                        <p
                          className="key-block-sub-paragraph"
                          key={`item-${index}`}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </>
                </div>

                <div className="key-block-sub-2 block">
                  <h3 className="key-block-sub-title">
                    Diseases
                    <img
                      src="/images/diseases.svg"
                      alt="diseases"
                      className="key-block-sub-title-icon"
                    />
                  </h3>
                  <>
                    {" "}
                    {props.data["produce"].diseases.map((item, index) => {
                      return (
                        <p
                          className="key-block-sub-paragraph"
                          key={`item-${index}`}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </>
                </div>
              </div>
              <div className="farm-order left-key">
                <button className="farming-plan-btn primary-btn">
                  <div
                    onClick={() =>
                      history.push(`/dashboard/farm-plan/${props.detailsId}`)
                    }
                    className="farming-plan-link"
                  >
                    Farming Plan
                  </div>
                </button>
                {/* <button className="order-input-btn btn">Order Input</button> */}
              </div>

              <div className="growth-period left-growth-period">
                <span className="growth-period-icon">
                  <img
                    src="/images/growth-period.svg"
                    alt="pests"
                    className="key-block-sub-title-icon"
                  />
                </span>
                <p>Growth period</p>
                <div>
                  <span
                    className="growth-period-text"
                    style={{ marginRight: "5px" }}
                  >
                    {props.data["produce"].growth_period}
                  </span>
                  <span className="growth-period-text-month">Week{props.data["produce"].growth_period > 1 && "s"}</span>
                </div>
              </div>
            </div>
            <div className="farm-resources-box">
              <div className="Farm_resources">
                <h2 className="keys">Farm Resources</h2>
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
                          {" "}
                          {props.data.landsize}
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
                          {" "}
                          {props.data.capital === "NAN"
                            ? "0"
                            : formatter.format(props.data.capital)}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="growth-period right-growth-period">
                <span className="growth-period-icon">
                  <img
                    src="/images/growth-period.svg"
                    alt="pests"
                    className="key-block-sub-title-icon"
                  />
                </span>
                <p>Growth period</p>
                <div>
                  <span
                    className="growth-period-text"
                    style={{ marginRight: "5px" }}
                  >
                    {props.data["produce"].growth_period}
                  </span>
                  <span className="growth-period-text-month">Week{props.data["produce"].growth_period > 1 && "s"}</span>
                </div>
              </div>

              <div className="key-vulnerabilities-1">
                <h2 className="keys">Key Produce Input</h2>
                <div className="key-block block mt-4">
                  <table>
                    <tbody>
                      {
                        produceInput({ item: "seedling" }) &&


                        <tr>
                          <td className="td-title">Seedlings</td>
                          <td>
                            {" "}
                            {produceInput({ item: "seedling" })
                            }
                          </td>
                        </tr>
                      }


                      {produceInput({ item: "pesticide" }) &&
                        <tr>
                          <td className="td-title">Pesticides</td>
                          <td>
                            {produceInput({ item: "pesticide" })}
                          </td>
                        </tr>
                      }
                      {produceInput({ item: "fertilizer" }) &&

                        <tr>
                          <td className="td-title">Fertilizer</td>
                          <td>
                            {produceInput({ item: "fertilizer" })}
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="key-vulnerabilitie-2 right-key">
                <h2 className="keys">Key Vulnerabilities</h2>

                <div className="key-block-sub-1 block">
                  <h3 className="key-block-sub-title">
                    Pests
                    <img
                      src="/images/pest.svg"
                      alt="pests"
                      className="key-block-sub-title-icon"
                    />
                  </h3>
                  <>
                    {" "}
                    {props.data["produce"].pests.map((item, index) => {
                      return (
                        <p
                          className="key-block-sub-paragraph"
                          key={`item-${index}`}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </>
                </div>

                <div className="key-block-sub-2 block">
                  <h3 className="key-block-sub-title mt-4">
                    Diseases
                    <img
                      src="/images/diseases.svg"
                      alt="diseases"
                      className="key-block-sub-title-icon"
                    />
                  </h3>
                  <>
                    {" "}
                    {props.data["produce"].diseases.map((item, index) => {
                      return (
                        <p
                          className="key-block-sub-paragraph"
                          key={`item-${index}`}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </>
                </div>
              </div>

              <div className="farm-order right-key">
                <button className="farming-plan-btn primary-btn">
                  <div
                    onClick={() =>
                      history.push(`/dashboard/farm-plan/${props.detailsId}`)
                    }
                    className="farming-plan-link"
                  >
                    Farming Plan
                  </div>
                </button>
                {/* <button className="order-input-btn btn">Order Input</button> */}
              </div>
            </div>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
}

export default DetailsItem;
