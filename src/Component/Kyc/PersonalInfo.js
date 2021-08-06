import React from "react";
import {useRef, useState} from 'react';

const PersonalInfo = (props) => {

    const [isFormValid, setIsFormValid] = useState(true);
    const emailRef = useRef("");
    const lastNameRef = useRef("");
    const firstNameRef = useRef("");
    
    const checkForm= event =>{
        event.preventDefault();
        if(emailRef.current.value !== "" && lastNameRef.current.value !== "" && firstNameRef.current.value !== ""){
            submitHandler()
        }else{
            setIsFormValid(false);
        }
    }

    const submitHandler = () =>{
        
        let personal_info = {
            email: emailRef.current.value,
            lastname: lastNameRef.current.value,
            firstname: firstNameRef.current.value
        }

        
        props.getPersonalInfo(personal_info)
    }

    return(
        
                <form onSubmit={checkForm}>
                    <h3 className="info-card_title">Personal Information</h3>
                    {!isFormValid && <p className="error">All Fields Are Required</p>}
                    
                    <div className="form-content">
                        <div className="names">
                            <div className="first_name">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text"  id="first-name" ref = {firstNameRef}/>
                            </div>

                            <div className="last_name">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text"  id="last-name" ref = {lastNameRef}/>
                            </div>

                        </div>

                        <label htmlFor="email">Email Address/Phone Number</label>
                        <input type="text"  id="email"  ref = {emailRef}/>

                        <label htmlFor="password">Password</label>
                        <input type="password"  id="password"  />

                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password"  id="confirm-password" />

                        <button type="submit">Continue</button>
                    </div>
                        
                </form>

           
    );
}

export default PersonalInfo;