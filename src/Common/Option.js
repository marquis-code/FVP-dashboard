import React, { useState, useEffect } from "react";
// import Index from "../Component/User/Get-started";
import { useHistory } from "react-router-dom";
import getUrl from "./get-url";
import Input from "../Common/Input";
import { useAuth } from "../Context/Auth-context";
import ErrorMessage from "../Common/ErrorMessage";

function Option({ setProduceimage }) {
  function getProduces() {
    fetch(getUrl("produce/"))
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }
  const history = useHistory();
  const [options, setOptions] = useState([]);
  const { authTokens } = useAuth();
  const [disabled, setDisabled] = useState(false);

  const [planForm, setplanForm] = useState({
    produce: "",
    capital: "",
    landsize: "",
  });

  const [ProduceDetail, setProduceDetail] = useState([]);

  useEffect(() => {
    setProduceDetail(options);
  }, [options]);

  const showProduceDetails = (i) => {
    const currentProduce = ProduceDetail.filter((item) => parseInt(i) === item.id);
      setProduceimage(currentProduce);
  };

  // console.log(Images);
  const [error, setError] = useState({
    produce: "",
    capital: "",
    landsize: "",
  });
  useEffect(() => {
    getProduces();
  }, []);
  // console.log(options);
  const handleChange = (e) => {
    setplanForm({
      ...planForm,
      [e.target.name]: e.target.value,
    });
  };

  
  function sendFarmPlan(e) {
    setDisabled(true);
    e.preventDefault();
    fetch(getUrl("plans/"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${authTokens}`,
      },

      body: JSON.stringify(planForm),
    })
      .then((res) => {
        if (res.status === 201 || 401) {
        setDisabled(false)
        }
        
        if (!res.ok) throw res;
        return res.json().then(function (json) {
          history.push(`/dashboard/details/${json.id}/`);
        });
      })
      .catch((err) => {
        err.text().then((text) => {
          console.log(text);
          const parseError = JSON.parse(text);
          setError((prevState) => ({
            ...prevState,
            ...parseError,
          }));
        });
      });
  }

  

  return (
    <>
      <form className="plans_form" onSubmit={sendFarmPlan}>
        <label htmlFor="produce" className="select-title">
          Choose a product to grow
        </label>
        <ErrorMessage errorText={error.produce} />
        <select
          id="produce"
          name="produce"
          onChange={(e) => handleChange(e)}
          className="select-option"
          value={planForm.produce}
          required
          onClick={() => showProduceDetails(planForm.produce)}
        >
          <option value="" disabled defaultValue style={{ color: "#aaaaaa" }}>
            Select produce
          </option>
          {options.map((item) =>
            item.variety ? (
              <option key={item.id} value={item.id}>
                {item.name} ({item.variety})
              </option>
            ) : (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            )
          )}
        </select>
        <ErrorMessage errorText={error.capital} />
        <div className="input-container">
          {/* <img src="/images/info-exclaim.svg" alt="exclaim"/> */}
          <Input
            type="number"
            id="capital"
            name="capital"
            value={planForm.capital}
            placeholder="Input Available Capital (Naira)"
            onChange={handleChange}
            class="planning-input"
            required
          />
        </div>
        <ErrorMessage errorText={error.landsize} />
        <div className="input-container">
          {/* <img src="/images/info-exclaim.svg" alt="exclaim"/> */}
          <Input
            type="number"
            id="landsize"
            name="landsize"
            value={planForm.landsize}
            placeholder="Input Available of Land (Hectares)"
            onChange={handleChange}
            class="planning-input"
            required
          />
        </div>

        <button
          type="submit"
          className="planning-input-button"
          style={
            disabled ? { opacity: "0.5" } : { opacity: "1", cursor: "pointer" }
          }
          disabled={disabled ? true : false}
        >
         Submit
        </button>
      </form>
    </>
  );
}
export default Option;
