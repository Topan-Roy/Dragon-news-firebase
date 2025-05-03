import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {singIn}=use(AuthContext)
  const handleLogin=(e)=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password)
    singIn(email,password)
    .then((result) => {
      alert("LogIn successful  ")
     console.log(result)
    })
    .catch((error) => {
      console.log(error)
    });
  }
    return (
       <div className=" flex justify-center min-h-screen items-center">
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* passwoe */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='font-bold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
       </div>
    );
};

export default Login;