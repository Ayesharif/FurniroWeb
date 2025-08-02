import {React, useState}  from 'react'
// import { useDispatch,useSelector } from 'react-redux';

// import { useNavigate } from 'react-router-dom';






export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

    // const auth = useSelector(state => state.auth);

    const [loginData, setloginData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });

  };
console.log(loginData);

  const handleSubmit = async e => {
    e.preventDefault();

        console.log('Login Data:', loginData);
    const { email, password } = loginData;
    // console.log(email);
    // dispatch(loginUser(email, password, navigate));
    
    
    
  };
//   console.log(auth);


    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-8 p-6 w-full max-w-sm bg-white rounded shadow-lg"
  >
    <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

    <div>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
      />
    </div>

    <div>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200"
    >
      Login
    </button>
  </form>
</div>

  )
}
