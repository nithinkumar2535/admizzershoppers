import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { registerUser } from '../store/authSlice';
import { User, Lock, Chrome, Facebook, Apple } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

function Signup() {

   const dispatch = useDispatch();
   const navigate = useNavigate()
   const { toast } = useToast()
    const [formData, setFormData] = useState({
      username: "",
      name: "",
      email: "",
      password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");

      dispatch(registerUser(formData))
      .then((data) => {
        console.log(data);
        
      toast({
        title: data.payload.message,
      });
        if (data?.payload?.success) {
          console.log(data.payload.message);
          navigate('/login')
        }
        
      })

      
    };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Create Account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800"
            >
              login
            </Link>
          </p>
        </div>

        <div className="my-6 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Chrome className="w-6 h-6 text-gray-600" />
            <span>Google</span>
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="w-6 h-6 text-blue-600" />
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-2">
            <Apple className="w-6 h-6 text-gray-800" />
            <span>Apple</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup