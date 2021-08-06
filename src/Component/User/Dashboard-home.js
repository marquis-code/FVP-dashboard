import React from "react";
import UserHeading from "../../Common/User-heading";

const DashboardHome = () => {
  return (
    <main>
      <div className="m-left">
        <UserHeading title="Dashboard" />

        <div className="w-full p-3 md:p-0">
          {[1, 2].map(() => {
            return <DashboardItem />;
          })}
        </div>
      </div>
    </main>
  );
};
const DashboardItem = () => {
  return (
    <div className="md:w-full mt-10 flex flex-wrap justify-between shadow shadow-none max-w-3xl">
      <div className="w-full max-w-md md:p-3 h-40 block flex wrap m-3 md:m-0">
        <img
          src="/images/cocoa-beans.svg"
          alt="Product"
          className="w-3/6 h-full"
        //   className="product-image"
        />
        <div className="ml-2 mt-5 w-full ">
          <div className="w-full flex justify-between ">
            <label
              htmlFor=""
              className=" w-full md:pl-10 mx-auto font-bold md:text-lg"
            >
              Cocoa Beans
            </label>
            <img
              src="/images/more.svg"
              alt="option"
              className=" m-2 dashboard-product-info-icon"
            />
          </div>
          <p
            className="dp-serial w-full
          mx-auto md:pl-10"
          >
            #PRD2244134
          </p>
          <button className="primary-btn w-full md:ml-10  wdp-btn">
            Farming Plan
          </button>
        </div>
      </div>

      <div className="h-40 w-full max-w-xs bg-blue-100 product-status pending m-3 md:m-0">
        <p className="product-status-info">
          Capital <br />
          Application <br />
          Status
        </p>

        <h2 className="product-status-state">PENDING</h2>
      </div>
    </div>
  );
};

export default DashboardHome;
