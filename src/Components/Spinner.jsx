import React from 'react';

const Spinner = ({count}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {Array.from({length: count}).map((_, i) =>(
                <div key={i} className='flex flex-col gap-4'>
                    <div className='skeleton bg-gray-400 h-50 w-full p-2'></div>
                    <div className='skeleton h-4 w-40 text-center p-2'></div>
                    <div className='flex justify-between '>
                        <div className='skeleton h-10 w-10 p-2'></div>
                        <div className='skeleton h-10 w-10 p-2'></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Spinner;