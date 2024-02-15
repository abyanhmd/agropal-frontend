import TextForm from "@components/form/TextForm";
import PasswordForm from "@components/form/PasswordForm";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";

function Account() {
  const {
    handleSubmit,
    control,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();

  const handleAccount = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const password = watch("password");

  return (
    <form
      className="w-1/2 px-4 pt-2 pb-6 mx-auto border-2 rounded-lg border-border"
      onSubmit={handleSubmit(handleAccount)}
    >
      <p className="pb-2 text-lg font-semibold border-b-2 border-sidePanel text-primary">
        Edit Profile
      </p>
      <div className="mt-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextForm
              id="name"
              inputType="text"
              formName="Name"
              icon={FaRegUser}
              {...field}
              error={errors.name?.message}
              onFocus={() => clearErrors("error")}
            />
          )}
          rules={{
            required: "Name is required",
          }}
        />
      </div>
      <div className="mt-4">
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
      </div>
      <div className="mt-4">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextForm
              id="phone"
              inputType="number"
              formName="Phone"
              icon={HiOutlinePhone}
              {...field}
              error={errors.phone?.message}
              onFocus={() => clearErrors("error")}
            />
          )}
          rules={{
            required: "Phone Number is required",
            minLength: {
              value: 8,
              message: "Phone Number must be at least 8 characters",
            },
          }}
        />
      </div>

      <div className="mt-4">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordForm
              id="password"
              formName="Password"
              {...field}
              error={errors.password?.message}
              onFocus={() => clearErrors("error")}
            />
          )}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
        />
      </div>

      <div className="mt-4">
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <PasswordForm
              id="confirm_password"
              formName="Confirm Password"
              {...field}
              error={errors.confirmPassword?.message}
              onFocus={() => clearErrors("error")}
            />
          )}
          rules={{
            required: "Confirm Password is required",
            validate: (value) => value === password || "Password do not match",
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 mt-12 text-lg font-semibold duration-200 rounded-full text-buttonText hover:bg-buttonHover bg-button font-albert"
      >
        Change Account Information
      </button>
    </form>
  );
}

export default Account;
