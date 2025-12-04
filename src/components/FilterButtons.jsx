import { useContext } from "react";
import FilterButton from "./FilterButton";
import { StatusContext } from "../store/status-context";
export default function FilterButtons({}) {
  const { callStatus, handleChangeStatus } = useContext(StatusContext);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <FilterButton
        active={callStatus === "top-headlines"}
        label={"최신뉴스"}
        onChange={() => handleChangeStatus("top-headlines")}
      />
      <FilterButton
        active={callStatus === "everything"}
        label={"뉴스검색"}
        onChange={() => handleChangeStatus("everything")}
      />
    </div>
  );
}
