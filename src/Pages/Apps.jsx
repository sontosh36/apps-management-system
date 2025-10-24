import React, { useState } from 'react';
import useApps from '../CustomHook/useApps';
import AppCart from '../Components/AppCart';
import { BiSolidError } from 'react-icons/bi';
import { Link } from 'react-router';

const Apps = () => {
    const {apps} = useApps();
    const [search, setSearch] = useState('');

     const trimWord = search.trim().toLocaleLowerCase();

     const searchApps = trimWord ? apps.filter(app => app.title.toLocaleLowerCase().includes(trimWord)) : apps;
    return (
        <div className='bg-gray-300'>
            <div className='w-11/12 mx-auto py-8 text-center'>
                <div className="mb-10">
                    <h2 className='font-bold mb-2 text-3xl'>Our All Apps</h2>
                    <p className='text-gray-600 mb-4'>Explore All Apps on the Market developed by us. we code for Millions.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between mb-3 '>
                    <div>
                        <h2 className='font-bold mb-2 text-3xl'><span className='text-md'>({searchApps.length})</span> Apps Found </h2>
                    </div>
                    <div>
                        <label className='input'>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-white text-black p-2 rounded-md border-none' type="search" placeholder='Search Apps' />
                        </label>
                    </div>
                </div>
                {
                    searchApps.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        searchApps.map(data => <AppCart key={data.id} data={data}></AppCart>)
                    }
                </div>
                ) : <div className='flex flex-col justify-center items-center space-y-4'>
                    <BiSolidError className='text-red-600 ' size={50}/>
                    <p className='text-3xl text-gray-800 font-bold'>App Not Found</p>
                    <Link to='/apps' className='bg-indigo-900 text-md font-bold px-3 py-3 rounded-md text-white'>Show All Apps</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Apps;