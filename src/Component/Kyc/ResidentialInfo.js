import React from "react";
import { useRef, useState } from "react";

const ResidentialInfo = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const countryRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const postalRef = useRef("");

  const checkForm = (event) => {
    event.preventDefault();
    if (
      countryRef.current.value !== "" &&
      addressRef.current.value !== "" &&
      cityRef.current.value !== "" &&
      postalRef.current.value !== ""
    ) {
      submitHandler();
    } else {
      setIsFormValid(false);
    }
  };

  const submitHandler = () => {
    let info = {
      country: countryRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      postal_code: postalRef.current.value,
    };

    props.getResidentialInfo(info);
  };

  return (
    <div className="mx-auto">
      <form onSubmit={checkForm}>
        <h3 className="info-card_title">Residential Information</h3>
        <p className="info-card_instructions">
          Please enter your residential address <br />
          so we can verify your location
        </p>
        <br />

        {!isFormValid && <p className="error">All Fields Are Required</p>}

        <label className="input-label" htmlFor="country">
          Country
        </label>
        <select id="country" ref={countryRef} className="country">
          <option value="Kenya">&#127472;&#127466; &nbsp; Kenya</option>
          <option value="Nigeria">&#127475;&#127468; &nbsp;Nigeria</option>
        </select>

        <label htmlFor="address" className="input-tag">
          Address
        </label>
        <input type="text" id="address" ref={addressRef} />

        <label htmlFor="city" className="input-tag">
          City/Town
        </label>
        <input type="text" id="city" ref={cityRef} />

        <label htmlFor="postal" className="input-tag">
          Postal/Zip Code
        </label>
        <input type="text" id="postal" ref={postalRef} />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ResidentialInfo;
