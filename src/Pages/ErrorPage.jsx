import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { BiSolidError } from 'react-icons/bi';
import { Link } from 'react-router';

const ErrorPage = () => {
    // const error = useRouteError();
    return (
        <div>
            <Navbar/>
            <div className='bg-gray-200'>
                <div className='w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-10'>
                        <BiSolidError className='text-red-600' size={60}/>
                    <div className='w-6/12 flex flex-col gap-4 justify-center text-center items-center'>
                        <h3 className='text-3xl'>404</h3>
                        <p className='text-3xl'>Not Found</p>
                        <p className='text-gray-400'>Sorry, the page you are looking for might be removed, rename or is temporarily unavaliable.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Link to='/' className='text-white bg-indigo-900 px-3 py-3 rounded-md'>Back to Home</Link>
                        <Link to='/apps'  className=' text-indigo-900 px-3 py-3 rounded-md border border-indigo-700'>Browse Apps</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;