import PropTypes from "prop-types";
import {
  HiOutlineFilter,
  HiOutlinePlus,
  HiOutlineSearch,
  HiOutlineSortDescending,
  HiOutlineViewGrid,
  HiOutlineViewList,
} from "react-icons/hi";

function TopMenuInventory(props) {
  const handleItemClick = (viewType) => {
    props.setViewType(viewType);
  };

  return (
    <section className="flex flex-row justify-between pb-4 mx-[28px] font-medium">
      <div className="flex w-1/2">
        <div className="flex p-1 border-2 rounded-lg w-fit border-primary me-4">
          <div
            className={`flex px-3 py-1 align-middle rounded-md  ${
              props.viewType === "ListView"
                ? "bg-button text-buttonText"
                : "bg-transparent cursor-pointer text-secondary"
            } w-fit me-1`}
            onClick={() => handleItemClick("ListView")}
          >
            <HiOutlineViewList className="w-5 h-5 m-auto me-2" />
            <p className="text-medium text-md">List</p>
          </div>
          <div
            className={`flex px-3 py-1 align-middle ${
              props.viewType === "GridView"
                ? "bg-button text-buttonText"
                : "bg-transparent cursor-pointer text-secondary"
            } rounded-md w-fit`}
            onClick={() => handleItemClick("GridView")}
          >
            <HiOutlineViewGrid className="w-5 h-5 m-auto me-2" />
            <p className="text-medium text-md">Grid</p>
          </div>
        </div>

        <div className="flex px-3 border-2 rounded-lg w-fit border-primary me-4">
          <HiOutlineFilter className="w-5 h-5 m-auto me-2 text-primary" />
          <p className="m-auto text-medium text-primary text-md">Filter</p>
        </div>

        <div className="flex px-3 border-2 rounded-lg w-fit border-primary me-4">
          <HiOutlineSortDescending className="w-5 h-5 m-auto me-2 text-primary" />
          <p className="m-auto text-medium text-primary text-md">Sort</p>
        </div>

        <div className="relative flex justify-start w-2/3 rounded-lg text-primary">
          <HiOutlineSearch className="absolute inset-y-0 my-auto w-5 h-5 ms-3.5 pointer-events-none" />
          {/* <p className="my-auto text-medium text-primary text-md">Search</p> */}
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-2 rounded-lg border-primary ps-12 "
          />
        </div>
      </div>

      <div className="right-0 flex px-6 rounded-lg bg-button text-buttonText">
        <HiOutlinePlus className="my-auto me-3" />
        <p className="my-auto">Add Item</p>
      </div>
    </section>
  );
}

TopMenuInventory.propTypes = {
  viewType: PropTypes.string.isRequired,
  setViewType: PropTypes.func.isRequired,
};

export default TopMenuInventory;
