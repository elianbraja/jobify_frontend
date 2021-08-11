import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import JobCards from "./JobCards"
import { Link } from "react-router-dom"
import JobsQuery from "../../../queries/jobs/GetJobs"


export default class JobsComponent extends Component {
     constructor(props) {
        super(props);
        this.state = {}
     }

    render() {
        return (
            <div>
                <Link to={`/jobs/new`} className="btn btn-danger"
                          style={{
                            fontWeight: "bold",
                          }}>New Job
                </Link>

                <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>
                    <Fragment>
                        <h3 style={{ margin: "50px 0px" }}>All Jobs</h3>
                        <Query query={JobsQuery}>
                            {
                                ({ loading, error, data }) => {

                                    if (loading) return <h4>Loading . . .</h4>
                                    if (error) return <h4>Error</h4>

                                    return (
                                        <Fragment>
                                            {data.jobs.map(job => (
                                                 <JobCards key={job.id} job={job} />
                                            ))}
                                        </Fragment>
                                    )
                                }
                            }
                        </Query>
                    </Fragment>
                </div>
            </div>
        )
    }
}
