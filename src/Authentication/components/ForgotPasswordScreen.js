import { Form, Button } from 'react-bootstrap';

import BitLearnersLogo from '../../Assets/bit.png';

import classes from './LoginScreen.module.css';

const ForgotPasswordScreen = () => {
    return <div className={classes['login-panel']}>
    <img src={BitLearnersLogo} alt="Bitlearners-logo" />
    <h2 className="m-0">Forgot Password</h2>
    <Form className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll send a verification email at this make sure you use your previous email.</Form.Text>
        </Form.Group>

        <div className="d-grid gap-2">
            <Button variant="danger" type="submit" size="lg" className="btn-block">Submit</Button>
        </div>
    </Form>
</div>
}

export default ForgotPasswordScreen;