import { useContext } from "react";
import { PageNameContext } from "./PageNameProvider";

export const usePageName = () => {
  const context = useContext(PageNameContext);
  if (!context) {
    throw new Error("usePageName must be used within a PageNameProvider");
  }
  return context;
};
