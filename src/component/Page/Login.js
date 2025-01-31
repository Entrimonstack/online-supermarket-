



import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Userimg from '../../img/user.jpg';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../../redux/userSlice';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);
  const userData = useSelector(state => state);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataRes = await response.json();
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          setRedirect(true);
        }, 1000);
      }
    } else {
      alert("Please enter required fields");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className='p-3 md:p-2'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-bold mb-4'>Log In</h1>
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md mb-4'>
          <img src={Userimg} alt="User" className='w-full' />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
