import authenticationBackground from "@assets/authBackground.png";
import { HiOutlineMail } from "react-icons/hi";
import TextForm from "@components/form/TextForm.jsx";
import PasswordForm from "@components/form/PasswordForm.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleLogin = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid grid-cols-2 bg-background">
      {/*Left Grid (Form) */}
      <form
        className="inline w-1/2 m-auto h-fit"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="mb-6 text-4xl font-bold w-fit font-albert text-primary">
          Log in
        </h1>
        <div className="flex align-middle w-fit">
          <p className="text-lg font-medium text-secondary me-3">
            Don&apos;t have a Member?
          </p>
          <a href="/register" className="text-lg font-medium text-accent">
            Create New Account
          </a>
        </div>
        <div className="h-full mt-6">
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
                onFocus={() => clearErrors("password")}
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

        <div className="w-full mt-4 text-right">
          <Link
            to="/forget-password"
            className="text-lg font-medium text-secondary"
          >
            Forget Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-4 mt-24 text-lg font-semibold duration-200 transform rounded-full text-buttonText bg-button font-albert hover:bg-buttonHover"
        >
          Log in
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

export default Login;
