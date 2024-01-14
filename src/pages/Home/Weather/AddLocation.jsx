import TextForm from "@components/form/TextForm";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AddLocation() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to the inventory management page
    navigate("/weather");
  };

  return (
    <>
      <div>
        <HiArrowLeft
          className="w-5 h-5 mx-5 cursor-pointer text-primary"
          onClick={handleBackClick}
        />
      </div>

      <div className="w-1/2 px-4 pt-2 pb-6 mx-auto border-2 rounded-lg border-border">
        <p className="pb-2 text-lg font-semibold border-b-2 border-sidePanel text-primary">
          Add Location
        </p>
        <div className="mt-4">
          <TextForm
            id="location"
            inputType="text"
            placeholder="Location"
            icon={HiOutlineLocationMarker}
          />
        </div>

        <button className="w-full py-3 mt-8 font-medium text-center duration-300 rounded-full bg-button text-buttonText hover:bg-buttonHover">
          Submit
        </button>
      </div>
    </>
  );
}

export default AddLocation;
