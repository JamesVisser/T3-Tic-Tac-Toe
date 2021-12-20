import React from "react";
import {useFormik} from 'formik';



function App() {
  const formik = useFormik({
    initialValues: { //this is where the val;ues are kept
      email: " ",
      password: " ",
    },
    onSubmit: values =>{ //when the submit button is selected
      alert("Login Successful"); // after input passes validuation alerts user
      console.log('form:', values); // logs to console to view data
     },     
    validate: values => { //validation process of input
      let errors = {}; // variable to hold errors
      if (!values.email) errors.email = 'Field Required'; //validation that user needs to input data- can be checked by back spacing
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Username should be an email';//validation for email must be like joe@mit.edu format
      if (!values.password) errors.password = 'Field Required';// validation for input field can be checked by back spacing
      return errors;
    }        
  });
   
  //below are the return elements from the user 
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
        <div>Email</div>
        <input id= "emailfield" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: "red"}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id= "pswfield" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: "red"}}>{formik.errors.password}</div> : null}
        <div>
        <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );  
}
export default App;



