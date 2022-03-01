import React from 'react';
import validatelog from './validateLog';
import loginForm from './loginForm';
import './login.css';
// import App from '../../../App';

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = loginForm(
    submitForm,
    validatelog
  );

  return (
    <div className='form-content-r'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='head'>
        <p>
         Login with your Existing Account
        </p>
        </div>

        <div className='form-inputs2'>
          <label className='form-label2'>Email</label>
          <input
            className='form-input2'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Password</label>
          <input
            className='form-input2'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input2-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;