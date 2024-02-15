import authenticationBackground from "@assets/authBackground.png";
import TextForm from "@components/form/TextForm";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function ForgetPassword() {
  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to the inventory management page
    navigate("/login");
  };

  const handleForgetPassword = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid w-full h-full grid-cols-2 bg-background">
      {/*Left Grid (Form) */}
      <div className="absolute m-14">
        <HiArrowLeft
          className="w-5 h-5 cursor-pointer text-primary"
          onClick={handleBackClick}
        />
      </div>

      <form
        className="inline w-1/2 m-auto h-fit"
        onSubmit={handleSubmit(handleForgetPassword)}
      >
        <p className="mb-6 text-4xl font-bold w-fit font-albert text-primary">
          Forget Password
        </p>
        <p className="mb-6 text-lg font-medium text-secondary">
          Enter your email to change password
        </p>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextForm
              id="email"
              inputType="text"
              formName="Email"
              icon={HiOutlineMail}
              {...field}
              error={errors.email?.message}
              onFocus={() => clearErrors("error")}
            />
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}
        />

        <button
          type="submit"
          className="w-full py-4 mt-24 text-lg font-semibold duration-200 transform rounded-full text-buttonText bg-button font-albert hover:bg-buttonHover"
        >
          Submit
        </button>
      </form>

      {/* Right Grid (Image) */}
      <div>
        <img
          src={authenticationBackground}
          className="object-cover w-full h-screen select-none"
        />
      </div>
    </section>
  );
}

export default ForgetPassword;
