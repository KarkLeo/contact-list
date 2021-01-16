import React from "react";
import { NavLink } from "react-router-dom";
import Detail from "../../components/Detail/Detail";
import Layout from "../../components/commons/Layout/Layout";

const ContactEdit = ({ match }) => {
  return (
    <Layout>
      <div className="page__head">
        <NavLink to={`/contact/${match.params.id}`} className="btn">
          Назад
        </NavLink>
      </div>

      <Detail id={match.params.id} />
    </Layout>
  );
};

export default ContactEdit;
