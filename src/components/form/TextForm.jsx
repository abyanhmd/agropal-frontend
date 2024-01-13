import { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${isFocused ? "focused" : ""}`}>
      <input
        id={props.id}
        type={props.inputType}
        placeholder=" "
        className={`px-[28px] bg-transparent py-4 text-lg rounded-lg w-full font-medium text-primary border-2 border-secondary transform ${
          isFocused ? "pt-6 pb-2" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
      />
      <label
        htmlFor={props.id}
        className={`absolute inset-y-0 left-0 m-auto w-fit h-fit text-md text-secondary ms-[30px] font-medium duration-300 transform ${
          isFocused
            ? "-translate-y-3 text-secondary text-sm bg-transparent"
            : ""
        }`}
      >
        {props.placeholder}
      </label>

      <props.icon
        className={`absolute w-6 h-6 text-secondary inset-y-0 m-auto right-0 me-6`}
        placeholder={props.placeholder}
      />
    </div>
  );
}

TextForm.propTypes = {
  id: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default TextForm;
