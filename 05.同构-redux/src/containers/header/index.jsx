import React, { Fragment, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store";

function Header(props) {
  const login = useCallback(() => {
    props.login();
  });

  const logout = useCallback(() => {
    props.logout();
  });

  return (
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      {props.isLogin ? (
        <Fragment>
          <li>
            <Link to="/">翻译列表</Link>
          </li>
          <li>
            <button onClick={logout}>退出登录</button>
          </li>
        </Fragment>
      ) : (
        <li>
          <button onClick={login}>登录</button>
        </li>
      )}
    </ul>
  );
}

export default connect(state => ({ isLogin: state.login.isLogin }), {
  login: actions.login,
  logout: actions.logout,
})(Header);
