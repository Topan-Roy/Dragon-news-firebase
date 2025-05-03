import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const emailRef=useRef();
  const [error,setError]=useState("");
  const {singIn,forgetPassword}=use(AuthContext)
  const location=useLocation();
  const navigate=useNavigate();
  // console.log(location)
  const handleLogin=(e)=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    // console.log(email,password)
    singIn(email,password)
    .then((result) => {
      const user=result.user;
      alert("LogIn successful  ")
     console.log(user)
     navigate(`${location.state? location.state :"/"}`)
    })
    .catch((error) => {
      const errorCode = error.code;
    // const errorMessage = error.message;
  //  alert (errorCode,errorMessage)
  setError (errorCode)
    });
    
  }
const handleForgotPassword=()=>{
  const email= emailRef.current.value;

  if (!email) {
    alert("Please enter your email first.");
    return;
  }
  forgetPassword(email)
      .then(() => {
        alert("Password reset email sent.");
      })
      .catch((error) => {
        setError(error.code);
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
          <input type="email" ref={emailRef}  name='email' className="input" placeholder="Email"  required/>
          {/* passwoe */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          <div  onClick={handleForgotPassword}><a className="link link-hover">Forgot password?</a></div>

         {error&& <p className='text-red-500 text-xs'>{error}</p>}

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='font-bold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
       </div>
    );
};

export default Login;