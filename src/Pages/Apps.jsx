import React from 'react';
import useApps from '../CustomHook/useApps';
import AppCart from '../Components/AppCart';

const Apps = () => {
    const {apps} = useApps();
    return (
        <div className='bg-gray-300'>
            <div className='w-11/12 mx-auto py-8 text-center'>
                <div className="mb-10">
                    <h2 className='font-bold mb-2 text-3xl'>Our All Apps</h2>
                    <p className='text-gray-600 mb-4'>Explore All Apps on the Market developed by us. we code for Millions.</p>
                </div>

                <div className='flex justify-between mb-3'>
                    <div>
                        <h2 className='font-bold mb-2 text-3xl'>Our All Apps</h2>
                    </div>
                    <div>
                        <label>
                            <input className='bg-white text-black p-2 rounded-lg border-none' type="search" placeholder='search Apps' />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        apps.map(data => <AppCart key={data.id} data={data}></AppCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;