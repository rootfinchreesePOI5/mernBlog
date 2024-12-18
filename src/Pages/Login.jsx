import React, { useState } from 'react'
import { lock, logo , profile} from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({setLogin, setuser , setInfo }) => {
  //get username , password 
  const [username , setName] = useState('')
  const [password , setpassword] = useState('');
  const navigate = useNavigate();

  //get them from the input
  const getName = (e) =>{
    setName(e.target.value)
  }
  const getPass = (e) =>{
    setpassword(e.target.value)
  }  

  //submit
  const Submit = (e) => {
    e.preventDefault();
    setInfo({
      name: username,
      pass: password,
    });
    setuser(username);
    setLogin(true);
    navigate(`/${username}`)
  };
  
    return (
        <div className='Login-page'>
          <div className="App-logo">
            <img src={logo} alt="" />
          </div>
          <form onSubmit={Submit}>
          <div className="label">
            <div className="image-label">
              <img src={profile} alt="" />
              <label>Your username</label>
            </div>
            <input type="text"  name='name' onChange={getName} required />
          </div>
          <div className="label">
            <div className="image-label">
              <img src={lock} alt="" />
              <label>Your Password</label>
            </div>
            <input type="text" onChange={getPass}  required/>
          </div>

          <div className="remember_forgot">
            <div className="label2">
              <input className='check' type="checkbox" name="check" id="check" />
              <label>Remember</label>
            </div>
            <Link className='forgot' to='/forgot'>forgot password</Link>
          </div>

          <div className="submit">
            <button>Login</button>
          </div>

          <div className="create">
            <Link className='create'  >create an account/signup</Link>
          </div>
          </form>
        </div>
      )
}

export default Login
