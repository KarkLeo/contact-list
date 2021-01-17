import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../../components/Form/Form";
import Layout from "../../components/commons/Layout/Layout";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { sentNewContact } from "../../store/reducers/formContactReducer";

const ContactCreate = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const submit = async () => {
    if (await dispatch(sentNewContact())) {
      history.push(`/`);
    }
  };
  return (
    <Layout>
      <div className="page-head__nav">
        <NavLink to={`/`} className="btn btn--outline">
          К списку
        </NavLink>
      </div>

      <Form title="Создать пользователя" submit={submit} />
    </Layout>
  );
};

export default ContactCreate;
