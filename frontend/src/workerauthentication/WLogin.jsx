import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function WLogin() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const { setToken ,setEmail} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginInput = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('https://cleanhome.onrender.com/wauth/wlogin', login)
      .then(res => {
        console.log(res.data.token);
        console.log(res.data.email);
        setEmail(res.data.email);
        setToken(res.data.token); // Store token globally
        navigate('/dashboard'); // Navigate after login
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='login'>
      <div id="login-nav">
          <Link to="/wlogin">Login</Link> | <Link to="/wsignup">SignUp</Link>
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

export default WLogin;