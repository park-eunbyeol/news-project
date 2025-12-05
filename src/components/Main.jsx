import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../store/status-context";
import NewsCard from "./NewCard/NewCard";
import { NewsContext } from "../store/news-context";

export default function Main({ query }) {
  const { callStatus } = useContext(StatusContext);
  const { newsState, fetchNews } = useContext(NewsContext);
  // const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews(callStatus, query);
  }, [callStatus, query]);

  // async function fetchNews() {
  //   const key = import.meta.env.VITE_NEWS_API_KEY;
  //   const country = "us";
  //   let api_url = `https://newsapi.org/v2/${callStatus}`;

  //   if (callStatus === "top-headlines") {
  //     api_url += `?country=${country}&apiKey=${key}`;
  //   } else {
  //     api_url += `?q=${query}&sortBy=popularity&apiKey=${key}`;
  //   }

  //   const response = await fetch(api_url);

  //   response.json().then((data) => {
  //     console.log(data);
  //     setNews(data.articles);
  //   });
  //   // console.log(data.articles);
  // }
  return (
    <main className="mt-12 flex-1">
      <section className="grid gap-6 xl:grid-cols-3 sm:grid-cols-2">
        {newsState.isLoading && <div>로딩중입니다...</div>}
        {newsState.error && <div>에러:{newsState.error}</div>}
        {newsState.news.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </section>
    </main>
  );
}
