import React from "react";
import Layout from "../../components/commons/Layout/Layout";
import Detail from "../../components/Detail/Detail";
import { NavLink } from "react-router-dom";

const ContactDetail = ({ match }) => {
  return (
    <Layout>
      <div className="page-head__nav">
        <NavLink to="/" className="btn btn--outline">
          К списку
        </NavLink>
      </div>

      <Detail id={match.params.id} />
    </Layout>
  );
};

export default ContactDetail;
