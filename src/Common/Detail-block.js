import React, { useState, useEffect } from "react";

const detailsList = [
  {
    content: "Available hectares of land",
    value: "50",
    detailImage: "/images/available-hectares.svg",
  },
  {
    content: "Available Capital",
    value: "500,00",
    detailImage: "/images/growth-period.svg",
  },
  {
    content: "Growth period",
    value: "36",
    month: "months",
    detailImage: "/images/growth-period.svg",
  },
];

function DetailBlock() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(detailsList);
  }, []);

  return (
    <>
      {details.map((det) => (
        <div className="detail-block block">
          <img src={det.detailImage} alt="land" className="detail-icon" />
          <p className="detail-text"> {det.content}</p>
          <strong className="detail-number">
            {det.value}
            <span className="detail-duration-text">{det.month}</span>
          </strong>
        </div>
      ))}
    </>
  );
}

export default DetailBlock;
