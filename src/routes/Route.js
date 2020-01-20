import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth/AuthLayout";
import DefaultLayout from "../pages/_layouts/default/DefaultLayout";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...otherProps
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...otherProps}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.func
};

RouteWrapper.defatulProps = {
  isPrivate: false
};
