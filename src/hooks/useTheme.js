import useLocalStorage from "use-local-storage";
import { useEffect, useMemo } from "react";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (!theme) {
      const defaultDark = window.matchMedia("(data-theme: 'dark')").matches;
      setTheme(defaultDark ? "dark" : "light");
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, setTheme]);

  const switchTheme = useMemo(
    () => () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    },
    [theme, setTheme],
  );

  return { theme, switchTheme };
};

export default useTheme;
