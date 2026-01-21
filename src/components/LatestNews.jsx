import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3 mt-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-8 items-center' pauseOnHover={true} speed={50}>
            <p className='font-bold'>
                Breaking News: React 18 Released! | New Features in JavaScript ES2023 | Web Development Trends 2024
            </p>
            <p className='font-bold'>
                Breaking News: React 18 Released! | New Features in JavaScript ES2023 | Web Development Trends 2024
            </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;