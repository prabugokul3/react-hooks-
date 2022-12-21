import React, { useState } from 'react';
import UseForm from './UseForm';
import Validate from './Validate';
import './App.css';
// import {useNavigate} from "react-router-dom";


const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = UseForm(Validate)

// const[count, setCount] =useState("");
// const navigate=useNavigate();

// console.log(count)
  return (
    <div className='container'>
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} >
        <div className="form-control">
          <label>Firstname</label>
          <input type="text" name="username" placeholder="Enter your firstname" onChange={handleChange} value={values.username} /> <div className='art'>{errors.username}</div>
        </div>
        <div className="form-control">
          <label>Lastname</label>
          <input type="text" name="lastname" placeholder="Enter your lastname" onChange={handleChange} value={values.lastname} /> <div className='art'>{errors.lastname}</div>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} value={values.email} /><div className='art'>{errors.email}</div>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="text" name="password" placeholder="Enter your password" onChange={handleChange} value={values.password} /><div className='art'>{errors.password}</div>
        </div>
        <div className="form-control">
          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your Address" onChange={handleChange} value={values.address} /><div className='art'>{errors.address}</div>
        </div>
        <div className="form-control">
          <label>Mobile Number</label>
          <input type="tel" name="mobilenumber" placeholder="Enter your mobilenumber" onChange={handleChange} value={values.mobilenumber} /><div className='art'>{errors.mobilenumber}</div>
        </div>
        <div className="form-control">
          <input type="submit" className='memo' />
        </div>



        {/* <div className="form-control">
          <label>Lastname</label>
          <input type="text" name="lastname" placeholder="Enter your lastname" onChange={()=>navigate()}  /> <div className='art'>{errors.lastname}</div>
        </div> */}
      </form>
    </div>
  )
  
}


export default FormSignup; 