import { createContext, useState } from "react";

export const NewsContext = createContext({
  news: [],
  fetchNews: () => {},
});

// named export
export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  async function fetchNews(callStatus, query) {
    const key = import.meta.env.VITE_NEWS_API_KEY;
    const country = "us";
    let api_url = `https://newsapi.org/v2/${callStatus}`;

    if (callStatus === "top-headlines") {
      api_url += `?country=${country}&apiKey=${key}`;
    } else {
      api_url += `?q=${query}&sortBy=popularity&apiKey=${key}`;
    }

    const response = await fetch(api_url);

    const data = await response.json();
    console.log(data);
    setNews(data.articles);
  }

  const value = { news, fetchNews };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
