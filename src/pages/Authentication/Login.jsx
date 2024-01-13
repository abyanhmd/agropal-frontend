import authenticationBackground from "../../assets/authBackground.png";
import TextForm from "../../components/form/TextForm.jsx";
import { HiOutlineMail } from "react-icons/hi";
import PasswordForm from "../../components/form/PasswordForm.jsx";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <section className="grid grid-cols-2 bg-background">
      {/*Left Grid (Form) */}
      <div className="m-auto inline h-fit w-1/2">
        <h1 className="mb-6 w-fit text-4xl font-bold font-albert text-primary">
          Log in
        </h1>
        <div className="flex w-fit align-middle">
          <p className="text-lg font-medium text-secondary me-3 text-secondary">
            Don&apos;t have a Member?
          </p>
          <a href="/register" className="text-lg font-medium text-accent">
            Create New Account
          </a>
        </div>
        <div className="mt-6">
          <TextForm
            id="email"
            inputType="text"
            placeholder="Email"
            icon={HiOutlineMail}
          />
        </div>

        <div className="mt-6">
          <PasswordForm id="password" placeholder="Password" />
        </div>

        <div className="mt-4 w-full text-right">
          <a href="/" className="text-lg font-medium text-secondary">
            Forget Password?
          </a>
        </div>

        <button className="mt-24 w-full rounded-full py-4 text-lg font-semibold text-buttonText bg-button font-albert">
          Log in
        </button>
      </div>

      {/* Right Grid (Image) */}
      <div>
        <img
          src={authenticationBackground}
          className="h-screen w-full select-none object-cover"
        />
      </div>
    </section>
  );
}

export default Login;
