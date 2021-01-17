import React, { useEffect } from "react";

const Select = ({
  type,
  label,
  name,
  options,
  value,
  required,
  onChangeValue,
  onTouchChange,
  onValidate,
  isTouch,
  isError,
  errorMessage,
}) => {
  useEffect(() => {
    onValidate();
  }, [value]);

  return (
    <div className={`fields-grid__item fields-grid__item--${name}`}>
      <label className="field">
        <span className="field__label">{label}</span>
        <select
          name={name}
          required={required}
          value={value}
          className={`field__input ${
            isTouch && isError ? "field__input--error" : ""
          }`}
          onChange={onChangeValue}
          onFocus={onTouchChange}
          onBlur={onValidate}
          placeholder={label}
          defaultValue={""}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
        {isTouch && isError && (
          <span className="field__error">{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Select;
