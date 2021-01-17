import React from "react";
import Layout from "../../components/commons/Layout/Layout";
import Detail from "../../components/Detail/Detail";
import { NavLink } from "react-router-dom";
import Form from "../../components/Form/Form";

const ContactDetail = ({ match }) => {
  return (
    <Layout>
      <div className="page__head">
        <NavLink to="/" className="btn">
          К списку
        </NavLink>
      </div>

      <Detail id={match.params.id} />
    </Layout>
  );
};

export default ContactDetail;
