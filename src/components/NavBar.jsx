import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = use(AuthContext)
    const handleLogOut =() => {
        // Handle logout logic here
        logOut().then( () => {
            // Logout successful
            alert('Logout successful');
        }).catch( error => {
            const errorMassage = error.massage
            alert(errorMassage);
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user?.email}</div>
            <div className='nav'>
                <ul className='flex gap-6 justify-center text-accent'>
                    <li className='nav_item'><NavLink to="/">Home</NavLink></li>
                    <li className='nav_item'><NavLink to="/about">About</NavLink></li>
                    <li className='nav_item'><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>
            <div className="login flex items-center gap-4">
                <img className=' w-12 rounded' src={`${user? user.photoURL : userIcon}`} alt="user" />
                {user? <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button> : <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>}
                
            </div>
        </div>
    );
};

export default NavBar;