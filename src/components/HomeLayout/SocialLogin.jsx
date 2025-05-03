import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
const SocialLogin = () => {
    const navigate =useNavigate();
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn()
          .then((result) => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}`);
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            alert("Google login failed");
          });
      };
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className="space-y-3">
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-secondary w-full'><FcGoogle size={24} />Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub  size={24}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;