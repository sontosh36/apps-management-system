import React from 'react';
import { IoDownloadOutline, IoLogoGooglePlaystore } from 'react-icons/io5';
import { LuStar } from 'react-icons/lu';

const Home = () => {
    return (
        <div className='bg-gray-300'>
            <div className=' w-11/12 mx-auto py-7'>
                <div className='text-center '>
                    <h2 className='text-3xl font-bold mb-3'>We Build <br /> <span className='text-purple-500'> Productive </span>
                    Apps
                    </h2>
                    <p className='text-gray-700'>At <span className='text-blue-950 italic font-bold text-lg'>APPS.IO </span> , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make on impact.</p>

                   <div className='mx-auto flex items-center justify-center text-center gap-4 mt-3'>
                        <button className='btn border-none rounded-lg bg-white shadow-sm'>
                            <img src="/google-play.jpg" alt='Google Play' className='w-5 h-5' />
                             Google Play</button>
                        <button className='btn border-none rounded-lg bg-white shadow-sm'> 
                            <img src="/app-store.jpg" alt='app store' className='w-5 h-5' />
                            App Store</button>

                   </div>
                   <div className='mt-5 max-w-2xl mx-auto flex justify-center'>
                         <img src="/hero.png" alt="hero image" className='w-full h-full' />
                   </div>
                
                </div>
            </div>
            <div className='bg-gradient-to-r from-blue-600 to-pink-300 p-10'>
                <div className="w-11/12 flex flex-col">
                    <h2 className='text-white text-2xl font-bold text-center mb-4'>Trusted By Millions, Bulit For You</h2>
                    <div className='flex justify-around gap-4 text-white'>
                        <div>
                            <p>Total Downloads</p>
                            <h4 className='text-white text-3xl my-2 flex gap-10 items-center font-extrabold'>
                                29.6M
                                <IoDownloadOutline/>
                            </h4>
                            <p className='text-sm'>21% more than last month</p>
                        </div>
                        <div>
                             <p>Total Reviews</p>
                            <h4 className='text-white font-extrabold flex items-center gap-10 text-3xl my-2'>966K 
                                <LuStar/>
                            </h4>
                            <p className='text-sm'>40% more than last month</p>
                        </div>
                        <div>
                             <p>Active Apps</p>
                            <h4 className='text-white text-3xl font-extrabold my-2 flex items-center gap-10'>265+
                                <IoLogoGooglePlaystore/>
                            </h4>
                            <p className='text-sm'>30 more with launch</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto py-8 text-center'>
                <h2 className='font-bold mb-2 text-3xl'>Tranding Apps</h2>
                <p className='text-gray-600'>Explore All Tranding Apps on the Market developed by us</p>
            </div>
        </div>
    );
};

export default Home;