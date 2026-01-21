
import React, { use } from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';
const SocialLogin = () => {
    const {  googleLoginUser } = use(AuthContext)

    const handleGoogleLogin = () => {
        console.log("clicked");
        
        googleLoginUser().then((result) => {
            console.log(result.user);
            
            
        }).catch((error) => {
            alert(error.errorMassage)
        })
    }
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With </h2>
            <div className='space-y-2'>
                <button onClick={handleGoogleLogin} className='btn btn-outline  btn-secondary w-full'> <FcGoogle size={24} />Login With Google</button>
                <button className='btn  btn-outline btn-primary w-full'> <FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;