import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../app/userSlice';

function Protected(props) {
  const { Component } = props;
  const isLoggedIn = useSelector(state => state.user.isloggedIn);
  // console.log("The logged in status",isLoggedIn);
  const User = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // console.log("login first")
      navigate('/login');
    }
    dispatch(loginSuccess());
  }, [isLoggedIn, navigate, dispatch]);
  // console.log(User.user.name);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className=' text-end  m-2 '>Welcome {User.user.name}</h1>
          <Component /> 
        </div>
      ) : null}
    </div>
  );
}

export default Protected;
