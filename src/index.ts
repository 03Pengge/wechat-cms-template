import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

/**
 * 渲染子应用
 */
const Render = (): JSX.Element => {
  return <div id="subapp-viewport">撒大法师地方</div>;
};

export default function render({ loading }) {
  const container = document.getElementById("subapp-container");
  ReactDOM.render(<Render />, container);
}
