import React from "react";
import { Route,Redirect } from "react-router-dom";

const Adminlayout = props => {
  return <div>{props.children}</div>;
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
            return(
          <Adminlayout>
            <Component {...propsComponent} />
          </Adminlayout>
            );
        }
        // chuyen ve trang admin
        return <Redirect to ="/admin"/>
      }}
    />
  );
}
