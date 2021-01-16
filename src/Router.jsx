import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ContactDetail from "./pages/Contact/ContactDetail";
import ContactEdit from "./pages/Contact/ContactEdit";
import ContactCreate from "./pages/Contact/ContactCreate";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact/create" component={ContactCreate} />
      <Route exact path="/contact/:id" component={ContactDetail} />
      <Route exact path="/contact/:id/edit" component={ContactEdit} />
      // todo need crate 404 page
      <Route component={Home} />
    </Switch>
  );
};

export default Router;
