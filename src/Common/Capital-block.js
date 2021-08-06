import React, { useState, useEffect } from "react";

const capitalList = [
  {
    image: "/images/nirsal-logo.svg",
    alt: "Nirsal",
    class: "capital-img nirsal-img",
    bankName: "NIRSAL",
    subtitle: "Early/Mid Stage Farmers",
    link:"https://nirsalmfb.caderp.com/account/landingpage"
  },
  {
    image: "/images/Stanbic-IBTC-Bank-Logo.svg",
    alt: "Stanbic IBTC",
    class: "capital-img stanbic-img",
    bankName: "Stanbic IBTC",
    subtitle: "Commercial Farmers",
    link:"https://www.stanbicibtcbank.com/nigeriabank/business/products-and-services/finance-your-"
  },
  // {
  //   image: "/images/Ecobank-Logo.svg",
  //   alt: "Ecobank",
  //   class: "capital-img ecobank-img",
  //   bankName: "Ecobank",
  //   subtitle: "Commercial Farmers",
  //   link:"#"
  // },
  {
    image: "/images/Sterling-Bank-Plc-Logo.svg",
    alt: "Sterling Bank",
    class: "capital-img sterlin-img",
    bankName: "Sterling Bank",
    subtitle: "Early/Mid Stage Farmers",
    link:"https://sterling.ng/agriculture/"
  },
  {
    image: "/images/Bank-of-Agriculture-logo.svg",
    alt: "Bank of Agriculture",
    class: "capital-img agric-img",
    bankName: "Bank of Agriculture",
    subtitle: "Early/Mid Stage Farmers",
    link:"https://www.boanig.com/services/"
  },
  // {
  //   image: "/images/First-Bank-Nigeria-Logo.svg",
  //   alt: "First Bank",
  //   class: "capital-img first-img",
  //   bankName: "First Bank",
  //   subtitle: "Commercial Farmers",
  //   link:"https://www.boanig.com/services/"
  // },
];

function CapitalBlock() {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    setCapitals(capitalList);
  }, []);

  return (
    <>
      {capitals.map((capital, id) => (
        <div className="capital-block block" key={id} >
          <img
            src={capital.image}
            alt={capital.alt}
            className={capital.class}
          />
          <h3 className="capital-title">
            {capital.bankName}
            <strong className="capital-subtitle">{capital.subtitle}</strong>
          </h3>

          <div className="capital-buttons">
            <a href={capital.link} className="primary-btn apply">Apply Now</a>
            {/* <button className="support">Seek Farmz2u Support</button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default CapitalBlock;
