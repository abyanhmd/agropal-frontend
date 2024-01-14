import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const PageNameContext = createContext();

export const PageNameProvider = ({ children }) => {
  const [pageName, setPageName] = useState("Dashboard");

  const changePageName = (newPageName) => {
    setPageName(newPageName);
  };

  return (
    <PageNameContext.Provider value={{ pageName, changePageName }}>
      {children}
    </PageNameContext.Provider>
  );
};

PageNameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
