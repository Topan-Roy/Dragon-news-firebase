import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUSer,setUser}=use(AuthContext)
    const handleRegister=(e)=>{
      e.preventDefault();
      const form =e.target;
      const name =form.name.value;
      const photo =form.photo.value;
      const email =form.email.value;
      const password =form.password.value;
        console.log(name,photo,email,password);
        createUSer(email,password)
        .then((result) => {
         
          alert("successful  account")
          setUser(result)
      //  console.log(result)
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
       <form onSubmit={handleRegister} className="fieldset">
        {/* name */}
       <label className="label">Your name</label>
       <input type="text" name='name' className="input" placeholder="Your name" required/>
        {/* photo url */}
       <label className="label">Photo URL</label>
       <input type="text" name='photo' className="input" placeholder="photo URL"required />
        {/* email */}
         <label className="label">Email</label>
         <input type="email" name='email' className="input" placeholder="Email"required />
         {/* password */}
         <label className="label">Password</label>
         <input type="password" name='password' className="input" placeholder="Password"required />
        
         <button type="submit" className="btn btn-neutral mt-4">Register</button>
         <p className='font-bold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
       </form>
     </div >
   </div>
      </div>
    );
};

export default Register;