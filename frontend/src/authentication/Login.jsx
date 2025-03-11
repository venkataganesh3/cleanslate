import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const { setToken,setEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginInput = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/auth/login', login)
      .then(res => {
        setEmail(res.data.email);
        console.log(res.data.token);
        setToken(res.data.token); // Store token globally
        navigate('/findworkers'); // Navigate after login
      })
      .catch(err => {
        if (err.response) {
          console.log('Response error:', err.response);
        } else if (err.request) {
          console.log("Hero")
          console.log('Request error:', err.request);
        } else {
          console.log('General error:', err.message);
        }
      });
  };

  return (
    <div className='login'>
      <div id="login-nav">
          <Link to="/login">Login</Link> | <Link to="/signup">SignUp</Link>
        </div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleLoginInput} required /><br /><br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleLoginInput} required /><br /><br />
        <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
}

export default Login;