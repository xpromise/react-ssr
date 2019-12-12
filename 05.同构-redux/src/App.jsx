import React from "react";
import Header from "./containers/header";
import { renderRoutes } from "react-router-config";
import { actions } from "./containers/header/store";

function App(props) {
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  );
}

App.loadData = store => {
  return store.dispatch(actions.getHeaderInfo());
};

export default App;
