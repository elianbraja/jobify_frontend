import React, { Component } from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

export default class homepage extends Component {
    render() {
        return (
            <div className="home">
               <div className="home-font" style={{ margin: "auto", fontFamily: "Libre Baskerville" }}>
                    <h1>Welcome to JOBIFY</h1>
                    <p>You will never struggle to find a job again! </p>
                    <br />
                    <br />
                    <br />
                    <div className="home-button">
                        <Link to={`/jobs`} className="btn btn-danger"
                            style={{
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            padding: "12px 50px"
                        }}> SEE JOBS </Link>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}
