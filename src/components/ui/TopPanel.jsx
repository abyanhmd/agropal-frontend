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
        <h1 className=" font-medium font-albert text-lg">{props.page}</h1>
        <div className="flex">
          <HiOutlineBell className="my-auto mx-4 w-6 h-6" />
          <HiOutlineSun
            className="my-auto mx-4 w-6 h-6 cursor-pointer"
            onClick={switchTheme}
          />
        </div>
      </div>
      <div className="border-b border-2 my-4 border-sidePanel"></div>
    </>
  );
}

TopPanel.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TopPanel;
