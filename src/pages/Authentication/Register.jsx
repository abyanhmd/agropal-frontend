import authenticationBackground from "../../assets/authBackground.png";
import TextForm from "../../components/form/TextForm.jsx";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import PasswordForm from "../../components/form/PasswordForm.jsx";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { HiOutlineExclamation } from "react-icons/hi";

function Register() {
  const {
    handleSubmit,
    control,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const password = watch("password");

  const handleRegister = async (data) => {
    try {
      data.gender = data.gender || "";
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="grid grid-cols-2 bg-background">
        <form
          className="inline w-1/2 m-auto h-fit"
          onSubmit={handleSubmit(handleRegister)}
        >
          <h1 className="mb-6 text-4xl font-bold w-fit font-albert text-primary">
            Create new account
          </h1>
          <div className="flex align-middle w-fit">
            <p className="text-lg font-medium text-secondary me-3">
              Already A Member?
            </p>
            <a href="/login" className="text-lg font-medium text-accent">
              Log in
            </a>
          </div>

          <div className="mt-6">
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

          <div className="mt-6">
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

          <div className="mt-6">
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

          <div className="mt-6">
            <Controller
              name="retype_password"
              control={control}
              render={({ field }) => (
                <PasswordForm
                  id="confirm_password"
                  formName="Confirm Password"
                  {...field}
                  error={errors.retype_password?.message}
                  onFocus={() => clearErrors("error")}
                />
              )}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Password do not match",
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 align-middle">
            <div className="col-span-2">
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

            <div className="col-span-1 text-primary">
              <Controller
                name="gender"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <select
                      {...field}
                      id="gender"
                      className={`w-full h-[64px] px-8 py-4 font-medium bg-transparent border-2 rounded-lg border-secondary ${
                        field.value === undefined
                          ? "text-secondary text-md"
                          : "text-primary text-lg"
                      }`}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Gender
                      </option>
                      <option
                        value="male"
                        className="py-2 text-lg text-primary"
                      >
                        Male
                      </option>
                      <option value="female" className="text-lg text-primary">
                        Female
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
                  required: "Gender is required",
                  validate: (value) => value === "male" || value === "female",
                }}
              />
            </div>
          </div>

          <button
            className="w-full py-4 mt-24 text-lg font-semibold duration-200 transform rounded-full text-buttonText bg-button font-albert hover:bg-buttonHover"
            type="submit"
          >
            Create account
          </button>
        </form>

        <div>
          <img
            src={authenticationBackground}
            className="object-cover w-full h-screen select-none"
          />
        </div>
      </section>
    </>
  );
}

export default Register;
