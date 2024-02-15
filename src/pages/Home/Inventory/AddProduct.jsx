import TextForm from "@components/form/TextForm";
import { CgFolderAdd, CgFolderRemove, CgMenuBoxed } from "react-icons/cg";
import { RiPriceTag3Line } from "react-icons/ri";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function AddProduct() {
  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to the inventory management page
    navigate("/inventory");
  };

  const handleProduct = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <HiArrowLeft
          className="w-5 h-5 mx-5 cursor-pointer text-primary"
          onClick={handleBackClick}
        />
      </div>

      <form
        className="w-1/2 px-4 pt-2 pb-6 mx-auto border-2 rounded-lg border-border"
        onSubmit={handleSubmit(handleProduct)}
      >
        <p className="pb-2 text-lg font-semibold border-b-2 border-sidePanel text-primary">
          Create Inventory Product
        </p>
        <div className="mt-4">
          <Controller
            name="productName"
            control={control}
            render={({ field }) => (
              <TextForm
                id="name"
                inputType="text"
                formName="Product Name"
                icon={CgMenuBoxed}
                {...field}
                error={errors.productName?.message}
                onFocus={() => clearErrors("error")}
              />
            )}
            rules={{
              required: "Product Name is required",
            }}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="pricePerItem"
            control={control}
            render={({ field }) => (
              <TextForm
                id="pricePerItem"
                inputType="text"
                formName="Price Per Item"
                icon={RiPriceTag3Line}
                {...field}
                error={errors.pricePerItem?.message}
                onFocus={() => clearErrors("error")}
              />
            )}
            rules={{
              required: "Price per Item is required",
              validate: (value) => !isNaN(value) || "Enter a valid number",
            }}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="stockAmount"
            control={control}
            render={({ field }) => (
              <TextForm
                id="stock"
                inputType="number"
                formName="Stock Amount"
                icon={CgFolderAdd}
                {...field}
                error={errors.stockAmount?.message}
                onFocus={() => clearErrors("error")}
              />
            )}
            rules={{
              required: "Stock is required",
              validate: (value) => !isNaN(value) || "Enter a valid number",
            }}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="soldAmount"
            control={control}
            render={({ field }) => (
              <TextForm
                id="sold"
                inputType="number"
                formName="Sold Amount"
                icon={CgFolderRemove}
                {...field}
                error={errors.soldAmount?.message}
                onFocus={() => clearErrors("sold")}
              />
            )}
            rules={{
              required: "Sold is required",
              validate: (value) => !isNaN(value) || "Enter a valid number",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-8 font-medium text-center duration-300 rounded-full bg-button text-buttonText hover:bg-buttonHover"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddProduct;
