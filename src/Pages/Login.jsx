import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { loginUser } = use(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password).then(result => {
             result.user;
            alert('Login successful');
            navigate(`${location.state ? location.state : '/'}`)
            form.reset();
        }).catch(error => {
            // const errorMassage = error.massage
            const errorCode = error.code
            setError(errorCode);
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center  text-2xl font-semibold'>Login Your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-600'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p>Dont’t Have An Account ? <Link className='text-secondary font-semibold' to="/auth/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;