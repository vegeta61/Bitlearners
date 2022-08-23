import { Form, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import BitLearnersLogo from '../../Assets/bit.png';

import classes from './LoginScreen.module.css';

const LoginScreen = () => {
    return <div className={classes['login-panel']}>
        <img src={BitLearnersLogo} alt="Bitlearners-logo" />
        <h2 className="m-0">Login</h2>
        <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="danger" type="submit" size="lg" className="btn-block">Submit</Button>
            </div>
        </Form>
        <div className="d-flex justify-content-between">
            <Link className="text-secondary my-2 login-links" to="/forgotpassword">Forgot Password</Link>
            <Link className="text-secondary my-2 login-links" to="/signup">Sign Up</Link>
        </div>
        <hr/>
        <h2>Login using: </h2>
        <div className="d-flex justify-content-around mt-4">
            <Button variant="outline-primary" className="px-5"><i className="fa-brands fa-facebook fa-2x"></i></Button>
            <Button variant="outline-danger" className="px-5"><i className="fa-brands fa-google fa-2x"></i></Button>
            <Button variant="outline-dark" className="px-5"><i className="fa-brands fa-github fa-2x"></i></Button>
        </div>
    </div>
}

export default LoginScreen;