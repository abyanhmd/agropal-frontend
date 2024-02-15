import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import agropalLogo from "../../assets/logo.svg";

import {
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineUserCircle,
} from "react-icons/hi";

function PanelItem({ isSelected, label, icon, onClick, to }) {
  return (
    <Link
      className={`${
        isSelected
          ? "bg-button text-buttonText rounded-md"
          : "bg-transparent hover:rounded-md hover:bg-sidePanelHover text-primary"
      } flex py-2 m-4 cursor-pointer`}
      onClick={onClick}
      to={to}
    >
      <div className="my-auto">{icon}</div>
      <h1 className="my-auto text-base font-medium font-albert">{label}</h1>
    </Link>
  );
}

PanelItem.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

function SidePanel({ pageName, username, onItemClick }) {
  const panelItems = [
    {
      icon: <HiOutlineHome className="w-6 h-6 mx-4" />,
      label: "Dashboard",
      route: "/",
    },
    {
      icon: <HiOutlineCube className="w-6 h-6 mx-4" />,
      label: "Inventory Management",
      route: "/inventory",
    },
    {
      icon: <HiOutlineCurrencyDollar className="w-6 h-6 mx-4" />,
      label: "Financial Analytics",
      route: "/financial",
    },
    {
      icon: <HiOutlineCloud className="w-6 h-6 mx-4" />,
      label: "Weather",
      route: "/weather",
    },
  ];

  const bottomItems = [
    {
      label: "Settings",
      icon: <HiOutlineCog className="w-6 h-6 mx-4" />,
      route: "/settings",
    },
    {
      label: username,
      icon: <HiOutlineUserCircle className="w-6 h-6 mx-4" />,
      route: "/account",
    },
  ];

  return (
    <div className="fixed h-full overflow-y-auto">
      <div
        className="relative flex flex-col justify-between h-screen bg-sidePanel justify-items-center"
        style={{ width: "320px", minHeight: "100%" }}
      >
        <div>
          <div className="flex py-2 m-4">
            <img src={agropalLogo} alt="" className="m-4 h-14 w-14" />
            <h1 className="my-auto text-2xl font-bold text-primary">AgroPal</h1>
          </div>

          {panelItems.map((item, index) => (
            <PanelItem
              key={index}
              isSelected={item.label === pageName}
              label={item.label}
              icon={item.icon}
              onClick={() => onItemClick(item.label)}
              to={item.route}
            />
          ))}
        </div>

        <div className="bottom-0 inline w-auto">
          {bottomItems.map((item, index) => (
            <PanelItem
              key={index}
              isSelected={item.label === pageName}
              label={item.label}
              icon={item.icon}
              onClick={() => onItemClick(item.label)}
              to={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SidePanel.propTypes = {
  pageName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SidePanel;
