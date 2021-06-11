import React from "react";

const InputGroup2 = ({
  className,
  type,
  label,
  labelColor,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  return (
    <div className={className || "mb-4 lg:mb-8"}>
      <label
        html={name}
        className={`text-sm lg:text-base  ${labelColor || "text-temp-primary"}`}
      >
        {label}
      </label>
      <div className="relative input input-field w-full mb-2">
        <input
          type={type || "text"}
          className={`mt-3 text-temp-secondary block px-5 h-12 lg:h-14 text-sm lg:text-base w-full rounded-lg border bg-white placeholder-temp-secondary focus:outline-none ${
            error ? "border-red-600" : " border-temp-gray-light"
          }`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </div>
      <span className="text-red-600 text-sm">{error}</span>
    </div>
  );
};

export default InputGroup2;
