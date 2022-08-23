import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

import {Route} from 'react-router-dom'; 

const AuthRoutes = () => {
    return [
        <Route path="/signup" element={<SignupPage />} key="/signup" />,
        <Route path="/login" element={<LoginPage />} key="/login" />, 
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} key="/forgotpassword" />
    ];
}

export default AuthRoutes;