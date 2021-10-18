import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "utils/constants";
import Layout from "components/Layout/Layout";
import { Cart, Products, Error } from "pages";

function Routes() {
  const { HOME, PRODUCT, CART } = ROUTES;

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={HOME}>
            <Redirect to={PRODUCT} />
          </Route>
          <Route exact path={PRODUCT} component={Products} />
          <Route exact path={CART} component={Cart} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
