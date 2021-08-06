import React, { useState } from "react";
import UploadProofOfResidence from "./UploadProofOfResidence";
import ResidentialInfo from "./ResidentialInfo";
import UploadFile from "./UploadFile";
import getUrl from "../../Common/get-url";
import { useAuth } from "../../Context/Auth-context";

const Kyc = () => {
  const [kycInfo, setKycInfo] = useState({});
  const { authTokens } = useAuth();
  const [collectResidentialInfo, setcollectResidentialInfo] = useState(true);
  const [collectDocument, setCollectDocument] = useState(false);
  const [proofOfResidentInfo, setproofOfResidentInfo] = useState(false);

  const getResidentialInfoHandler = (info) => {
    setKycInfo((prevState) => {
      return { ...prevState, ...info };
    });
    setcollectResidentialInfo(!collectResidentialInfo);
    setCollectDocument(!collectDocument);
  };

  async function getDocumentHandler(info) {
    setKycInfo((prevState) => {
      return { ...prevState, ...info };
    });
    setproofOfResidentInfo(!proofOfResidentInfo);
    setCollectDocument(!collectDocument);
  }

  async function getProofOfResidentDocumentHandler(info) {
    setKycInfo((prevState) => {
      return { ...prevState, ...info };
    });
    submitKyc(info);
  }

  async function submitKyc(info) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${authTokens}`);

    let formData = new FormData();
    formData.append("country", kycInfo.country);
    formData.append("address", kycInfo.address);
    formData.append("city", kycInfo.city);
    formData.append("postal_code", kycInfo.postal_code);
    formData.append("document", kycInfo.document);
    formData.append("document_type", kycInfo.document_type);
    formData.append("registration_number", kycInfo.registration_number);
    formData.append("proof_of_resident", info.proof_of_resident);

    const response = await fetch(getUrl("kycs"), {
      method: "POST",
      headers: myHeaders,
      body: formData,
    });

    if (!response.ok) {
      alert("Something Went Wrong");
    } else {
      alert("Success");
    }
  }

  return (
    <main className="kyc-main-body">
      <div className="kyc-icon hidden lg:block">
        <h3>
          KYC <br />
          
        </h3>

        <img src="/images/info.svg" alt="vendor icon" />
      </div>
      <div className="kyc-info-card">
        {collectResidentialInfo && (
          <ResidentialInfo getResidentialInfo={getResidentialInfoHandler} />
        )}
        {collectDocument && (
          <>
            <UploadFile getDocument={getDocumentHandler} />
          </>
        )}
        {proofOfResidentInfo && (
          <UploadProofOfResidence
            getProofOfResidentDocument={getProofOfResidentDocumentHandler}
          />
        )}
      </div>
    </main>
  );
};

export default Kyc;
