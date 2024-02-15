import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineExclamation } from "react-icons/hi";

function TextForm(props) {
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
        type={props.inputType}
        placeholder=" "
        className={`px-[28px] bg-transparent py-4 text-lg rounded-lg w-full font-medium text-primary border-2 border-secondary transform ${
          isFocused ? "pt-6 pb-2" : ""
        }`}
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={props.value || ""}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      <label
        htmlFor={props.id}
        className={`absolute left-0 text-md text-secondary ms-[30px] font-medium duration-300 transform ${
          isFocused || props.value
            ? "translate-y-2 text-secondary text-sm bg-transparent"
            : "translate-y-5"
        }`}
      >
        {props.formName}
      </label>

      {props.icon !== undefined ? (
        <props.icon
          className={`absolute w-6 h-6 text-secondary right-0 me-6 inset-y-5`}
          placeholder={props.formName}
        />
      ) : (
        ""
      )}

      {props.error && (
        <div className="flex mt-1 font-medium text-md text-warning">
          <HiOutlineExclamation className="w-4 h-4 my-auto me-2" />
          <p>{props.error}</p>
        </div>
      )}
    </div>
  );
}

TextForm.propTypes = {
  id: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextForm;
