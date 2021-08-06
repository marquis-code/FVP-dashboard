import React, { useState, useContext } from "react";
import Dummy from "../../Common/Dummy";
import { moneyFormat } from "../../Common/moneyFormat";
import UserHeading from "../../Common/User-heading";
// import WalletIcons from "../../Common/wallet-icons_list";
import WalletIconItem from "../../Common/wallet_icon_item";
import { HelpersContext } from "../../helpers";
import Deposit from "./Deposit";
import MakePayment from "./make_payment";
import Trasnsactions from "./transactions-container";
import WalletForm from "./Wallet-form";
import Withdraw from "./withdraw";

const Wallet = () => {
  const [imageId, setImageId] = useState(0);
  const { walletBalance } = useContext(HelpersContext);

  const WalletIcons = [
    {
      icon:
        imageId === 1 ? "/images/withdraw-active.svg" : "/images/withdraw.svg",
      name: "Withdraw",
      iconStyle: "icon-item",
      id: 1,
      component: <Withdraw />,
    },
    {
      icon:
        imageId === 2 ? "/images/deposit-active.svg" : "/images/deposit.svg",
      name: "Deposit",
      iconStyle: "icon-item",
      id: 2,
      component: <Deposit />,
    },
    {
      icon:
        imageId === 3
          ? "/images/make-payment-active.svg"
          : "/images/make-payment_.svg",
      name: "Make Payment",
      iconStyle: "icon-item transIcon",
      id: 3,
      component: <MakePayment />,
    },
  ];

  const [notification] = useState(WalletIcons);
  const [currentNotificationDetail, setCurrentNotificationDetail] =
    useState(false);

  // useEffect(() => {
  //   setNotification(WalletIcons);
  // }, []);

  const showNotificationInDetails = (id) => {
    setImageId(id);
    const currentNotification = notification.filter((item) => id === item.id);
    setCurrentNotificationDetail(currentNotification);
  };
  const [loading, setLoading] = useState(true);

  var number = Math.abs(walletBalance.net);

  const finalvalue = moneyFormat(number);

  const closeBackdrop = () => {
    setCurrentNotificationDetail(false);
    setImageId(0);
  };

  return (
    <>
      <div className="m-left">
        <UserHeading title="Wallet" />
      </div>
      <div className="wallet-container">
        <div className="wallet_nav_bar"></div>
        <div className="wallet_sub_container">
          <div className="wallet_container_primary">
            <div className="wallet_money_card">
              <h3 className="wallet_card_heading_text">Total Balance</h3>
              {loading ? (
                <Dummy />
              ) : (
                <h2 className="wallet_value">
                  <span>₦</span>
                  {finalvalue === "NaN" ? "0" : finalvalue}
                </h2>
              )}
            </div>
            <div className="wallet-icon-wrapper">
              <div className="wallet-icons-container">
                {WalletIcons.map((item, i) => {
                  return (
                    <WalletIconItem
                      click={() => showNotificationInDetails(item.id)}
                      key={i}
                      {...item}
                    />
                  );
                })}
              </div>
            </div>
            <Trasnsactions setLoading={setLoading} />
          </div>

          {currentNotificationDetail && (
            <WalletForm click={closeBackdrop}>
              {currentNotificationDetail[0].component}
            </WalletForm>
          )}
        </div>
      </div>
    </>
  );
};

export default Wallet;
