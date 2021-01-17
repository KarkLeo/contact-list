import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/commons/Layout/Layout";
import Form from "../../components/Form/Form";
import { sendUpdateContact } from "../../store/reducers/formContactReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const ContactEdit = ({ match }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const submit = async () => {
    if (await dispatch(sendUpdateContact(match.params.id))) {
      history.push(`/contact/${match.params.id}`);
    }
  };
  return (
    <Layout>
      <div className="page__head">
        <NavLink to={`/contact/${match.params.id}`} className="btn">
          Назад
        </NavLink>
      </div>

      <Form id={match.params.id} title="Редактировать" submit={submit} />
    </Layout>
  );
};

export default ContactEdit;
