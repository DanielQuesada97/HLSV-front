import { useNavigate } from 'react-router-dom';
import '../scss/main.scss';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here (e.g., authentication)
        // If login is successful, navigate to the dashboard
        navigate('/qrcodescanner');
    };

    return (
        <div className="gradient-background">
            <div className="oval-background"></div>
            <div className="login-container">
                <h1>Login</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="google-button">Login with Google</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
