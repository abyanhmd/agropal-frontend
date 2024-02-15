import authenticationBackground from "@assets/authBackground.png";
import { Link } from "react-router-dom";

function ForgetPasswordConfirmation() {
  return (
    <section className="grid w-full h-full grid-cols-2 bg-background">
      {/*Left Grid (Form) */}
      <div className="inline w-1/2 m-auto h-fit">
        <p className="mb-6 text-4xl font-bold w-fit font-albert text-primary">
          Forget Password
        </p>
        <p className="mb-6 text-lg font-medium text-secondary">
          An email has been sent with instructions to reset your password.
          Please check your inbox.
        </p>
        <Link to="/login">
          <button className="w-full py-4 mt-24 text-lg font-semibold duration-150 ease-in-out rounded-full text-buttonText bg-button font-albert hover:bg-buttonHover">
            Back to login
          </button>
        </Link>
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

export default ForgetPasswordConfirmation;
