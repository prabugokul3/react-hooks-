import { useState, useEffect } from 'react';
import Validate from './Validate';


const UseForm = () => {
   const [values, setValues] = useState({
      username: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      mobilenumber: "",
   });
   const [listdata,setlistdata ]=useState({});
   // console.log(listdata);
   // useEffect(() => {
   //    fetch("http://127.0.0.1:8000/api/users").then(response => response.json()).then(data => setlistdata(data.data));
   // }, [])
   

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      // console.log(e.target.name , e.target.value);
      const { name, value } = e.target;

      setValues((prev) => {
         return {
            ...prev,
            [name]: value,
         };
      });

   };
   const handleSubmit = (e) => {
      console.log(values)
      e.preventDefault();
      setErrors(Validate(values))
   }

   return { handleChange, values, handleSubmit, errors };

};

export default UseForm