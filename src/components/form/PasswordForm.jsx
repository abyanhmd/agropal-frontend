import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${isFocused ? "focused" : ""}`}>
      <input
        id={props.id}
        value={password}
        type={visible ? "text" : "password"}
        placeholder=" "
        className={`px-[28px] bg-transparent py-4 text-lg rounded-lg w-full font-medium text-primary border-2 border-secondary transform ${
          isFocused ? "pt-6 pb-2" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label
        htmlFor={props.id}
        className={`absolute inset-y-0 left-0 m-auto w-fit h-fit text-secondary ms-[30px] font-medium duration-300 transform ${
          isFocused
            ? "-translate-y-3 text-secondary text-sm bg-transparent"
            : ""
        }`}
      >
        {props.placeholder}
      </label>

      <div
        onClick={() => setVisible(!visible)}
        className="absolute w-6 h-6 text-grayText inset-y-0 m-auto right-0 me-6 cursor-pointer"
      >
        {setPasswordIcon(visible)}
      </div>
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
  placeholder: PropTypes.string.isRequired,
};

export default PasswordInput;
