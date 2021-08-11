import React, { useState } from 'react';
import "./Login.css"
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import LOGIN_USER_MUTATION from '../../components/mutation/user/LoginUser'
import CURRENT_USER from '../../queries/user/CurrentUser'

function Login() {
  let history = useHistory();
  const initialValues = {
    email: "",
    password: ""
  };

const [loginUser] = useMutation(LOGIN_USER_MUTATION);
const {refetch: refetch} = useQuery(CURRENT_USER)
const [values, setValues] = useState(initialValues);
const [error_message, setErrorMessage] = useState(null);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function stateChange() {
    setTimeout(function () {
        history.push('/');
    }, 500);
}

  return (
    <div>
        <form onSubmit={e => {
          e.preventDefault();
          loginUser({ variables: {
            email: values.email,
            password: values.password
          }}).then(
              result => {
                if(result.data.loginUser){
                  const token = result.data.loginUser.token;
                  localStorage.setItem("token", token);
                  refetch()
                  stateChange()
                }
              },
            ).catch(
              error => {
                setErrorMessage("Email or password is incorrect")
              }
            );;;
        }} className="box">
            <h1>Login</h1>
            <p className="text-muted"> Please enter your credentials!</p>
            <div style={{color:"#ad3030"}}>{error_message}</div>
              <input
                value={values.email}
                onChange={handleInputChange}
                type="text"
                name="email"
                placeholder="Email"
              />
              <input
                value={values.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <input type="submit" name="" value="Login" href="#"/>
        </form>
    </div>
  );
}

export default Login;
