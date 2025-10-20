import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCart = ({data}) => {
    // console.log(data)
    const {image, title, ratingAvg, downloads} =data;
    return (
        <div>
            <div className='flex flex-col justify-center hover:scale-110 duration-500 cursor-pointer shadow-sm rounded-lg p-4 bg-white border border-gray-200'>
                <img className='rounded-lg mb-3' src={image} alt="" />
                <h3 className='font-semibold mb-2'>{title}</h3>
                <div className='flex justify-between '>
                    <div className='bg-gray-400 px-2 text-green-800 rounded-lg'>
                        <p className='flex items-center gap-1'>
                            <FaDownload/>
                            {downloads}
                        </p>
                    </div>
                    <div className='bg-gray-400 text-indigo-900 px-2 rounded-lg'>
                         <p className='flex items-center gap-1'>
                            <FaStar/>
                            {ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCart;