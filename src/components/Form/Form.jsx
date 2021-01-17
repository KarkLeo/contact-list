import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchInitValue } from "../../store/reducers/formContactReducer";
import Field from "./Field/Field";
import formConfig from "../../utils/formConfig";
import { changeField } from "../../store/reducers/formContactReducer";
import validateField from "../../utils/validateField";
import validateForm from "../../utils/validateForm";
import "./Form.css";
import { cleanInitValues } from "../../store/reducers/formContactReducer";
import { useHistory } from "react-router";

const Form = ({ id, title, submit }) => {
  const form = useSelector((state) => state.form_contact.fields);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const fetchAndRedirect = async () => {
      if (id) {
        if (await dispatch(fetchInitValue(id))) history.push("/");
      } else {
        dispatch(cleanInitValues());
      }
    };
    fetchAndRedirect();
  }, [id]);

  const onChangeValue = (e, field) => {
    dispatch(changeField({ ...field, value: e.target.value }));
  };
  const onTouchChange = (field) => {
    dispatch(changeField({ ...field, isTouch: true }));
  };
  const onValidate = (f, c) => dispatch(changeField(validateField(f, c)));
  const onSubmitForm = (e) => {
    if (!validateForm(form)) submit();
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmitForm}>
        <div className="page-head">
          <h1 className="page-head__title">{title}</h1>
          <div className="page-head__button-row">
            <button type="submit" className="btn" disabled={validateForm(form)}>
              Сохранить
            </button>
          </div>
        </div>

        <div className="fields-grid">
          {formConfig.map((i, n) => (
            <Field
              key={i.name}
              name={i.name}
              label={i.label}
              type={i.type}
              required={i.required}
              maxLength={i.maxLength}
              options={i.options}
              value={form[n]?.value}
              onChangeValue={(e) => onChangeValue(e, form[n])}
              onTouchChange={() => onTouchChange(form[n])}
              onValidate={() => onValidate(form[n], i)}
              isTouch={form[n]?.isTouch}
              isError={form[n]?.isError}
              errorMessage={form[n]?.errorMessage}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
