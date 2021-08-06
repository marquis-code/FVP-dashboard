import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context";
// import UserMenuBar from "../../Common/User-menu-bar";

import getUrl from "../../Common/get-url";
import DetailsItem from "./DetailsItem";
import Footer from "../../Common/Footer";

function Details(props) {
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

  return (
    <>
      <main>
        <DetailsItem data={details} detailsId={propertyId} />
      </main>
      <Footer />
    </>
  );
}

export default Details;
