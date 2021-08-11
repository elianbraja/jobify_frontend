import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import { FaSave } from "react-icons/fa";
import SpecificJobQuery from "../../../queries/jobs/SingleJob"

export default class JobDetails extends Component {
    render() {
        let id = this.props.match.params.id

        return (
            <div>
                   <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>

                <Fragment>
                    <Query query={SpecificJobQuery} variables={{ id }}>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <h4>Loading . . .</h4>
                                if (error) return <h4>Error</h4>;

                                const {
                                     id,
                                     title,
                                     description,
                                } = data.jobs


                                // let current_active = active.toString();
                                // let current_year = (year_built === null ? "Null" : year_built)

                                return (
                                    <div>
                                        <h3 style={{ margin: "50px 0px" }}>Job Name:
                                            <span style={{ marginLeft: "20px" }}>{data.jobs[0].title}</span>
                                        </h3>


                                        <div className="child_1">
                                            <h4>Overview</h4>

                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>Id</td>
                                                        <td className="td">{data.jobs[0].id}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Title</td>
                                                        <td className="td">{data.jobs[0].title}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Description</td>
                                                        <td className="td">{data.jobs[0].description}</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                        <Link to={{pathname: `/jobs/${data.jobs[0].id}/edit`, state:{job:data.jobs[0]}}} className="btn btn-danger" style={{
                                            marginRight:"30px", fontWeight: "bold"
                                        }}>Update</Link>

                                        <Link to="/jobs" className="btn btn-primary" style={{
                                            margin: "100px 0px", fontWeight: "bold"
                                        }}>Back</Link>

                                    </div>
                                );
                            }
                        }

                    </Query >
                </Fragment >

                <hr color="#2f2f2f" />
            </div>
            </div>
        )
    }
}
