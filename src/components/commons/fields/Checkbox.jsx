import React from "react";
import Icon from "../Sprite/Icon";

const Checkbox = ({
  type,
  label,
  name,
  value,
  required,
  onChangeValue,
  onTouchChange,
  onValidate,
  isTouch,
  isError,
  errorMessage,
}) => {
  const toggleCheckbox = () => onChangeValue({ target: { value: !value } });

  return (
    <div className={`fields-grid__item fields-grid__item--${name}`}>
      <label>
        <span className="field__label">{label}</span>
        <div className="field-checkbox">
          <input
            className="field-checkbox__input"
            type="checkbox"
            name={name}
            checked={value}
            value={value}
            required={required}
            onChange={toggleCheckbox}
            onFocus={onTouchChange}
            onBlur={onValidate}
          />
          <span className="field-checkbox__icon-box">
            <Icon
              iconId={value ? "check" : "uncheck"}
              className={`field-checkbox__icon ${
                value
                  ? "field-checkbox__icon--check"
                  : "field-checkbox__icon--uncheck"
              }`}
            />
          </span>
          <span
            className={`field-checkbox__label ${
              value
                ? "field-checkbox__label--check"
                : "field-checkbox__label--uncheck"
            }`}
          >
            {label}
          </span>
        </div>

        {isTouch && isError && (
          <span className="field__error">{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
