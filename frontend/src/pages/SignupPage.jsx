import React from 'react';
import { useState } from 'react';
import useAuthStore from '../store/authStore';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const SignupPage = () => {

  const navigate  = useNavigate();

  const {signUp} = useAuthStore();



  const [formData , setFormData] = useState({
    username :'',
    fullName:'',
    email:'',
    password:'',
    role:''
  });

  const handleChange = (e)=>{
const {name,value} = e.target;
setFormData((prevData)=>({
  ...prevData,
  [name]:value
}))
  }

  const handleSubmit = async(e)=>{
   try {
      e.preventDefault();
    const res = await signUp(formData);
      if(res){
        navigate('/login');
      }
   } catch (error) {
            console.log("error signing up",error.message);
   }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
       onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-base-200 border-2 border-base-100 rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-300 text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="text"
          placeholder="Full Name"
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
             className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          name='email'
          onChange={handleChange}
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name='password'
          onChange={handleChange}
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />

        <select
          value={formData.role}
          onChange={handleChange}
          name='role'
          className="select w-full rounded-lg border border-base-100 bg-base-100 text-white focus:outline-none"
        >
          <option value="" disabled hidden>
            Role
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button
        type='submit'
       className="btn bg-white text-black border border-[#e5e5e5] w-full">
        Signup
        </button>
       
        

 <div className="text-center">
  <span className="text-white">
    Already have an account?{' '}
    <Link className="text-gray-500 underline" to="/login">
      Login
    </Link>
  </span>
</div>


      </form>
    </div>
  );
};

export default SignupPage;