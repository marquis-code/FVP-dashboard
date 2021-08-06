import React from "react";
import { useState, useRef } from "react";

const UploadFile = (props) => {
  const [fileBase64String, setFileBase64String] = useState("");
  const [inputLabel, setInputLabel] = useState("Click to add image here");
  const [isFormValid, setIsFormValid] = useState(true);
  const [document, setDocument] = useState("international passport");

  const documentTypeRef = useRef("");
  const regNumberRef = useRef("");

  const handleChange = async (e) => {
    encodeFileBase64(e.target.files[0]);
  };

  const checkForm = (event) => {
    event.preventDefault();
    if (fileBase64String !== "") {
      submitHandler();
    } else {
      setIsFormValid(false);
    }
  };

  const handleDoc = (e) => {
    setDocument(e.target.value);
  };

  const encodeFileBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFileBase64String(file);
        setInputLabel(file.name);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };

  const submitHandler = () => {
    let info = {
      document: fileBase64String,
      document_type: documentTypeRef.current.value,
      registration_number: regNumberRef.current.value,
    };
    props.getDocument(info);
  };

  return (
    <form onSubmit={checkForm}>
      <h3 className="info-card_title">Upload Government Issued Card</h3>
      <p className="info-card_instructions">
        You can either upload; your driver's license, <br /> national ID card,
        voter's card or international passport <br />
        with the one uploaded
      </p>
      <br />

      {!isFormValid && (
        <>
          <br />
          <p className="error">All Fields Are Required</p>
        </>
      )}

      <label htmlFor="document_type" className="input-label">
        Select document to upload
      </label>
      <select id="document_type" ref={documentTypeRef} onChange={handleDoc}>
        <option value="international passport">International Passport</option>
        <option value="drivers licence">Drivers Licence</option>
        <option value="voters card">Voters Card</option>
        <option value="others">Others</option>
      </select>

      <label htmlFor="reg_number" className="input-tag">
        {document === "international passport"
          ? "Passport Number"
          : "Registration Number "}
      </label>
      <input type="text" id="reg_number" ref={regNumberRef} />

      <label htmlFor="file-upload" className="custom-file-upload">
        <center>
          <img src="/images/upload.svg" alt="Upload icon" />
          <p>{inputLabel}</p>
        </center>
      </label>
      <input id="file-upload" type="file" onChange={handleChange} />

      <button type="submit">Continue</button>
    </form>
  );
};

export default UploadFile;
