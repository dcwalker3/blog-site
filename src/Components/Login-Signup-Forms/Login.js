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

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMsg('');

        axios.post('http://localhost:4000/users/login', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then((res) => {
            if(res.status >= 200 && res.status < 300) {
                // Set User in Local Storage
                sessionStorage.setItem('user', JSON.stringify(res.data));
                window.location.replace('/');
            }
        })
        .catch((err) => {
            setError(err);
        });
    }

    return (
        <Card className='form-input'>
            <Card.Title className='form-input-title'>Login</Card.Title>
            <Card.Body className='form-input-body'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </FormGroup>
                    <FormGroup className='form-input-body-group'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </FormGroup>
                    <div className='form-input-button-container'>
                        <Button type='submit' className='form-input-button'>Login</Button>
                    </div>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {msg && <Alert variant='success'>{msg}</Alert>}
                    <div className='form-input-footer'>
                        <p>Don't have an account? <a href='/signup'>Sign Up</a></p>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );

}