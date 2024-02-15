import { useForm, Controller } from "react-hook-form";
import { HiOutlineExclamation } from "react-icons/hi";

function Settings() {
  const { handleSubmit, control } = useForm();

  const handleSettings = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-1/2 px-4 pt-2 pb-6 mx-auto border-2 rounded-lg border-border"
      onSubmit={handleSubmit(handleSettings)}
    >
      <p className="pb-2 text-lg font-semibold border-b-2 border-sidePanel text-primary">
        Change weight measurement unit
      </p>
      <Controller
        name="unit"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <select
              {...field}
              id="unit"
              className={`w-full h-full px-8 py-4 mt-4 font-medium bg-transparent border-2 rounded-lg border-secondary ${
                field.value === undefined
                  ? "text-secondary text-md"
                  : "text-primary text-lg"
              }`}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select measurement unit
              </option>
              <option value="gram" className="py-2 text-lg text-primary">
                Gram
              </option>
              <option value="kilogram" className="py-2 text-lg text-primary">
                Kilogram
              </option>
            </select>

            {fieldState?.error && (
              <div className="flex mt-1 font-medium text-md text-warning">
                <HiOutlineExclamation className="w-4 h-4 my-auto me-2" />
                <p>{fieldState.error.message}</p>
              </div>
            )}
          </>
        )}
        rules={{
          required: "Unit is required",
          validate: (value) => value === "gram" || value === "kilogram",
        }}
      />

      <button
        type="submit"
        className="w-full py-4 mt-12 text-lg font-semibold rounded-full text-buttonText hover:bg-buttonHover bg-button font-albert"
      >
        Change Unit
      </button>
    </form>
  );
}

export default Settings;
