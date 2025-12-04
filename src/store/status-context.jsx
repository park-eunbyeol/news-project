import { createContext, useState } from "react";

export const StatusContext = createContext({
  callStatus: "top-headlines",
  handleChangeStatus: () => {},
});

export function StatusProvider({ children }) {
  const [callStatus, setCallStatus] = useState("top-headlines");

  function handleChangeStatus(status) {
    setCallStatus(status);
  }

  const value = { callStatus, handleChangeStatus };

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}
