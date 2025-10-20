import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { MdInstallDesktop } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='w-11/12 mx-auto flex justify-between items-center mt-4 shadow-sm py-2'>
            <span className='flex items-center' onClick={()=> setOpen(!open)}>
                {
                    open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden bg-purple-400 flex flex-col gap-2 p-4  text-white rounded-lg absolute duration-1000 ${open? 'top-13' : '-top-30'}`}>
                    <NavLink to='/' className="flex items-center gap-2">
                     <IoHomeOutline/> Home
                     </NavLink>
                    <NavLink to='/apps' className="flex items-center gap-2">
                     <FaAppStore/> Apps
                     </NavLink>
                    <NavLink to='/installation' className="flex items-center gap-2"> <MdInstallDesktop/> Installation
                    </NavLink>
                </ul>
                <Link className="flex items-center gap-3 h-[30px] ml-3" to="/">
                    <img className='w-full h-full' src="https://i.ibb.co.com/M57N1rPK/logo.png" alt="logo" />
                    <h2 className='text-xl font-bold text-blue-600'>APPS.IO</h2>
                </Link>
            </span>
            <ul className='md:flex gap-5 hidden'>
                <NavLink to="/" className="flex items-center gap-2">
                    <IoHomeOutline/> Home
                </NavLink>
                <NavLink to='/apps' className="flex items-center gap-2"> 
                    <FaAppStore/> Apps
                </NavLink>
                <NavLink to='/installation' className="flex items-center gap-2">
                     <MdInstallDesktop/> Installation
                </NavLink>
            </ul>
            <a href='https://github.com/sontosh36' className='btn outline-none rounded-lg border-none text-white flex gap-2 bg-gradient-to-r from-indigo-500 via-indigo-500 to-purple-400'>
               <span><FaGithub/> </span> Contribute </a>
            
        </nav>
    );
};

export default Navbar;