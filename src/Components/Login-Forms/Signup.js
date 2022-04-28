import axios from 'axios';
import { React, useRef, useState } from 'react'
import {
    Form,
    Button,
    FloatingLabel,
    Alert
} from 'react-bootstrap';

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const axios = require('axios');

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if(password !== confirmPassword){
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            axios.post('http://localhost:4000/user', {
                email: email,
                password: password
            })
            .then(res => {
                setLoading(false);
                window.location.href = '/login';
            })
            .catch(err => {
                setError(err.response.data.message);
                setLoading(false);
            });

        } catch (error) {
            setError("An error occured while signing up! Please try again later.");
            setLoading(false);
        }    
    }

  return (
    <Form className='login-form'  onSubmit={handleSubmit}>
        <h3 className='form-header'>Sign Up</h3>
        <Form.Group controlId="formBasicEmail">
            <FloatingLabel controlId='emailInput' label="Email Address">
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
            </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <FloatingLabel controlId='passwordInput' label="Password">
                <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required/>
            </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
            <FloatingLabel controlId='confirmPasswordInput' label="Confirm Password">
                <Form.Control type="password" placeholder="Confirm Password" ref={confirmPasswordRef} required/>
            </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit" className='form-submit' disabled={loading}>Sign up</Button>
        <div className='form-footer mt-2'>
            <p>Already have an account? <a href='/login'>Login</a></p>
            { error && <Alert variant='danger' className='m-auto text-center'>{error}</Alert> }
        </div>
    </Form>
    )
}
