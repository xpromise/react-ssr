import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/login">登录</Link>
      </li>
    </ul>
  );
}
