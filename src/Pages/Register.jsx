import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser , updateUser } = use(AuthContext)
    const [error , setError] = useState('')
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        const form = e.target;
        const name = form.name.value
        const photo = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({
                    displayName:name,
                    photoURL:photo
                }).then(() => {

                    setUser({...user,displayName:name,
                    photoURL:photo})
                    navigate("/")
                    alert('Registration successful');
                    form.reset();
                }).catch(error => {
                    const errorMassage = error.massage
                    setError(errorMassage)
                    setUser(user)
                })
                

            })
            .catch(error => {
                const errorMassage = error.massage
             
                alert(errorMassage)
            })
    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='text-center  text-2xl font-semibold'>Register Your account</h2>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            {error}
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                            <p className='mt-3'>Already Have An Account ? <Link className='text-secondary font-semibold' to="/auth/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;