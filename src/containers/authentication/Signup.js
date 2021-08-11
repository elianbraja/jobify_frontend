import React, { useState } from 'react';
import "./Login.css"
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import CREATE_USER_MUTATION from '../../components/mutation/user/CreateUser'
import CURRENT_USER from '../../queries/user/CurrentUser'

function Signup() {
  let history = useHistory();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  const [create_user] = useMutation(CREATE_USER_MUTATION);
  const [values, setValues] = useState(initialValues);
  const [error_message, setErrorMessage] = useState(null);
  const [email_sent, setEmailSent] = useState(false);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        create_user({ variables: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation
        }}).then(
            result => {
              setEmailSent(true)
            },
          ).catch(
            error => {
              setErrorMessage(error.message.replace("Invalid input: ", ""))
            }
          );;;
      }} className="box">
          {email_sent ?
            <div style={{textAlign:"center", color:"#2ecc71"}}>Thank you for your registration. Please check your mailbox to confirm email!</div>
            :
            <div>
              <h1>Sign up</h1>
              <p className="text-muted"> Please enter your data!</p>
                <div style={{color:"#ad3030"}}>{error_message}</div>
                <input type="text" name="first_name" placeholder="First Name" value={values.first_name} onChange={handleInputChange}/>
                <input type="text" name="last_name" placeholder="Last Name" value={values.last_name} onChange={handleInputChange}/>
                <input type="text" name="email" placeholder="Email" value={values.email} onChange={handleInputChange}/>
                <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleInputChange}/>
                <input type="password" name="password_confirmation" placeholder="Retype Password" value={values.password_confirmation} onChange={handleInputChange}/>
                <input type="submit" name="" value="Sign up" href="#"/>
            </div>
          }
      </form>
    </div>
  );
}

export default Signup;
