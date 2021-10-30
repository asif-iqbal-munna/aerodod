import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="mt-12 flex justify-center">
        <CircularProgress color="success" />
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
    );
  }
};

export default PrivateRoute;
