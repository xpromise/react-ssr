import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/login">登录</Link>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </div>
  );
}
