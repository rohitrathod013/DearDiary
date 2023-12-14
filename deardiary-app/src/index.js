import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./component/App";

const root = document.getElementById('root');

const render = (Component) => {
  const rootElement = React.createElement(Component);
  ReactDOM.createRoot(root).render(rootElement);
};

render(App);
