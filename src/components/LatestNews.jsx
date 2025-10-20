import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({datas}) => {

  console.log(datas);

   const breakingNews= datas.filter(data=> data.others.is_today_pick == true);
   console.log(breakingNews);
   


  
  return (

    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5 " pauseOnHover={true} speed={60}>
       {
        breakingNews.map(news=> <p className="font-bold ml-5">
          {news.title}
        </p> )
       }
      </Marquee>
    </div>
  );
};

export default LatestNews;
