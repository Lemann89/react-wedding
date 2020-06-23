import React from 'react'
import Button from 'react-bootstrap/Button'
import TokenService from '../../services/token-service'
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoutButton = () => {
    const token = new TokenService();

    const logout = () => {
        token.removeToken()
    }

    return (
        <div>
            <Button variant="danger" onClick={logout}>
                Logout
            </Button>
        </div>
    )
}

export default LogoutButton