import React from 'react'
import { Link } from "react-router-dom"
import "./JobStyle.css"
import logo from "../../../images/cards-logo.png"

export default function JobCards({
    job: {
        id,
        title,
        description
    }
}) {
    return (
         <div className="row">
            <div className="col-md-4">

                <div className="card">

                    <img className="card-img-top" src={logo} alt=""></img>

                    <div className="card-body">

                        <h6 className="card-title" style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h6>
                        <hr color="white" />

                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Id</td>
                                    <td className="td">{id}</td>
                                </tr>

                                <tr>
                                    <td>Title</td>
                                    <td className="td" style={{ color: "white", fontWeight: "bold" }}>{title}</td>
                                </tr>

                                <tr>
                                    <td>Description</td>
                                    <td className="td" style={{ color: "white", fontWeight: "bold" }}>{description}</td>
                                </tr>

                            </tbody>
                        </table>

                        <div>
                            <Link to={`/jobs/${id}`} className="btn btn-danger"
                                style={{
                                    fontWeight: "bold",
                                    color:"black"
                                }}>Read More
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
} 
