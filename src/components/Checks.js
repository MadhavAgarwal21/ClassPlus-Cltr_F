import React from 'react'

import { Button, Form, FormGroup, FormControl, FormLabel, Label, Input } from 'reactstrap'

function Checks() {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center" style={{ marginTop: "100px" }}>
            <div className="d-flex flex-column">
                <div>
                    <img src="./images/logo.jpg" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/250x150" alt="" style={{ marginTop: "20px" }} />
                </div>

                <Button color="info" style={{ marginTop: "20px" }}>Retake</Button>


            </div>

            {/* Camera ka foto */}

            <div className="d-flex flex-column mx-5">

                <p style={{ color: "success" }}>Face Recognized</p>

                <p>Face registered</p>
                <p>Cofirm Detection</p>

                <Button color="success" style={{ marginTop: "20px" }}>Register</Button>
            </div>

        </div>
    )
}

export default Checks
