import React from "react";
import UserHeading from "../../Common/User-heading"

const Successful = () => {
  return (
    <>
      <div className="grid bank-form-success">
        <UserHeading title="Apply for capital" />
        <div className="status-card">
          <img src="/images/Success-leaf.svg" alt="" className="leaf" />
          <h2>Success</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo rem
            alias recusandae, sapiente et voluptas omnis Repellat, doloribus
            maiores.
          </p>
          <button className="bank-form-btn">View Loan status</button>
        </div>
      </div>
    </>
  );
};

export default Successful;

{
  /* <div className="grid bank-form-success">
<UserHeading title="Apply for capital" />
<div className="status-card">
<img src="/images/Success-leaf.svg" alt="" className="leaf" />
<h2>Success</h2>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo rem
  alias recusandae, sapiente et voluptas omnis Repellat,
  doloribus maiores.
</p>
<button className="bank-form-btn">View Loan status</button>
</div>
</div> */
}
