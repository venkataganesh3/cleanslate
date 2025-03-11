import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
function SignUp() {

  const [post, setPost] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(post);
    axios.post('http://localhost:5000/auth/signup', {...post})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className='login'>
      <div >
      <div id="login-nav">
          <Link to="/login">Login</Link> | <Link to="/signup">SignUp</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <label htmlFor="">Name: </label><input type="text" onChange={handleInput} name="name" /><br /><br />
          <label htmlFor="">Email:</label> <input type="email" onChange={handleInput} name="email" /><br /><br />
          <label htmlFor="">Password:</label> <input type="password" onChange={handleInput} name="password" /><br /><br />
          <label htmlFor="">Confirm Password:</label> <input type="password" onChange={handleInput} name="cpassword" /><br /><br />
          <button className='btn btn-primary'>Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default SignUp;