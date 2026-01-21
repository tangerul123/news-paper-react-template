import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div className=" ">
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 join-item justify-start "> <FaFacebook size={18}></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 join-item justify-start "> <FaTwitter size={18}></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100 join-item justify-start "> <FaInstagram size={18}></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;