import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContaxt from '../contaxt/AuthContaxt/AuthContaxt';
import logo from '../assets/logo-img.png'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContaxt);
    const handleSingOut = e =>{
        signOutUser()
        .then(()=>{
            console.log('successful sign out')
        })
        .catch(error=>{
            console.log('failed to sign out . stay here dont leave me alone')
        })
    }
    const Nablink = <>
        <Link to='/'><li><a>Submenu 1</a></li></Link>
        <Link to='/'><li><a>Submenu 1</a></li></Link>
        <Link to='/'><li><a>Submenu 1</a></li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Nablink}
                    </ul>
                </div>
                <div>
                    <img className='w-24' src={logo} alt="" />
                    
                </div>
                <h1 className='text-2xl font-bold'>JOBS PORTAL</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Nablink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSingOut} className='btn'>Log Out</button>
                    </> : <>
                        <button className="btn btn-ghost">
                            <Link to='/register'>Register Now</Link>
                        </button>
                        <button className="btn btn-ghost">
                            <Link to='/login'>Sign In</Link>
                        </button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;