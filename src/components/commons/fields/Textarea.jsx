import React from "react";

const Textarea = ({
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
        <textarea
          name={name}
          maxLength={maxlength}
          required={required}
          value={value}
          onChange={onChangeValue}
          onFocus={onTouchChange}
          onBlur={onValidate}
          className={`field__input field__input--area ${
            isTouch && isError ? "field__input--error" : ""
          }`}
        />
        {isTouch && isError && (
          <span className="field__error">{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Textarea;
