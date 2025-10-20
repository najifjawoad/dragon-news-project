import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header className="mt-10">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto p-3 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
