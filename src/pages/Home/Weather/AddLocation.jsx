import TextForm from "@components/form/TextForm";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function AddLocation() {
  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to the inventory management page
    navigate("/weather");
  };

  const handleLocation = async (location) => {
    try {
      console.log(location);
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
        onSubmit={handleSubmit(handleLocation)}
      >
        <p className="pb-2 text-lg font-semibold border-b-2 border-sidePanel text-primary">
          Add Location
        </p>
        <div className="mt-4">
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextForm
                id="location"
                inputType="text"
                formName="Location"
                icon={HiOutlineLocationMarker}
                {...field}
                error={errors.location?.message}
                onFocus={() => clearErrors("location")}
              />
            )}
            rules={{
              required: "Location is required",
              minLength: {
                value: 5,
                message: "Location is not valid",
              },
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

export default AddLocation;
