import React from 'react';
import swimming from '../../assets/swimming.png';
import classimage from "../../assets/class.png";
import playimage from "../../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className="space-y-5">
                <img src={swimming} alt="" />
                <img src={classimage} alt="" />
                <img src={playimage} alt="" />
         
            </div>
        </div>
    );
};

export default Qzone;