import authenticationBackground from "@assets/authBackground.png";
import { HiOutlineMail } from "react-icons/hi";
import TextForm from "@components/form/TextForm.jsx";
import PasswordForm from "@components/form/PasswordForm.jsx";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <section className="grid grid-cols-2 bg-background">
      {/*Left Grid (Form) */}
      <div className="inline w-1/2 m-auto h-fit">
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

        <div className="w-full mt-4 text-right">
          <a href="/" className="text-lg font-medium text-secondary">
            Forget Password?
          </a>
        </div>

        <button className="w-full py-4 mt-24 text-lg font-semibold rounded-full text-buttonText bg-button font-albert">
          Log in
        </button>
      </div>

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
