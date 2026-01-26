import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';
import logo from "./assets/logo project.png";
// import { toast } from 'sonner';


const SignUp = ({ onLogin, onSwitchToSignIn }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin();
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
           <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Sign Up
        </h1>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">   
          {/* Full Name Input */}
          <div className="relative group">
            <input 
              type="text" 
              required
              name= "name"

              placeholder="Full Name"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all placeholder-gray-500"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <input 
              type="email" 
              required
              placeholder="Email"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <input 
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative group">
            <input 
              type={showPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all placeholder-gray-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
             <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold text-lg py-4 rounded-full transition-all shadow-lg shadow-blue-200 mt-4 active:scale-[0.99]"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link to switch to Sign In */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/signin')}
              className="text-[#22D3EE] hover:text-cyan-600 font-medium ml-1 transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;