import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import routes from "./config/routes";

export default function App() {
  return (
    <div>
      <ul>
        {routes.map(route => {
          return (
            <li key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        {routes.map(({ title, ...rest }) => {
          return <Route {...rest} key={rest.path} />;
        })}
      </Switch>
    </div>
  );
}
