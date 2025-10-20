import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

   
    return (
        <div className='space-y-5 p-5 border border-base-200 rounded-2xl'>
            <img className='w-full h-[350px] object-cover rounded-2xl' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold'>{news.title}</h2>

            <p className='text-accent'>{news.details}</p>

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;