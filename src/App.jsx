import { useEffect, useRef, useState } from "react";
import FilterButton from "./components/FilterButton";
import NewsCard from "./components/NewCard/NewCard";
import { mockNewsData } from "./mock_data";
import SearchForm from "./components/SearchForm";
import MainHeader from "./components/MainHeader";
import { StatusProvider } from "./store/status-context";
import Main from "./components/Main";
function App() {
  const [query, setQuery] = useState("삼성");

  const inputRef = useRef();

  function handleSearch(e) {
    // 기본 이벤트를 발생X
    e.preventDefault();

    setQuery(inputRef.current.value);
  }

  return (
    <StatusProvider>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
        <MainHeader handleSearch={handleSearch} inputRef={inputRef} />
        <Main query={query} />
      </div>
    </StatusProvider>
  );
}

export default App;
