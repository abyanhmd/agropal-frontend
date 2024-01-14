import TextForm from "@components/form/TextForm";
import { CgFolderAdd, CgFolderRemove, CgMenuBoxed } from "react-icons/cg";
import { RiPriceTag3Line } from "react-icons/ri";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to the inventory management page
    navigate("/inventory");
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
          Create Inventory Product
        </p>
        <div className="mt-4">
          <TextForm
            id="name"
            inputType="text"
            placeholder="Product Name"
            icon={CgMenuBoxed}
          />
        </div>
        <div className="mt-4">
          <TextForm
            id="pricePerItem"
            inputType="text"
            placeholder="Price Per Item"
            icon={RiPriceTag3Line}
          />
        </div>
        <div className="mt-4">
          <TextForm
            id="stock"
            inputType="number"
            placeholder="Stock Amount"
            icon={CgFolderAdd}
          />
        </div>
        <div className="mt-4">
          <TextForm
            id="sold"
            inputType="number"
            placeholder="Sold Amount"
            icon={CgFolderRemove}
          />
        </div>

        <button className="w-full py-3 mt-8 font-medium text-center duration-300 rounded-full bg-button text-buttonText hover:bg-buttonHover">
          Submit
        </button>
      </div>
    </>
  );
}

export default AddProduct;
