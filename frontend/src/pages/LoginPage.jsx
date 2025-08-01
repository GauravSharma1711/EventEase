import React from 'react';
import { useState } from 'react';
import useAuthStore from '../store/authStore';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


const LoginPage = () => {

  const {login} = useAuthStore();
  const navigate = useNavigate();
 
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e)=>{
const {name,value} = e.target;
setFormData((prevData)=>({
  ...prevData,
  [name]:value
}))
  }

  const loginHandler  = async(e)=>{
       try {
        e.preventDefault();
      const res = await login(formData);
      if(res){
        navigate('/events');
      }
       } catch (error) {           
        console.log("error logging in",error.message);
       }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form 
       onSubmit={loginHandler}
      className="w-full max-w-sm p-8 bg-base-200 border border-slate-700 rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-slate-200">Login</h1>

        <input
          type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <input
          type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <button 
       type='submit'
        className="btn w-full bg-white text-black border border-[#e5e5e5] hover:bg-gray-100"
        >Login </button>
   

 <div className="text-center">
  <span className="text-white">
    Don't have an account?{' '}
    <Link className="text-gray-500 underline" to="/signup">
      Signup
    </Link>
  </span>
</div>



      </form>
    </div>
  );
};

export default LoginPage;