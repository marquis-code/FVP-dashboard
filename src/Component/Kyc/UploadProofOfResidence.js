import React from "react";
import {useState} from 'react';

const UploadProofOfResidence = (props) => {

    const [fileBase64String, setFileBase64String] = useState("");
    const [inputLabel, setInputLabel] = useState("Click to add image here");
    const [isFormValid, setIsFormValid] = useState(true);


    const handleChange = async (e) => { 
        encodeFileBase64(e.target.files[0])
    };

    const checkForm= event =>{
        event.preventDefault();
        if(fileBase64String !== ""){
            submitHandler()
        }else{
            setIsFormValid(false);
        }
    }

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

    const submitHandler = () =>{
        
        let info = {
            proof_of_resident:fileBase64String,
        }
        props.getProofOfResidentDocument(info)
    }

     
    return(
        
            
                <form onSubmit={checkForm}>
                    <h3 className="info-card_title  ">Upload Proof of Residence</h3>
                    <p className="info-card_instructions">
                        You can either upload an electricity bill or water bill.<br/>
                        Make sure the address on the image is the same <br/>
                        with the one uploaded
                    </p>
                    
                    {!isFormValid && <><br/><p className="error">All Fields Are Required</p></>}

                    <label htmlFor="file-upload" className="custom-file-upload">
                       <center>
                            <img src="/images/upload.svg" alt="Upload icon" />
                            <p>{inputLabel}</p>
                        </center>
                    </label>
                    <input id="file-upload" type="file" onChange={handleChange} />

                    <button type="submit">Submit</button>
                        
                </form>

                    
    
    );
}

export default UploadProofOfResidence;
