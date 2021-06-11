import React from "react";

const TextAreaGroup = ({
  label,
  labelColor,
  name,
  value,
  placeholder,
  cols,
  rows,
  error,
  showTip = true,
  tip,
  hasLabel = true,
  marginBottom,
  onChange,
  textColor,
  borderColor,
  textSize,
}) => {
  return (
    <div className={marginBottom || "mb-8"}>
      {hasLabel && (
        <>
          <label
            html={name}
            className={`text-sm md:text-base ${
              labelColor || "text-temp-primary"
            }`}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <textarea
        className={`mt-3 py-4 resize-none block px-5 w-full rounded-lg border bg-white placeholder-temp-secondary focus:outline-none 
        ${textSize || "text-sm md:text-base"}
        ${textColor || "text-temp-secondary placeholder-temp-secondary"} ${
          error
            ? "border-red-600"
            : borderColor
            ? borderColor
            : " border-temp-gray-light"
        }`}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        rows={rows || "4"}
        onChange={onChange}
      ></textarea>
      <span className="text-sm block text-red-600 py-2">{error}</span>
      {showTip && (
        <p className="text-xs md:text-sm pt-3 text-temp-gray">
          {tip || "Not more than 200 words"}
        </p>
      )}
    </div>
  );
};

export default TextAreaGroup;
