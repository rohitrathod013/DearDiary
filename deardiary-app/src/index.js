import React from "react";
import App from "./components/App";
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const render = (Component) => {
  const rootElement = React.createElement(Component);
  ReactDOM.createRoot(root).render(rootElement);
};

render(App);

export default App;
