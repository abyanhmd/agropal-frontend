import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineExclamation } from "react-icons/hi";

function PasswordInput(props) {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(e.target.value !== "");
  };

  return (
    <div className={`relative ${isFocused || props.value ? "focused" : ""}`}>
      <input
        id={props.id}
        value={props.value || ""}
        type={visible ? "text" : "password"}
        placeholder=" "
        className={`px-[28px] bg-transparent py-4 text-lg rounded-lg w-full font-medium text-primary border-2 border-secondary transform ${
          isFocused ? "pt-6 pb-2" : ""
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      <label
        htmlFor={props.id}
        className={`absolute left-0 text-secondary ms-[30px] font-medium duration-300 transform ${
          isFocused || props.value
            ? "translate-y-2 text-secondary text-sm bg-transparent"
            : "translate-y-5"
        }`}
      >
        {props.formName}
      </label>

      <div
        onClick={() => setVisible(!visible)}
        className="absolute right-0 w-6 h-6 cursor-pointer inset-y-5 text-grayText me-6"
      >
        {setPasswordIcon(visible)}
      </div>

      {props.error && (
        <div className="flex mt-1 font-medium text-md text-warning">
          <HiOutlineExclamation className="w-4 h-4 my-auto me-2" />
          <p>{props.error}</p>
        </div>
      )}
    </div>
  );
}

function setPasswordIcon(visible) {
  if (visible) {
    return <HiOutlineEyeOff className="w-full h-full text-secondary" />;
  } else {
    return <HiOutlineEye className="w-full h-full text-secondary" />;
  }
}

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default PasswordInput;
