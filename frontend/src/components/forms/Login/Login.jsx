import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/userSlice';
import { useNavigate } from 'react-router-dom';


function Login() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const submitlogin = async (data) => {
    try {
      const loginresponse = await axios.post("http://localhost:7000/home/user/login", data);
      console.log(data);
      if (loginresponse.data.success) {
        alert(`User ${data.name} logged in successfully`);
        console.log(`User ${data.name} logged in successfully`);
        navigate('/home');

        // console.log(loginresponse.data.success);
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submitlogin)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register('name', { required: true })} />
        </div>
        <div>
          <label>Phone No:</label>
          <input type="integer" {...register('phone', { required: true })} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
