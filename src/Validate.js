import React from 'react'

const Validate = (values) => {
    let errors = {};

    if(!values.username.trim()){
        errors.username = "firstname required";
    }
    if(!values.lastname.trim()){
        errors.lastname = "lastname required";
    }

    if(!values.email.trim()){
        errors.email = "email required";
    }else if(/^\S+@\S+\.\S+$/.test(values.email) === false){
        errors.email = "email invalid";
    }

    if(!values.password.trim()){
        errors.password = "password required";
    }

    if(!values.address.trim()){
        errors.address = "address required";
    }

    if(!values.mobilenumber.trim()){
        errors.mobilenumber = "mobilenumber required";
    }else if (/^[1-9]\d{9}$/.test(values.mobilenumber) === false){
        errors.mobilenumber = "Please enter a valid 10 digit mobile number";
    }
return errors;
}

export default Validate
