import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../CustomHook/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { Bar, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const [isInstall, setIsInstall] = useState(false);
    const {id} = useParams();
    const {apps, loading} = useApps();
    const app = apps.find(item => item.id === parseInt(id));
   
    useEffect(() => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const alreadyInstalled = installedApps.some((item)  => item.id === app.id);
        if (alreadyInstalled) {
            setIsInstall(alreadyInstalled);
        }

    }, [app]);
     const handleInsBtn = () =>{
        if(!app) return;
        setIsInstall(true);
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updateApps = [...installedApps, app];
        localStorage.setItem('installedApps', JSON.stringify(updateApps));
        toast.success(`${title} installed Successfully`);
    }
    if (loading) {
        return <p>Loading....</p>
    }
    const {image, title, companyName, downloads, ratingAvg, reviews, size, description, ratings} = app || {};

    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-7'>
                <div className=' flex flex-col md:flex-row justify-between gap-3 md:gap-12'>
                    <div className='flex-1'>
                        <img className='w-full rounded-xl shdow-sm' src={image} alt={title} />
                    </div>
                    <div className='flex-3'>
                        <div className='text-center md:text-left'>
                            <h2 className='text-3xl font-bold mb-2 text-indigo-800'>{title}</h2>
                            <p className='text-sm'>Developed by <span className='text-indigo-500'>{companyName}</span></p>
                        </div>
                        <hr className='border border-indigo-500 mt-4' />
                        <div className='flex flex-col md:flex-row text-center md:text-left justify-around gap-5 mt-8'>
                            <div>
                                <p className='text-sm text-gray-500 mb-2'>Download</p>
                                <h2 className='flex justify-center items-center font-bold gap-8'>{downloads} <FaDownload className='text-indigo-500' size={30}/></h2>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Averge Ratings</p>
                                <h2 className=' font-bold flex justify-center items-center gap-8'>{ratingAvg} <FaStar className='text-indigo-600' size={30}/></h2>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Total Reviews</p>
                                <h2 className=' font-bold flex justify-center items-center gap-8'>{reviews} <MdReviews className='text-indigo-500' size={30}/> </h2>
                            </div>
                        </div>
                            <div className='mt-5 flex justify-center md:justify-start'>
                                 <button onClick={handleInsBtn} disabled={isInstall} className='px-4 py-2 flex items-center rounded cursor-pointer bg-green-500 text-white font-bold'>{isInstall ? "Installed" : `Install Now ${size}`}</button>
                            </div>
                       
                    </div>
                </div>  
                <hr className='mt-3 border-gray-400 border-sm mb-3'/>

                <div className='space-y-3'>
                    <h2 className='font-bold text-2xl mb-4'>Ratings</h2>
                    <div className='bg-base-100 border rounded-xl p-4 h-100'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <ComposedChart layout='vertical' margin={{top: 20, right:0, bottom: 0, left: 2}} responsive data={ratings}>
                            <XAxis type='number'/>
                            <YAxis dataKey='name' type='category' scale='band' width='auto'/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='count' barSize={20} fill="green"/>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <hr className='mt-3 border-gray-400 border-sm mb-3'/>

                <div>
                    <h2 className='text-2xl font-bold mb-3'>Description</h2>
                    <p className='text-gray-600'>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;