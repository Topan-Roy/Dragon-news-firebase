import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
const NewsDetalisCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5'>
            <img className='w-full h-[400px] object-cover' src={news.image_url} alt="" />
           <h2 className='text-2xl'>{news.title}</h2>
           <p className='text-gray-600'>{news.details}</p>
           <Link className='btn btn-secondary' to={`/catagori/${news.category_id}`}><FaArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetalisCard;