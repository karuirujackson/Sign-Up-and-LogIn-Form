import React, { useState } from 'react';
import EmailImg from '../../assets/email.png';
import PasswordImg from '../../assets/password.png';
import PersonImg from '../../assets/person.png';
import './SignUpSignIn.css';

function SignUpSignIn() {
  const[action ,setAction] = useState('Register or Log-In');
  return (
    <div className='form'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <form className='form-container'>
        <div className='formInputs'>
          {action==='Login'?<div></div>:<div className='name'>
              <img src={PersonImg} alt="" className='icon' />
              <input type="text" placeholder='Name' className='inputInfo' />
          </div>}
          <div className='email'>
              <img src={EmailImg} alt="" className='icon' />
              <input type="text" name='email' placeholder='Email' className='inputInfo' />
          </div>
          <div className='password'>
              <img src={PasswordImg} alt="passwordIcon" className='icon' />
              <input type="text" name='password' placeholder='Password' className='inputInfo' />
          </div>
        </div>
      </form>
      {action==='Sign Up'?<div></div>:<div className='password-container'>
        <span className='getPassword'>Forgot Password. <span className='passwordLink'>Click Here!</span></span>
      </div>}
      <div className='btn'>
        <button  className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Log In</button>
        <button className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpSignIn;
