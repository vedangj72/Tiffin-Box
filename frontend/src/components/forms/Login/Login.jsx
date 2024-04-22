import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/userSlice';
import { useNavigate } from 'react-router-dom';
import "../../forms/Login/login.css"; 

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [phone,setphone]=useState();

  const submitLogin = async (data) => {
    try {
      const loginResponse = await axios.post("http://localhost:7000/home/user/login", data);
      console.log(data);
      if (loginResponse.data.success) {
         alert(`User ${data.name} logged in successfully`);
        console.log(`User ${data.name} logged in successfully`);
        navigate('/home');
        dispatch(loginSuccess(data));
      } else {
        alert(`Login failed for user ${data.name}`);
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='login-container mt-5'>
      <h1 className='header'>Login</h1>
      <form className='login-form' onSubmit={handleSubmit(submitLogin)}>
        <div>
          <label className=' text-start m-2'>Name:</label>
          <input type="text" {...register('name', { required: true })} />
        </div>
        <div>
          <label className=' text-start m-2'>Phone No:</label>
          <input type="tel" {...register('phone', { required: true })}  />
        </div>
        <div className=' mb-3'>
          <button type="submit"   className=' mb-3'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
