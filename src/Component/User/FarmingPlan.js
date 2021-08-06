import React, { useEffect, useState } from "react";
import UserHeading from "../../Common/User-heading";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context";
import getUrl from "../../Common/get-url";
import Footer from "../../Common/Footer";

const FarmPlan = () => {
  const [details, setDetails] = useState({});

  const { authTokens } = useAuth();

  const params = useParams();

  const propertyId = params["detailsId"];
  const thisDetails = getUrl(`plans/${propertyId}/`);

  useEffect(() => {
    fetch(thisDetails, {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [authTokens, thisDetails]);
  // if (details.produce){
  //   console.log(details.produce);
  // }

  const FarmPlan1 = (props) => {
    var i;
    for (i = 0; i < details.produce.details.length; i++) {
      if (details.produce.details[i].title.toLowerCase() === props.title) {
        return details.produce.details[i].description;
      }
    }
  };

  return (
    <>
      <main>
        {details.produce ? (
          <div className="grid farm-plan">
            <UserHeading title="Planning" />

            <h2 className="farming-plan-title">
              {details.produce && details.produce.name}
            </h2>

            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "overview" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/overview.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Overview
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "overview" })}
              </p>
            </div>

            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "seedling" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Seedlings.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Seedlings
              </label>
              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "seedling" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "land preparation" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Land-preparation.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Land preparation
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "land preparation" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "tractor rental" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Tractor-rental.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Tractor rental
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "tractor rental" })}
              </p>
              <a href="https://hellotractor.com/farmz2u-bookings/" className="hire-tractor-btn"> Hire Tractor<span style={{marginLeft:"6px"}}>&rarr;</span> </a>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "input sourcing" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/input-resourcing.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Input sourcing
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "input sourcing" })}
              </p>
            </div>

            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "sowing and spacing" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Sowing-and-spacing.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Sowing and spacing
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "sowing and spacing" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "fertilizer application" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Fertilizer-application.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Fertilizer application
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "fertilizer application" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "growth period" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/input-resourcing.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Growth period
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "growth period" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "weed control" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Weed-control.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Weed control
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "weed control" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "pest control" || "insect control" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Insect-control.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Insect control
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "pest control" || "insect control" })}
              </p>
            </div>
            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "harvesting" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              <img
                src="/images/Harvesting.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Harvesting
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "harvesting" })}
              </p>
            </div>

            <div
              className="farming-plan-column"
              style={
                FarmPlan1({ title: "storing" })
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              {/* style={FarmStyle({item:"storing", title:"storing"}) ? {display:"grid"} : {display:"none"}} */}
              <img
                src="/images/Storing.svg"
                alt="farming-plan"
                className="farming-plan-title-icon"
              />
              <label
                htmlFor="farming-plan-column-title"
                className="farming-plan-column-title"
              >
                Storing
              </label>

              <p className="farming-plan-column-paragraph">
                {FarmPlan1({ title: "storing" })}
              </p>
            </div>

            <div className="farming-plan-highlighted-column">
              <div className="hc-column block farming-plan-column">
                <img
                  src="/images/growthPeriod.svg"
                  alt="farming-plan"
                  className="farming-plan-title-icon hc-img"
                />
                <label
                  htmlFor="hc"
                  className="hc-title farming-plan-column-title"
                >
                  Growth period
                  <i className="hc-info farming-plan-column-paragraph">
                    {" "}
                    {details.produce && details.produce.growth_period} Week
                    {details.produce &&
                      details.produce.growth_period > 1 &&
                      "s"}
                  </i>
                </label>
              </div>

              <div className="hc-column block farming-plan-column">
                <img
                  src="/images/Yield-tones-hectare.svg"
                  alt="farming-plan"
                  className="farming-plan-title-icon hc-img"
                />
                <label
                  htmlFor="hc"
                  className="hc-title farming-plan-column-title"
                >
                  Yield tones/hectare
                  <i className="hc-info farming-plan-column-paragraph">
                    {" "}
                    {details.produce && details.produce.output_per_hectare}
                  </i>
                </label>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
};

export default FarmPlan;
