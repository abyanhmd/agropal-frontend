import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Pagination() {
  return (
    <div className="flex">
      <div className="flex">
        <HiOutlineChevronLeft className="w-4 h-4 my-auto me-2" />
        <p className="text-lg font-medium">Previous</p>
      </div>

      <div className="mx-4 my-auto text-lg font-medium">1</div>

      <div className="flex">
        <p className="text-lg font-medium me-2">Next</p>
        <HiOutlineChevronRight className="w-4 h-4 my-auto me" />
      </div>
    </div>
  );
}

export default Pagination;
