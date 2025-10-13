import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-black py-10 text-white'>
           <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                    <img src="" alt="" />
                    <h5>Apps Management System</h5>
                    <p></p>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-gray-600 mb-4'>Services</h2>
                    <div className="flex flex-col gap-3">
                        <Link to='/terms'>Terms of Use</Link>
                        <Link to='/privacy'>Privacy Policy</Link>
                        <Link to='/Cookie'>Cookie Policy</Link>
                        <Link to='/advertise'>Advertisement</Link>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-gray-600 mb-4'>Company</h2>
                    <div className="flex flex-col gap-3 ">
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/job'>Jobs</Link>
                        <Link to='/kit'>Press Kit</Link>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-gray-600 mb-3'>Social Links</h2>
                    <div className="flex items-center gap-3">
                        <Link to="https://facebook.com"><FaFacebook size={24}/></Link>
                        <Link className='flex gap-4'><FaGithub size={24}/></Link>
                        <a href="https://apps.io"> <TfiWorld size={24}/></a>
                        </div>
                    </div>
               
           </div>
        </div>
    );
};

export default Footer;