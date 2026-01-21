import React from 'react';

import swimingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playGraundImg from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className=' space-y-5 justify-center items-center flex flex-col'>
                <img src={swimingImg} alt="swimming" />
                <img src={classImg} alt="class" />
                <img src={playGraundImg} alt="playground" />
            </div>
        </div>
    );
};

export default Qzone;