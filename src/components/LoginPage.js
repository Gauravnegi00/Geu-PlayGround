import React, { useState } from 'react';
import axios from 'axios';

import photo from './Assests/login.png'
import loginImg from './Assests/illustration.png'


function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    university: ''
  });

  // Toggle between login and registration
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      // POST request to save registration details in db.json
      try {
        const response = await axios.post('http://localhost:5000/users', formData);
        alert('Registration successful');
        console.log(response.data);
      } catch (error) {
        console.error('There was an error registering!', error);
      }
    } else {
      // You can handle the login logic here
      alert('Login logic goes here');
    }
  };

  return (
    <div className='width height flex justify-center'>
      <div className='card w-[80%] h-[80%] mt-8 flex'>
        <img src={photo} alt='loginImg' />

        <div className="w-1/2 h-full flex flex-col justify-center p-8 relative border-none">
          <img src={loginImg} alt='img' className='absolute w-[300px] right-0 top-[-50px]' />

          {isLogin ? (
            <>
              <h2 className="text-[25px] text-blue-text font-bold text-center mb-6 z-10">Welcome Back</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                  Login
                </button>
              </form>
              <p className="text-center mt-4">
                Don't have an account?
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-[25px] text-blue-text font-bold text-center mb-6 z-10">Create Account</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="fullName"
                  value={formData.fullName}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  name="university"
                  value={formData.university}
                >
                  <option value="">Select University</option>
                  <option value="GEU">GEU</option>
                  <option value="GEHU">GEHU</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                  Sign Up
                </button>
              </form>
              <p className="text-center mt-4">
                Already have an account?
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
