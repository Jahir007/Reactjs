import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Signup.css';

// import App from '../../../App';

const Signup = ({ submitForm }) => {
  
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm,validate);
    

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit}
      className='form' noValidate>
        <div className='heading'>
        <p>
          Create your account by filling the
          information.
        </p>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Firstname</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your firstname'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Lastname</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Lastname'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;