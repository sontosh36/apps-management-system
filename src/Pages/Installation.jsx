import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Installation = () => {
    const [apps, setApps] = useState([]);
    const [sortOrder, sortSetOrder] = useState('none');
    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem('installedApps')) || [];
        setApps(installed);
    }, []);

    const handleRemove = id => {
        const updated = apps.filter(a => a.id !== id);
        localStorage.setItem('installedApps', JSON.stringify(updated));
        setApps(updated);
        toast.warning(`${apps.title} App Uninstall Successful!`);
    }
    const handleSorting = (type) => {
        sortSetOrder(type);
        let sortedApp = [...apps];
        if (type === 'acd-down') {
            sortedApp.sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads));
        }else if (type === 'dcd-down') {
            sortedApp.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads))
        }else{
            sortedApp = JSON.parse(localStorage.getItem('installedApps')) || [];
        }
        setApps(sortedApp);
    }
    return (
        <div className='bg-gray-300'>
            <div className='w-11/12 mx-auto py-8 text-center'>
                <div className="mb-10">
                    <h2 className='font-bold mb-2 text-3xl'>Your Installed Apps</h2>
                    <p className='text-gray-600 mb-4'>Explore All Apps on the Market developed by us. we code for Millions.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between space-y-3 mb-3'>
                    <div>
                        <h2 className='font-bold mb-2 text-3xl'><span className='text-md'>({apps.length})</span> Apps Found </h2>
                    </div>
                    
                    <label className='form-control btn border-none outline rounded-md'>
                         <select className='select select-bordered' value={sortOrder} onChange={(e) => handleSorting(e.target.value)}>
                            <option className='text-xs text-center' value='none'>Sort by Download</option>
                            <option className='text-xs text-center' value='acd-down'>Low-&gt;High</option>
                            <option className='text-xs text-center' value='dcd-down'>High-&gt;Low</option>
                        </select>
                    </label>
                    
                </div>
                <hr className='border-gray-400 mb-2'/>
                    {
                        apps.length === 0 && <p>No Installed apps yet</p>
                    }
                    {apps.map((app) => 
                        <div key={app.id} className='flex items-center justify-between gap-2 rounded-md space-y-3 bg-gray-200 p-2 mb-3'>
                            <div className='flex rounded-md items-center gap-2'>
                                <img className='w-20 h-20 rounded' src={app.image} alt={app.title} />
                                <div className='text-left'>
                                    <h2 className='text-md font-semibold mb-2'>{app.title}</h2>
                                    <div className='flex items-center gap-3'>
                                        <p className='flex gap-1 items-center text-xs text-green-700'>
                                            <FaDownload/>
                                            {app.downloads}</p>
                                        <p className='flex gap-1 text-xs text-blue-700'>
                                            <FaStar/>
                                            {app.ratingAvg}</p>
                                        <p className='text-xs text-gray-500'>{app.size}</p>
                                    </div>
                                </div>
                            </div>

                            <button onClick={()=> handleRemove(app.id)} className='bg-green-700 px-2 py-2 rounded-md text-md cursor-pointer text-white'>Uninstall</button>
                         </div>
                    )}
            </div>
        </div>
    );
};

export default Installation;