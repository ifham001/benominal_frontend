"use client"

import { showNotification } from '@/store/slices/Notification';
import { adminAuthThunk } from '@/store/thunks/adminThuks/AdminAuthThunk';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const AdminLogin = () => {
   const dispatch =  useDispatch()
   const router = useRouter()
   
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
   
      
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    if(formData.email.length <5 ){
        return  dispatch(showNotification({
            type: 'error',
            message: 'Username > 5 characters and password  > 7 characters.',
          }));
      }
      dispatch(adminAuthThunk(formData,dispatch,router))
    // Here you can call your API or handle authentication logic
  };

  return (
    <div className=" flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-semibold text-center text-green-900 mb-8">Admin Login</h2>

        {/* Username Input */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-green-900 text-yellow-500 font-medium hover:bg-green-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
