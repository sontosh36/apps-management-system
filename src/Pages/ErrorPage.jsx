import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { BiSolidError } from 'react-icons/bi';

const ErrorPage = () => {
    // const error = useRouteError();
    return (
        <div>
            <Navbar/>
            <div className='bg-gray-200'>
                <div className='w-11/12 mx-auto '>
                    <div className='flex items-center justify-center py-10 '>
                        <BiSolidError className='text-red-600' size={60}/>
                        <h3 className='text-3xl'>404 Not Found</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;