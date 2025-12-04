import { useContext } from "react";
import FilterButtons from "./Filterbuttons";
import SearchForm from "./SearchForm";
import { StatusContext } from "../store/status-context";
export default function MainHeader({ handleSearch, inputRef }) {
  const { callStatus } = useContext(StatusContext);
  return (
    <header className="flex flex-col gap-6 text-center sm:text-left">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          글로벌 뉴스
        </h1>
        <p className="mx-auto max-w-3xl text-slate-600 sm:mx-0">
          전세계 다양한 소식을 보여줍니다
        </p>
      </div>
      <FilterButtons />
      {callStatus === "everything" && (
        <SearchForm onSearch={handleSearch} inputRef={inputRef} />
      )}
    </header>
  );
}
