import React from 'react';
import { useParams } from 'react-router';
import useApps from '../CustomHook/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams();
    const {apps, loading} = useApps();
    console.log('overall array',apps);
    console.log('id',id);
    const app = apps.find(item => item.id === parseInt(id));
    console.log('find kora id content', app);
    const handleInsBtn = () =>{
        toast.success('Install successfully!');
    }
    if (loading) {
        return <p>Loading....</p>
    }
    const {image, title, companyName, downloads, ratingAvg, reviews, size, description} = app || {};
    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-7'>
                <div className=' flex justify-between gap-12'>
                    <div className='flex-1'>
                        <img className='w-full rounded-xl shdow-sm' src={image} alt={title} />
                    </div>
                    <div className='flex-3'>
                        <h2 className='text-3xl font-bold mb-2 text-indigo-800'>{title}</h2>
                        <p className='text-sm'>Developed by <span className='text-indigo-500'>{companyName}</span></p>
                        <hr className='border border-indigo-500 mt-4' />
                        <div className='flex justify-around gap-5 mt-8'>
                            <div>
                                <p className='text-sm text-gray-500 mb-2'>Download</p>
                                <h2 className='flex items-center font-bold gap-8'>{downloads} <FaDownload className='text-indigo-500' size={30}/></h2>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Averge Ratings</p>
                                <h2 className=' font-bold flex items-center gap-8'>{ratingAvg} <FaStar className='text-indigo-600' size={30}/></h2>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Total Reviews</p>
                                <h2 className=' font-bold flex items-center gap-8'>{reviews} <MdReviews className='text-indigo-500' size={30}/> </h2>
                            </div>
                        </div>
                            <div className='mt-5'>
                                 <button onClick={() => handleInsBtn()} className='px-4 py-2 flex items-center rounded cursor-pointer bg-green-500 text-white font-bold'>Install Now ({size})</button>
                            </div>
                       
                    </div>
                </div>  
                <hr className='mt-3 border-gray-400 border-sm mb-3'/>

                <div className='space-y-3'>
                    <h2 className='font-bold text-2xl mb-4'>Ratings</h2>
                    <div className='bg-base-100 border rounded-xl p-4 h-100'>
                        <ResponsiveContainer width='100%' height='100%'>

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