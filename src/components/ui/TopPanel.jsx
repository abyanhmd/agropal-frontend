import PropTypes from "prop-types";
import { HiOutlineBell, HiOutlineSun } from "react-icons/hi";
import useTheme from "../../hooks/useTheme.js";

function TopPanel(props) {
  const { switchTheme } = useTheme();

  return (
    <>
      <div
        className={`w-full flex flex-row justify-between pt-4 px-8 text-primary`}
      >
        <h1 className="text-lg font-medium font-albert">{props.page}</h1>
        <div className="flex">
          <HiOutlineBell className="w-6 h-6 mx-4 my-auto" />
          <HiOutlineSun
            className="w-6 h-6 mx-4 my-auto cursor-pointer"
            onClick={switchTheme}
          />
        </div>
      </div>
      <div className="my-4 border-2 border-b border-sidePanel"></div>
    </>
  );
}

TopPanel.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TopPanel;
