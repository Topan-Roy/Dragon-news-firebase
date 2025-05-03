import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router';
const NewsCArd = ({news}) => {
    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
        id,
        // tags,
      } = news;
    
      const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");
    return (
        <div className="card bg-base-100 shadow-md mb-6 ">
      <div className="flex items-center bg-base-200 justify-between px-4 pt-4 mb-5">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="dropdown dropdown-end flex gap-3">
        <CiBookmark size={24}/> <CiShare2  size={24}/>
        </div>
      </div>
      <div className="">
      <h2 className="card-title font-bold text-accent mb-3 px-3">{title}</h2>
      </div>
      <figure>
     
        <img src={thumbnail_url} alt={title} className="w-full max-h-[300px] object-cover rounded" />
      </figure>

      <div className="card-body">
       
      <div className="px-4 text-gray-700">
            {details.length > 200 ? (
            <>
            {details.slice(0, 200)}...
            <Link to={`/news-detales/${id}`} className="text-[#FF8C47] font-semibold
            cursor-pointer hover:underline">
            Read More
            </Link>
            </>
            ):(
            details
            )}
            </div>
        {/* <div className="text-primary font-medium mt-2">
          {tags.map(tag => (
            <span key={tag} className="mr-2 badge badge-outline">{tag}</span>
          ))}
        </div> */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-orange-500 font-semibold">
            {/* <FaStar /> <FaStar /> <FaStar /> <FaStar /> */}
            {Array.from({ length: rating.number }).map((_, i) => (
                <FaStar key={i} />
                ))}
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewsCArd;
