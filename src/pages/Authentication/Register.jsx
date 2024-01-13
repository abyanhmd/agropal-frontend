import authenticationBackground from "../../assets/authBackground.png";
import TextForm from "../../components/form/TextForm.jsx";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import PasswordForm from "../../components/form/PasswordForm.jsx";
import { useEffect } from "react";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
      <section className="grid grid-cols-2 bg-background">
        <div className="m-auto inline h-fit w-1/2">
          <h1 className="mb-6 w-fit text-4xl font-bold font-albert text-primary">
            Create new account
          </h1>
          <div className="flex w-fit align-middle">
            <p className="text-lg font-medium text-secondary me-3">
              Already A Member?
            </p>
            <a href="/login" className="text-lg font-medium text-accent">
              Log in
            </a>
          </div>

          <div className="mt-6">
            <TextForm
              id="name"
              inputType="text"
              placeholder="Name"
              icon={HiOutlineMail}
            />
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

          <div className="mt-6">
            <PasswordForm
              id="confirm_password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 align-middle">
            <div className="col-span-2">
              <TextForm
                id="phone"
                inputType="number"
                placeholder="Phone"
                icon={HiOutlinePhone}
              />
            </div>

            <div className="col-span-1 text-primary">
              <select
                id="gender"
                className="h-full w-full rounded-lg border-2 bg-transparent px-8 py-4 font-medium text-secondary border-secondary"
              >
                <option value="none" selected disabled hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <button className="mt-24 w-full rounded-full py-4 text-lg font-semibold text-buttonText bg-button font-albert">
            Create account
          </button>
        </div>

        <div>
          <img
            src={authenticationBackground}
            className="h-screen w-full select-none object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Register;
