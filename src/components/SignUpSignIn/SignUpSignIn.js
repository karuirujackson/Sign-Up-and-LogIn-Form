import React from 'react';
import EmailImg from '../assets/email.png';
import PasswordImg from '../assets/password.png';
import PersonImg from '../assets/person.png';

function SignUpSignIn() {
  return (
    <div>
      <form>
        <div className='name'>
            <img src={PersonImg} alt="" />
            <input type="text" />
        </div>
        <div className='email'>
            <img src={EmailImg} alt="" />
            <input type="text" name='email' />
        </div>
        <div className='password'>
            <img src={PasswordImg} alt="passwordIcon" />
            <input type="text" name='password' />
        </div>
      </form>
    </div>
  )
}

export default SignUpSignIn;
