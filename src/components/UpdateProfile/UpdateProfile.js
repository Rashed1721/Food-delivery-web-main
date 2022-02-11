import React from 'react';
import { Form } from 'react-bootstrap';

import img from '../../image/Photos and Icons/bg-1.png'
import MainNavbar from '../MainNavbar/MainNavbar';
const UpdateProfile = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{
                marginTop: 30,
                background: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
                height: 300,
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 style={{ fontSize: 60, fontweight: 600, color: "white" }}>Update Your Profile</h2>
            </div>

            <div>

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h1>Profile</h1>
                        <Form.Control style={{ borderColor: "transparent", borderBottom: "2px solid gray" }} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProfile;