import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import CONFIRM_EMAIL from '../../components/mutation/user/ConfirmEmail'

function Signup(props) {
  const [confirm_email, { loading: mutationLoading }] = useMutation(CONFIRM_EMAIL);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    confirm_email({ variables: {
      token: query.get('confirmation_token')
    }}).then(result => {
      if(result.data.confirmEmail.success){
        setMessage("Thank you. Your email has been verified!")
      }
      else{
        setMessage("Opss. Somthing went wrong!")
      }
    }
    )
  },[]);


  return (
    <div className="box">
      <div style={{textAlign:"center", color:"#2ecc71"}}>
        {mutationLoading && <p>Loading...</p>}
        {!mutationLoading && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
