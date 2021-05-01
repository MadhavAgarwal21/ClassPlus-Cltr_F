import React from 'react'
import {Button,Form,FormGroup,FormControl,FormLabel,Label,Input} from 'reactstrap'

function register() {
    return (
        <div class='container' >
            <div>
                <img src="./images/logo.jpg" alt="" />
                <h4 >Register</h4>
                
                <Form className="login-form">
                    
                    <FormGroup>
                        <Input type="name" placeholder="Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="tel" placeholder="Mobile Number"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="info" >Info</Button>
                    </FormGroup>
                </Form> 
                
            </div>

            <div>
                <img src="./images/robot.jpg" alt="" />
            </div>

            <p>not registered yet? <b>Register Now</b></p>

        </div>
    )
}

export default register
