import useLocalStorage from "use-local-storage";
import PropTypes from "prop-types";
import { createContext } from "react";

export const PageNameContext = createContext();

export const PageNameProvider = ({ children }) => {
  const [pageName, setPageName] = useLocalStorage("pageName", "");

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
