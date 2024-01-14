import SidePanel from "../../components/ui/SidePanel.jsx";
import { Outlet } from "react-router-dom";
import TopPanel from "../../components/ui/TopPanel.jsx";
// import { useState } from "react";
import { usePageName } from "../../hooks/usePageName.jsx";

function Home() {
  const { pageName, changePageName } = usePageName();

  const handleItemClick = (item) => {
    changePageName(item);
  };

  // const [pageName, setPageName] = useState("Dashboard");

  // const handleItemClick = (item) => {
  //   setPageName(item);
  // };

  return (
    <section className="flex w-full min-h-full bg-background">
      <SidePanel
        pageName={pageName}
        username="Elon Musk"
        onItemClick={handleItemClick}
      />
      <div className="block ps-[320px] w-full min-h-full">
        <TopPanel page={pageName} />
        {/* Renders the content based on the endpoint */}
        <Outlet />
      </div>
    </section>
  );
}

export default Home;
