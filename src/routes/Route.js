import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLayout from "../pages/_layouts/auth/AuthLayout";
import DefaultLayout from "../pages/_layouts/default/DefaultLayout";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...otherProps
}) {
  const logged = useSelector(state => state.auth.logged);

  if (!logged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logged && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  const Layout = logged ? DefaultLayout : AuthLayout;

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
