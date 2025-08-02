import React, { useState } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { registerUser } from '../../redux/actions/authAction';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {

//   const dispatch = useDispatch();
    // const {user} = useSelector((state)=> state.auth)
  const [formData, setFormData] = useState({ name: '', email: '', password: '', city:'', role: 'user' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
console.log(formData);
const navigate= useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = formData;
    console.log(formData);
    // dispatch(registerUser(formData, navigate))
    


  };

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-4 p-6  rounded shadow-lg bg-white w-full max-w-sm"
  >
    <h2 className="text-2xl font-bold text-center mb-2">Register</h2>

    {/* Name Input */}
    <input
      name="name"
      placeholder="Name"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
    />

    {/* Email Input */}
    <input
      name="email"
      type="email"
      placeholder="Email"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
    />

    {/* City Input */}
    <input
      name="city"
      placeholder="City"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
    />

    {/* Password Input */}
    <input
      name="password"
      type="password"
      placeholder="Password"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200"
    >
      Register
    </button>

    <Link to="/login" className="text-orange-600 hover:underline text-center">
      Login
    </Link>
  </form>
</div>

  );
};

export default Register;
