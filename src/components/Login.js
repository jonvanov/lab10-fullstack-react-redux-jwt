import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';

function Login() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <h2>JWT Login Simulation</h2>
      {token ? (
        <>
          <p>Logged in! Token: {token}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
}

export default Login;
