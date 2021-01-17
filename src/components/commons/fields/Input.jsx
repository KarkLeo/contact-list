import React from "react";

const Input = ({
  type,
  label,
  name,
  value,
  maxlength,
  required,
  onChangeValue,
  onTouchChange,
  onValidate,
  isTouch,
  isError,
  errorMessage,
}) => {
  return (
    <div className={`fields-grid__item fields-grid__item--${name}`}>
      <label className="field">
        <span className="field__label">{label}</span>
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxlength}
          required={required}
          className={`field__input ${
            isTouch && isError ? "field__input--error" : ""
          }`}
          onChange={onChangeValue}
          onFocus={onTouchChange}
          onBlur={onValidate}
        />
        {isTouch && isError && (
          <span className="field__error">{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Input;
