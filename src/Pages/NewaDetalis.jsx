import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside/RightAside';
import NewsDetalisCard from '../components/NewsDetalisCard';
import { useLoaderData, useParams } from 'react-router';

const NewaDetalis = () => {
    const data =useLoaderData();
    const {id}=useParams();
    const [news,setNews]=useState({});

    useEffect(()=>{
        const newsdetalis=data.find(singleNews=> singleNews.id== id)
        setNews(newsdetalis)
    },[data,id])
    // console.log(data,id,news)
 
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 py-10'>
                <section className='col-span-9'>
                    <h2 className=' font-bold mb-5'>News Detalis</h2>
                    <NewsDetalisCard news={news}></NewsDetalisCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewaDetalis;