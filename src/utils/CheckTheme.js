const checkTheme = () => {
  const dataTheme = document.documentElement.getAttribute("data-theme");
  return dataTheme === "dark" ? "dark" : "light";
};

export default checkTheme;
