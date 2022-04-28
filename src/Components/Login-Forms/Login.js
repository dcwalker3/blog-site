import { React, useRef, useState } from 'react'
import {
    Form,
    Button,
    FloatingLabel,
    Alert
} from 'react-bootstrap';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const axios = require('axios');

    function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        setLoading(true);
        setError("");

        try{
            axios.post('http://localhost:4000/auth', {
                email: email,
                password: password
            })
            .then(res => {
                setLoading(false);
                
                // Add token to cookies with httpOnly flag and expiry date
                const token = res.data.token;
                const cookieOptions = {
                    maxAge: 1000 * 60 * 60,
                    httpOnly: true
                };

                document.cookie = `token=${token}; ${JSON.stringify(cookieOptions)}`;

                window.location.href = '/';
            })
            .catch(err => {
                setError(err.response.data.message);
                setLoading(false);
            });
        } catch (error) {
            setError("An error occured while logging in! Please try again later.");
            setLoading(false);
        }
    }

        

  return (
    <Form className='login-form' onSubmit={handleSubmit}>
        <h3 className='form-header'>Login</h3>
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
        <Button variant="primary" type="submit" className='form-submit' disabled={loading}>Login</Button>
        <div className='form-footer mt-2'>
            <p>Don't have an account? <a href='/signup'>Sign up</a></p>
        </div>
        { error && <Alert variant='danger' className='m-auto text-center'>{error}</Alert> }
    </Form>
    )
}
