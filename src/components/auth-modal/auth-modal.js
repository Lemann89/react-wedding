import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import HttpService from '../../services/http-service'
import TokenService from '../../services/token-service'
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth-modal.css'

const AuthModal = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const http = new HttpService();
    const token = new TokenService();

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitForm = () => {
        http.authorization({email, password})
        .then(res => {
            const token = new TokenService();
            if(res.access_token){
                token.setToken(res);
                window.location.reload();
            }
            if(res.status === 400){
                alert('Email or password wrong')
            }
        }).catch(() => alert('Email or password wrong'))
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Authorization
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Authorization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            Email
                        </p>
                        <input type="text" value={email} onChange={changeEmail}/>
                    </div>
                    <div>
                        <p>
                            Password
                        </p>
                        <input type="text" value={password} onChange={changePassword}/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={submitForm}>
                        Auth
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AuthModal
