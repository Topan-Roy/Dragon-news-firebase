import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCArd from '../components/NewsCArd';

const CatagoriNews = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [categoryNews,setcategoryNews]=useState([]);
    // console.log(id,data)
    useEffect(()=>{
        if(id=='0'){
            setcategoryNews(data);
            return;
        }
        else if(id=='1'){
            const filterNews= data.filter(
                (news)=>news.others.is_today_pick==true);
                setcategoryNews(filterNews)
        }
        else{
            const filterNews= data.filter((news)=>news.category_id==id);
        setcategoryNews(filterNews)
        // console.log(filterNews)
        }
        
    },[data,id])
    return (
        <div>
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h2>

            <div className="grid grid-cols-1 gap-5">
                {
                    categoryNews.map(news=><NewsCArd key={news.id} news={news}></NewsCArd>)
                }
            </div>
        </div>
    );
};

export default CatagoriNews;