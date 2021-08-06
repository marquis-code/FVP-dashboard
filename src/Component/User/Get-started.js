import React, { useState } from "react";
import UserHeading from "../../Common/User-heading";
// import UserMenuBar from "../../Common/User-menu-bar";
// import DetailBlock from "../../Common/Detail-block";
import Option from "../../Common/Option";
import Footer from "../../Common/Footer";
import Popover from "react-popover";

function Index(props) {
  const [produceImage, setProduceimage] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // if(produceImage[0]){
  //   console.log(produceImage[0].image.link);
  // }
  return (
    <>
      <main>
        <div className="m-left">
          <UserHeading title="Planning" />

          <h1 className="intro-text">Let's get you started!</h1>

          <p className="intro-paragraph" >
            Planning will help you decide what produce to grow and supports you
            in acquiring the required resources to achieve this.
          </p>
          <Popover
            isOpen={isOpen}
            place="right"
            body={
              <button
                style={{
                  height: "100px",
                  width: "100px",
                }}
              >
                Poppver
              </button>
            }
          ></Popover>
          <Option setProduceimage={setProduceimage} />
          {/* success={directToDetailsPage} */}
          <div className="help">
            <div
              className="details"
              style={
                produceImage[0] ? { display: "block" } : { display: "none" }
              }
            >
              <img
                src={produceImage[0] && produceImage[0].image.link}
                alt={produceImage[0] ? produceImage[0].name : ""}
                className="details-img"
              />

              {/* <DetailBlock /> */}
            </div>
            <div
              className="user-block"
              style={
                produceImage[0]
                  ? { marginTop: "0rem" }
                  : { marginTop: "1.5rem" }
              }
            >
              <h2 className="help-text">In need of help?</h2>
              <p className="help-paragraph">
                Let Farmz2U help you decide what to farm (crop or animal) by
                answering some questions
              </p>

              <a
                href="https://start.farmz2u.com/"
                className="help-btn primary-btn"
              >
                Start Here
              </a>
            </div>
            <br />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
