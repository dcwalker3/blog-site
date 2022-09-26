import {
    Card,
    Form,
    FormGroup,
    Button,
    Alert,
} from 'react-bootstrap';

import { useState, useRef } from 'react';
import axios from 'axios';

import "./StyleSheets/index.css";

export default function Signup() {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMsg('');
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        axios.post('http://localhost:4000/users/create',{
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            setError(err);
        });
    }

    return (
        <Card className='form-input'>
            <Card.Title className='form-input-title'>Signup</Card.Title>
            <Card.Body className='form-input-body'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </FormGroup>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' ref={usernameRef} required />
                    </FormGroup>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </FormGroup>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                    </FormGroup>
                    <div className='form-input-button-container'>
                        <Button type='submit' className='form-input-button'>Signup</Button>
                    </div>
                    {error && <Alert variant='danger' className='form-alert'>{error}</Alert>}
                    {msg && <Alert variant='success' className='form-alert'>{msg}</Alert>}
                    <div className='form-input-footer'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );

}