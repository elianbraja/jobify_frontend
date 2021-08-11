import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom"
import "./JobStyle.css"

import gql from "graphql-tag";

const deleteJobMutation = gql`
    mutation deleteJob( $jobId: ID!) {
        deleteJob(jobId) {
      id
    }
  }
`;

function DeleteJob() {
  let history = useHistory()


  const [delete_job] = useMutation(createJobMutation);
  const [values, setValues] = useState(initialValues);

    
  const handleInputChange = (e) => {
     const { name, value } = e.target;
     setValues({
       ...values,
       [name]: value,
    });
    };
    
    function deleteJob (id) {
        e.preventDefault();
        delete_job({
            
        })
        history.push('/jobs');
    }

    return (
        <div>
            <button className="btn btn-success" onClick={createNewJob(valus.id)} >Save <FaSave size={15} /> </button>
        </div>
   ) 
}

export default DeleteJob;