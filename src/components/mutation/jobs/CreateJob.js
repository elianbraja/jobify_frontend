import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom"
import "./JobStyle.css"
import JobsQuery from "../../../queries/jobs/GetJobs"
import createJobMutation from "../../../mutations/jobs/CreateJob"

function CreateJob() {
  let history = useHistory()

  const initialValues = {
    title: "",
    description: ""
  };

  const [create_job] = useMutation(createJobMutation, {
    refetchQueries: [{query: JobsQuery}],
    awaitRefetchQueries: true,
  });
  const [values, setValues] = useState(initialValues);


  const handleInputChange = (e) => {
     const { name, value } = e.target;
     setValues({
       ...values,
       [name]: value,
    });
    };

    function createNewJob(e) {
        e.preventDefault();
        create_job({ variables: {
                title: values.title,
                description: values.description
            }
        })
        history.push('/jobs');
    }

    return (
       <div>
            <br></br>
                <div className="conainer">
                    <div className="row">
                        <div className="card" style={{ width:"500px", height:"400px" ,fontSize:"30px" }}>
                            <h3 className="text-center" style={{ marginTop: "30px" }}>Add New Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInpuTitle">Title</label>
                                        <input placeholder="Title" name="title" className="form-control"
                                        value={values.title} onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInpuDescription">Description</label>
                                        <input placeholder="Description" name="description" className="form-control"
                                        value={values.description} onChange={handleInputChange}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={createNewJob} >Save <FaSave size={15} /> </button>
                                    <Link to={`/jobs`} className="btn btn-danger"
                                    style={{ fontWeight: "bold", marginLeft:"15px" }}>Cancel <MdCancel size={15} /> </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
   )

}


export default CreateJob;
